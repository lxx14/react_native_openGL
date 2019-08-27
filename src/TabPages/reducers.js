import { CHANGE_TITLE } from './actions'

const initialState = 'default title';

export default function (state = initialState, action) {
    const { type, data } = action;
    switch (type) {
        case CHANGE_TITLE:
            return data
        default: return state;
    }
};