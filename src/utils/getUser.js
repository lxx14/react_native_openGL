import React from 'react';
import User from '../TabPages/Components/User/User';


export const getUser = (data, place, props) => {
    const isСontacts = place === 'contacts';
    let usersList;
    if (Array.isArray(data)) {
        usersList = data.map(item =>
            <User
                key={item.id}
                id={item.id}
                name={item.name}
                user={item}
                {...props}
                online={isСontacts ? item.online : null}
                chats={!isСontacts}
                messages={isСontacts ? null : item.messages}
            />);
    }
    return usersList || null
}
