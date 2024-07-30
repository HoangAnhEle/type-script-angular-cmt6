# <article align='center'>Hướng dẫn làm bài tập</article>

> **Lưu ý**:
> - Cài đặt [node](https://nodejs.org/en) trước khi làm bài tập, chọn phiên bản recommended hoặc phiên bản trước đó
> - Phần bài tập sẽ chứa trong folder [lessons](./lessons).
> - Tổng cộng **15** bài tập liên kết tới nhau.
> - Bài tập sẽ được đẩy lên theo lịch trình học của nhóm.

## Bảng kết quả bài tập

-Đợt 1 (<i>Cập nhật:</i> `29/02/2023`):

| Member                   | Lesson-1                              | Lesson-2                              | Lesson-3                              | Lesson-4                              |  
|--------------------------|---------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| **Phạm Quang Đức Thành** | <article align='center'>`V`</article> | <article align='center'>`V`</article> | <article align='center'>`V`</article> | <article align='center'>`V`</article> |    
| **Đào Mạnh Quang**       | <article align='center'>`V`</article> | <article align='center'>`V`</article> | <article align='center'>`V`</article> | <article align='center'>`V`</article> |     
| **Phạm Hoàng Anh**       | <article align='center'>`V`</article> | <article align='center'>`V`</article> | <article align='center'>`V`</article> | <article align='center'>`V`</article> |     

-Đợt 2 (<i>Cập nhật:</i> `00/00/0000`):

| Member                   | Lesson-5                            | Lesson-6                            | Lesson-7                            | Lesson-8                            |  
|--------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| **Phạm Quang Đức Thành** | <article align='center'>X</article> | <article align='center'>X</article> | <article align='center'>X</article> | <article align='center'>X</article> |    
| **Đào Mạnh Quang**       | <article align='center'>X</article> | <article align='center'>X</article> | <article align='center'>X</article> | <article align='center'>X</article> |     
| **Phạm Hoàng Anh**       | <article align='center'>X</article> | <article align='center'>X</article> | <article align='center'>X</article> | <article align='center'>X</article> |   

## Link github bài tập

```
https://github.com/sonhoang96/typescript-exercise
```

## Cấu trúc bài tập

```typescript
/* 
 'Đây là phần mô tả để bài + gợi ý
*/

/* Phần bài tập phía dưới */

interface IExample = string

const variable: string = 'Viết cái gì đó'

function runSomething(input: IExample) {
    //TODO: handle some thing there
    console.log(input)
    return input + variable
}

/* Phần bài tập phía trên */

```

## Quy tắc

- Không sử dụng định nghĩa kiểu dữ liệu là `any`.
- Sử dụng `tiếng anh` trong cú pháp viết.
- Không đẩy bài tập cá nhân vào folder người khác.
- Commit theo mẫu: **[name]/lesson-number/day_month** <br>
  `[VuDT]/lesson-1/28_01`
- Bài tập được xác nhận hoàn thành khi được tích `V` ở bảng kết quả phía trên
- Hoan hỷ không chửi bậy :D, không trêu bạn :D

## Bắt đầu

- Mở terminal của project và chạy `npm i`
- Copy file bài tập trong folder [lessons](./lessons) và paste vào folder của mình.
- Đọc mô tả bài tập, xem gợi ý.
- Mở terminal trỏ tới folder bài tập của cá nhân.
- Gõ cú pháp: **ts-node ten_bai_tap.ts**

Ví dụ:

```bash
    cd lessons
    npx ts-node lesson-1.ts
```

- Sửa cho code chạy log ra màn hình terminal.
- Giải thích cách làm ( nếu có yêu cầu )
- Commit code và đẩy lên

## Tài liệu tham khảo

<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/typescript/index.php" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg" alt="typescript" width="40" height="40"/> </a>
