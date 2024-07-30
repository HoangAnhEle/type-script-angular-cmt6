/*

Bài tập:

    Dưới đây là đoạn code sử dụng function overloads (filterPerson) để lọc những user dựa trên
    tiêu chí (criteria) và kiểu của user đó. Hãy đọc thật kỹ đoạn code phía dưới và sửa nó lại
    thành một hàm filterPerson duy nhất mà không dùng function overloads. Kết quả mong muốn:
    ```
    Users of age 23:
      - Kate Müller, 23, Astronaut
      - Wilson, 23, Ball

    Admins of age 23:
       - Agent Smith, 23, Anti-virus engineer
    ```

Gợi ý:
    - functions overloads và function implementation
    - Generic
    - Partial và Omit
    - Type predicates
Giải thích:
    - Mô tả hàm getObjectKeys: truyền các tham số (đối tượng) với nhiều kiểu dữ liệu khác nhau lấy ra tất cả các thuộc tính có trong tham số (đối tượng)
    - Mô tả hàm filterPerson sau khi sửa: tham số đầu vào 1 mảng các đối tượng kiểu TPerson, thuộc tính type cần lọc (Admin, User),  các thuộc tính trở thành lụa chọn qua Partial<TPerson>
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
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: TPerson) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
    );
}


// @ts-ignore
const getObjectKeys = <T>(obj: T) => Object.keys(obj) as (keyof T)[];

export function filterPersons(persons: TPerson[], personType: TPerson['type'], criteria: Partial<TPerson>): TPerson[] {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
            let criteriaKeys = getObjectKeys(criteria);
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);