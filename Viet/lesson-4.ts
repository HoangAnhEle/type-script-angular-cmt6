/*

Bài tập:
    Tìm hiểu và sửa chữa đoạn code ts phía dưới. Giải thích cách làm ở mục giải thích dưới gợi ý

Gợi ý: Using type predicates

Giải thích: ...đoạn code phía dưới lọc rồi lấy ra các dữ lệu thuộc về user riêng và admin riêng
  -   Using type predicates sử dụng kiểm tra xem có user trong person không nếu có trả về true còn không có trả về flase
*/
    


interface IUser {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface IAdmin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type TPerson = IUser | IAdmin;

export const persons: TPerson[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: TPerson) {
    return person.type === 'admin';
}

export function isUser(person: TPerson) {
    return person.type === 'user';
}

export function logPerson(person: TPerson) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

