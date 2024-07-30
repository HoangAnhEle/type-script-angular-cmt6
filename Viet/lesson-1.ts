/*

Mô tả:
    Từ dữ liệu cho trước, hãy định nghĩa interface "User" và sử dụng nó theo đúng cách.

Gợi ý: Objects

*/
 interface user{
    name:string,
    age:number,
    occupation:string
}

export type IUser = user;

export const users: user[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: user) {
    console.log(` - ${user.name}, ${user.age}`);
}

users.forEach(logPerson);