/*

Mô tả:
    Từ dữ liệu cho trước, hãy định nghĩa interface "User" và sử dụng nó theo đúng cách.

Gợi ý: Objects

*/


export type IUser = User;

export const users: User[] = [
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

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

users.forEach(logPerson);


interface User {
    name: string,
    age: number,
    occupation: string
}