import _ from "lodash";

function getPreviousScreenFromNavigationStack(routes, currIndex) {
  if (routes.length > 1) {
    return routes[currIndex - 1].key;
  }
  return null;
}

function getKeyForRouteNameFromEnd(routes, routeName) {
  let result = _.findLastIndex(routes, route => {
    return _.isEqual(route.routeName, routeName);
  });

  if (result !== -1) {
    return routes[result].key;
  }
  return null;
}

const modifyBackNavigation = store => next => action => {
    console.dir(store);
  if (action.type === "Navigation/BACK") {
    let forScreen = getPreviousScreenFromNavigationStack(
      store.navigation.routes,
      store.navigation.index
    );

    if (action.key !== null) {
      forScreen = getKeyForRouteNameFromEnd(
        store.navigation.routes,
        action.key
      );
    }

    let additionalParams = {};

    if (_.has(action, "additionalParams")) {
      additionalParams = action.additionalParams.params;
    }

    let foundRoute = _.find(store.navigation.routes, route => {
      return _.isEqual(route.key, forScreen);
    });

    foundRoute.params = {
      ...foundRoute.params,
      go_back_params: { ...additionalParams },
      back_navigation_happened: true
    };
  } else if (action.type === "UNSET_SCREEN_GO_BACK_PARAMS") {
    let routeIndex = _.findLastIndex(store.navigation.routes, route => {
      return _.isEqual(route.key, action.payload.screenKey);
    });

    if (
      routeIndex !== -1 &&
      !_.isEmpty(store.navigation.routes[routeIndex].params)
    ) {
      store.navigation.routes[routeIndex].params = _.omit(
        { ...store.navigation.routes[routeIndex].params },
        ["go_back_params", "back_navigation_happened"]
      );
    }
  }

  next(action);
};

export default modifyBackNavigation;
