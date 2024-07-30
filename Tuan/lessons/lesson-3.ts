/*

Mô tả:

    Sửa lỗi trong hàm logPerson.

    Hàm logPerson nên chấp nhận cả User và Admin
    và nên trả thông tin liên quan theo
    đầu vào: nghề nghiệp cho User và vai trò cho Admin.
Gợi ý: the in operator narrowing

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

export type TPerson = IUser | IAdmin;

export const persons: TPerson[] = [
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

export function logPerson(person: TPerson) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
