import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { users } from '../../__mocks__/data';
import { Chats } from '../../src/TabPages/Chats/Chats';

//connected component to redux, необходимо в компоненте Chats экспортировать еще сам компонент и вверху теста подключать его через {}

describe('Chats', () => {
    it('create snapshot Chats', () => {
        const renderer = new ShallowRenderer()
        const snapshot = renderer.render(<Chats users={users} />);
        expect(snapshot).toMatchSnapshot();
    });
})