import { combineReducers } from 'redux';

import title from '../TabPages/reducers';
import users from './reducer';

export default combineReducers({
    title,
    users
})