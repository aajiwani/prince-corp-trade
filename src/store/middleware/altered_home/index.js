import { NavigationActions } from 'react-navigation';
import { SCREEN } from '@pct_config/navigation_routes';
import AlteredHomeParams from "./altered_home_params";

var defaultScreenName = SCREEN.SCREEN_TEMP;
var defaultRoute = {
  routeName: defaultScreenName,
  routeParams: AlteredHomeParams.GetParamsForScreen(defaultScreenName)
};

const fireAlteredHomePage = (store) => (next) => (action) =>
{
  if (action.type.includes('Navigation')
      && (action.type === NavigationActions.NAVIGATE || action.type === NavigationActions.RESET)
      && action.actions.length === 1
      && action.actions[0].routeName.localeCompare(SCREEN.HOME) === 0
    )
    {
      action.actions[0].routeName = defaultRoute.routeName;
      action.actions[0].params = defaultRoute.routeParams || {};
    }

  next(action);
};

export default fireAlteredHomePage;
