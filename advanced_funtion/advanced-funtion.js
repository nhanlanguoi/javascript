
/*
✅ Đặc điểm:
Có tên (f1)

Được hoisting (có thể gọi f1() trước khi định nghĩa nó)

Dễ đọc, rõ ràng

✅ Dùng khi:
Muốn định nghĩa các hàm thông thường trong chương trình

Cần hoisting (được gọi trước khi định nghĩa)
*/
function f1(){
    console.log('hello');
}
f1();



/*✅ Đặc điểm:
Là biểu thức, nên không được hoisting

Có thể ẩn tên hoặc có hàm có tên nội bộ

Dùng như một giá trị (truyền làm tham số, gán vào biến…)

✅ Dùng khi:
Cần gán hàm vào biến/đối tượng

Viết hàm ẩn danh hoặc hàm nội bộ

Trong callback function */
const f2 =  function(){
    console.log('hello');
}

f2();




/*
✅ Đặc điểm:
Hàm hello() được truyền như một đối số cho run

Kỹ thuật này gọi là callback

✅ Dùng khi:
Muốn truyền hành vi (hàm) cho hàm khác

Xử lý bất đồng bộ (async), sự kiện, lặp, v.v.

Làm việc với setTimeout, map, forEach, v.v.


 */
function run(pram){
    pram();
}

run(function hello(){
    console.log('hello1');
});




/*✅ Đặc điểm:
Ngắn gọn hơn function expression

Không có this, arguments, super, new.target riêng

Không dùng làm constructor

✅ Dùng khi:
Cần viết hàm ngắn, đơn giản

Callback ngắn gọn

Không cần this riêng (vì nó kế thừa this từ bên ngoài) 
*/
const arrowfunction =() => {
    console.log('arrowfuntion')
}
arrowfunction();




/////////////////////
setTimeout(function(){//set time run in much millisecond
    console.log('helloadf');
}, 3000);

console.log('hummm');
setInterval(function(){//set a variable run in millisecond
    console.log('hellohg');
}, 3000);


/*
✅ forEach()
🔍 Chức năng:
Duyệt qua từng phần tử của mảng và thực hiện một hành động nào đó (ví dụ: in ra, tính toán...).

📌 Cú pháp:
js
Sao chép
Chỉnh sửa
array.forEach(function(value, index) {
    // code xử lý tại đây
});
value → giá trị hiện tại trong mảng

index → vị trí (số thứ tự) của phần tử
*/
[
    'k',
    'l',
    'm',
].forEach(function(value ,index){
    console.log(value);
    console.log(index);
});


/*
✅ filter()
🔍 Chức năng:
Lọc ra các phần tử thoả điều kiện, và trả về mảng mới.

📌 Cú pháp:
js
Sao chép
Chỉnh sửa
let newArray = array.filter(function(value, index){
    return điều_kiện; // true thì giữ lại, false thì bỏ
});


 */
const numbers = [2, 7, 3, 8, 1];
const filtered = numbers.filter(function(num) {
    return num > 5;
});
console.log(filtered); // 👉 [7, 8]


/*
✅ map()
🔍 Chức năng:
Tạo mảng mới bằng cách biến đổi từng phần tử của mảng ban đầu.

📌 Cú pháp:
js
Sao chép
Chỉnh sửa
let newArray = array.map(function(value, index){
    return gì_đó; // trả về giá trị mới
});
*/
const nums = [1, 2, 3];

const doubled = nums.map(function(n) {
    return n * 2;
});

console.log(doubled); 
