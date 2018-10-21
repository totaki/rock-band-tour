import moment from 'moment';

export default {
    groups: [
        {
            id: 1,
            name: "Black Tomato's",
            avatar: "/assets/images/group_1.svg",
            members: [
                {
                    id: 1,
                    name: "Ivan Ivanov",
                    bio: "Crazy guy",
                    avatar: "/assets/images/members/member_1.svg",
                    health: 70,
                    moral: 90,
                    salary: 10000
                }
            ]
        },
        {   id: 2,
            name: "Мохнатый шмель",
            avatar: "/assets/images/group_2.svg",

        },
    ],
    events: [
        {
            id: 1,
            date: moment('201801021800', 'YYYYMMDDhhmm'),
            place: "Some place",
            size: 50,
            price: 10
        },
        {
            id: 2,
            date: moment('201801031800', 'YYYYMMDDhhmm'),
            place: "Some place",
            size: 50,
            price: 10
        },
        {
            id: 3,
            date: moment('201801041800', 'YYYYMMDDhhmm'),
            place: "Some place",
            size: 50,
            price: 10
        }
    ],
    eventsPromo: [
        ["Листовки", 10],
        ["Плакаты", 20],
        ["Радио", 30],
        ["Интернет", 40],
        ["Телевидение", 50],
    ]
}