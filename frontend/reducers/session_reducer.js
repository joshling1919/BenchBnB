import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultSession = {
  currentUser: null,
  errors: []
};

const SessionReducer = (sessionState = defaultSession, action) => {
  debugger;
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, defaultSession, { currentUser: action.user });
    case SessionConstants.RECEIVE_ERRORS:
      debugger;
      return merge({}, defaultSession, { errors: action.errors });
    case SessionConstants.LOGOUT:
      return defaultSession;
    default:
      return sessionState;
  }
};

export default SessionReducer;
