import { applyMiddleware } from "redux";
import { createInjectStore } from "redux-injector";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "@pct_reducers";
import screenTracking from "./middleware/screen_tracking_middleware";
// import alteredHome from './middleware/altered_home';

const error = store => next => action => {
  try {
    next(action);
  } catch (e) {
    // Handle error!
    // if (e.name.localeCompare("EOLError") === 0) {
    //   console.log(
    //     "%c ======== EOL ERROR BEGIN ============",
    //     "background: #222; color: #bada55"
    //   );
    //   console.dir(e);
    //   console.log(
    //     "%c ======== EOL ERROR END ============",
    //     "background: #222; color: #bada55"
    //   );
    // }
    throw e;
  }
};

// const middleware = applyMiddleware(screenTracking, promise(), thunk, createLogger({}), error, alteredHome);
const middleware = applyMiddleware(
  screenTracking,
  promise(),
  thunk,
  createLogger({}),
  error
);

export default createInjectStore(reducer, middleware);
// export default createStore(reducer, middleware);
