import { combineReducers } from 'redux';

import teachers from './teachers';
import departments from './departments';

export default combineReducers({
    teachers,
    departments
});
