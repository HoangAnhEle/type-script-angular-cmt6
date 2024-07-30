/*

Mô tả:

    Type "Person" đang bị thiếu, hãy định nghĩa nó và sử dụng nó trong
    mảng persons và hàm logPerson để sửa tất cả lỗi TS.

Gợi ý: Union Types

*/

interface IUser {
    name: string;
    age: number;
    occupation: string;
}

interface IAdmin {
    name: string;
    age: number;
    role: string;
}

export type Person = IUser | IAdmin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
