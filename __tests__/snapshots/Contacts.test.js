import React from 'react';
import { Contacts } from '../../src/TabPages/Contacts/Contacts';
import ShallowRenderer from 'react-test-renderer/shallow';
import { users } from '../../__mocks__/data';

//connected component to redux, необходимо в компоненте Chats экспортировать еще сам компонент и вверху теста подключать его через {}

describe('Contacts', () => {
    it('create snapshot Contacts', () => {
        const renderer = new ShallowRenderer()
        const snapshot = renderer.render(<Contacts users={users} />);
        expect(snapshot).toMatchSnapshot();
    });
})