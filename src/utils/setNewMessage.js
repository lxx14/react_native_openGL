export const setNewMessage = (itemId, messages, text) => {
    let newMessage;
    if (Number(itemId) && Array.isArray(messages) && String(text)) {
        const userId = itemId;
        const newId = messages[messages.length - 1].id + 1;

        newMessage = {
            userId,
            message: {
                id: newId,
                date: 'now',
                text,
                recieved: true
            }
        }
    }
    return newMessage || null
}