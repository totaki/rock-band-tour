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
            date: "05-01-2018",
            place: "Some place",
            size: 50,
            price: 10
        },
        {
            id: 2,
            date: "04-01-2018",
            place: "Some place",
            size: 50,
            price: 10
        },
        {
            id: 3,
            date: "06-01-2018",
            place: "Some place",
            size: 50,
            price: 10
        }
    ],
    eventsPromo: [
        ["Листовки", 5],
        ["Плакаты", 10],
        ["Радио", 20],
        ["Интернет", 30],
        ["Телевидение", 40],
    ]
}