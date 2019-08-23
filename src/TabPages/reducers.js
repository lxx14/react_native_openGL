import { CHANGE_TITLE } from './actions'

const initialState = 'default title';

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return action.data
        default: return state;
    }
};