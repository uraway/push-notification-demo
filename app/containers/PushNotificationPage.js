import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PushNotification from '../components/PushNotification';
import * as PushNotificationActions from '../actions/push';

function mapStateToProps(state) {
  return {
    push_notification: state.push_notification
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PushNotificationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PushNotification);
