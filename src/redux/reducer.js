import { ADD_TEXT } from './actions'
import { users } from '../../__mocks__/data';

const initialState = users;

export default (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case ADD_TEXT:
            state.map(item => {
                if (item.id === data.userId) {
                    item.messages.push(data.message)
                }
                return item;
            });
            return [
                ...state
            ]
        default: return state;
    }
};