import { combineReducers } from 'redux';

import title from '../TabPages/reducers';
import users from '../system/reducer';

export default combineReducers({
    title,
    users
})