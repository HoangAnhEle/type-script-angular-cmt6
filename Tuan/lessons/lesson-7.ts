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
    - Mô tả hàm getObjectKeys: Dùng để lấy thuộc tính của 1 object
    - Mô tả hàm filterPerson sau khi sửa: Dùng để lấy giá trị của các đối tượng person theo đối tượng
    cần lấy, kiểu của đối tượng và lấy theo thuộc tính gì
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