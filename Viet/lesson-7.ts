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
    - Mô tả hàm getObjectKeys: ...hàm này sử dụng Generic <T là tham số được định nghĩa>(obj: T)kiểu dữ liệu của obj là T
       + Object.keys(obj) là mảng chứa tất cả key của obj
       + as là phương thức Alias trong TS
       + (keyof T)[] là mảng key của Object.keys(obj) được lấy tư T
    - Mô tả hàm filterPerson sau khi sửa: ...xử lý sẽ lọc và lấy ra những người có quyền là admin hoặc user 
    sau đó sẽ kiểm tra xem những ai có độ tuổi là 23 so sách và lấy ra những user và admin có độ tuổi là 23 
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

// export function filterPersons(persons: TPerson[], personType: IUser['type'], criteria: Partial<Omit<IUser, 'type'>>): IUser[];
// export function filterPersons(persons: TPerson[], personType: IAdmin['type'], criteria: Partial<Omit<IAdmin, 'type'>>): IAdmin[];
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