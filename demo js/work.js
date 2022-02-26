//mỗi ngày 50 dòng code
//và tăng lên theo từng ngày

//bài tập về array: tạo ra 1 list danh sách bạn bè

const friends = [
    {name:'khang điệu',phone:'123456789'},
    {name:'Dương béo',phone:'2345678901'},
    {name:'nghị',phone:'3456789012'},
    {name:'Uyên',phone:'456789901'},
];
console.log(friends[1].name);
// câu lệnh này sẽ tìmowr trong array friends và thuộc tính là name 
//kết quả {name:'Dương'}
//tính kết quả của phép tính sau:(a++ * --a + b-- + a++ + c-- - ++b ) * ++c 
const a = 2;
const b = 4;
const c = 6;
const d = (a++ * --a + b-- + a++ + c-- - ++b ) * ++c;
//(2*2+4+ a++ + 6 - ++b)* ++c/a=2,b=3,c=5
//(8+2+6-4)*6    /a=3,b=4,c=6
d=72;
//--a * --d + b-- + c++ - ++a + --c + ++b
//1*71+4(3)+6(7)-2+6+4
//89

// với phép toán gán ta hiểu đơn giản là 
// vd : a+=b => a=a+b và các phép -=,*= ,/= cũng tươgn tự như thế
  

// bài tập về function
// tính chu vi và diện tích các hình sau 
// hình chữ nhật , hình vuông , hình tam giá vuông

// chu vi hình chữ nhật
function caculateRectangleSquare(a,b){
    return a * b;
}
caculateRectangleSquare(2,4);

function chuViHinhChuNhat(c,d){
    return (a + b) / 2 ;
}
chuViHinhChuNhat(2,4);


function dienTichHinhVuong (e){
    return e * e ;
}

dienTichHinhVuong(2);
 
function chuViHinhVuong (f){
    return 4 * f ;
}

chuViHinhVuong(2);

