import { REGISTER_NOTIFICATION } from '../actions/push';

export default function push(state = 'Push Notification', action) {
  switch (action.type) {
    case REGISTER_NOTIFICATION:
      return state;
    default:
      return state;
  }
}
