import moment from "moment";

export const users = [
    {
        name: 'Vasya',
        online: 'online',
        id: 1,
        messages: [
            {
                id: 11,
                date: moment("20190820", "YYYYMMDD").fromNow(),
                text: 'hello',
                recieved: false
            },
            {
                id: 12,
                date: moment("20190822", "YYYYMMDD").fromNow(),
                text: 'hi bro',
                recieved: true
            }
        ]
    },
    {
        name: 'Petya',
        online: 'last seen just now',
        id: 2,
        messages: [
            {
                id: 21,
                date: moment("20190821", "YYYYMMDD").fromNow(),
                text: 'Have a nice day!',
                recieved: false
            },
            {
                id: 22,
                date: moment("20190824", "YYYYMMDD").fromNow(),
                text: 'thanks',
                recieved: true
            }
        ]
    },
    {
        name: 'Kolya',
        online: 'last seen 10 minutes ago',
        id: 3,
        messages: [
            {
                id: 31,
                date: moment("20190826", "YYYYMMDD").fromNow(),
                text: 'YO!',
                recieved: false
            },
            {
                id: 32,
                date: moment("20190827", "YYYYMMDD").fromNow(),
                text: 'HI!',
                recieved: true
            }
        ]
    }
]