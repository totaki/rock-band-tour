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
                    name: "Агафий",
                    bio: "Crazy guy",
                    avatar: "/assets/images/members/member6.svg",
                    health: 70,
                    moral: 90,
                    salary: 10000
                },
                {
                    id: 2,
                    name: "Аллочка",
                    bio: "Crazy guy",
                    avatar: "/assets/images/members/member8.svg",
                    health: 70,
                    moral: 90,
                    salary: 10000
                },
                {
                    id: 3,
                    name: "Захар",
                    bio: "Crazy guy",
                    avatar: "/assets/images/members/member5.svg",
                    health: 70,
                    moral: 90,
                    salary: 10000
                },
                {
                    id: 4,
                    name: "Женя",
                    bio: "Crazy guy",
                    avatar: "/assets/images/members/member7.svg",
                    health: 70,
                    moral: 90,
                    salary: 10000
                }
            ]
        },
        {   id: 2,
            name: "Мохнатый шмель",
            avatar: "/assets/images/group_2.svg",
            members: [
                {
                    id: 1,
                    name: "Деннис",
                    bio: "Crazy guy",
                    avatar: "/assets/images/members/member1.svg",
                    health: 70,
                    moral: 90,
                    salary: 10000
                },
                {
                    id: 2,
                    name: "Игорь",
                    bio: "Crazy guy",
                    avatar: "/assets/images/members/member2.svg",
                    health: 70,
                    moral: 90,
                    salary: 10000
                },
                {
                    id: 3,
                    name: "Зина",
                    bio: "Crazy guy",
                    avatar: "/assets/images/members/member3.svg",
                    health: 70,
                    moral: 90,
                    salary: 10000
                },
                {
                    id: 4,
                    name: "Аристарх",
                    bio: "Crazy guy",
                    avatar: "/assets/images/members/member4.svg",
                    health: 70,
                    moral: 90,
                    salary: 10000
                }
            ]
        },
    ],
    events: [
        {
            id: 1,
            date: moment('201801021800', 'YYYYMMDDhhmm'),
            place: "Harat's pub",
            size: 50,
            price: 5
        },
        {
            id: 2,
            date: moment('201801031800', 'YYYYMMDDhhmm'),
            place: "ДК Кирова",
            size: 100,
            price: 10
        },
        {
            id: 3,
            date: moment('201801041800', 'YYYYMMDDhhmm'),
            place: "Дизель Арена",
            size: 150,
            price: 15
        }
    ],
    eventsPromo: [
        ["Листовки", 5],
        ["Плакаты", 10],
        ["Радио", 20],
        ["Интернет", 30],
        ["Телевидение", 40],
    ],

    descriptions: [
        {
            id: 1,
            data: "Бас-гитарист\n Мужик с косичкой на бороде. Работает преподавателем в музыкальной школе “васильки” по классу гусли. Лучшим отдыхом считает смену деятельности, поэтому вечером в пабе через дорогу от дома культуры балуется бас гитарой. Разводит котят пароды мейн кун обращаться по телефону (8412200603)"
        },
        {
            id: 2,
            data: "Барабанщик. Длинноволосый бородатый мужик. Днем работает в магазине автозапчастей,  вечером наглухо закрывается в  подвале своего дома и долбит по барабанам, в перерывах поглядывает на ютубчике сольные выступления своего кумира - величайшего барабанщика всех времен и народов Ларса Ульриха из Metallica"
        },
    ]
}