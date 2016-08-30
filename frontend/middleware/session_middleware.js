import {
  SessionConstants,
  receiveCurrentUser,
  receiveErrors
} from '../actions/session_actions.js';

import {
  signup,
  login,
  logout
} from '../util/session_api_util';

import { FilterConstants } from '../actions/filter_actions.js';

  const SessionMiddleware = store => next => action => {
    let success = user => store.dispatch(receiveCurrentUser(user));
    let error = xhr => {
      const errors = xhr.responseJSON;
      store.dispatch(receiveErrors(errors));
    };
    switch(action.type){
      case SessionConstants.SIGNUP:
        signup(action.user, success, error);
        return next(action);
      case SessionConstants.LOGIN:
      debugger;
        login(action.user, success, error);
        return next(action);
      case SessionConstants.LOGOUT:
        let logoutSuccess = () => (console.log("successfully logged out"));
        logout(logoutSuccess);
        return next(action);
      default:
        return next(action);
    }
  };

  export default SessionMiddleware;
