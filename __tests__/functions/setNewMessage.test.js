import { setNewMessage } from '../../src/utils/setNewMessage';

describe('works correctly', () => {

    it('recieve proper props', () => {

        const userId = 1;
        const text = 'hello';

        const message = {
            id: 3,
            date: 'now',
            text,
            recieved: true
        };

        const obj = {
            userId,
            message
        }

        expect(setNewMessage(1, [{ id: 1 }, { id: 2 }], 'hello')).toEqual(obj)
    });

    it('returns proper obj', () => {

        const result = setNewMessage(1, [{ id: 1 }, { id: 2 }], 'hello');

        expect(typeof(result)).toEqual("object")
    });
});