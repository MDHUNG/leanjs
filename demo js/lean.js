/*lý thuyết về js
mỗi ngày 50 dòng  

array trong js
const tênArray = [các giá trị cách nhau bằng dấu ','];
const evenNumber = [2,4,6];*/

const dog1 = {
    name: 'xoăn',
    type:'chó ta'
};
const dog2 = {
    name :'anh cả',
    type:'lạp sưởng'
};
const dog3={
    name:'em út',
    type:'husky'
};
const bunchOfDogs = [dog1,dog2,dog3];
 
 console.log(bunchOfDogs[2].name);

 //bunchOfDogs[index cuar array].thuộc tính của aray đó
// index của array đó đước tính là 0,1,2,3,..

const dog4 = {
    name:'chị cả',
    type:'shipa'
};
 bunchOfDogs[0]=dog4;// thay dog1 bằng dog 4
 console.log(bunchOfDogs[0].name);//xem kết quả kết quả {name:'chị cả'} 
 // trong thực tế array dùng để lưu trữu list( danh sách) các object giống nhau
 // điện thoại ->contacts

 const contacts=[
{
    name: 'khang điệu',
    phone:'1234567890'
},
{
    name:'dương',
    phone:'1234569870'
},
 ];

//các phép toán sô học
//1.++ --
//2.*/%(dễ)
//3.+-(vẫn dễ)
//nếu a=a++ khí đó a=a và a=a+1 ,a=++a khi đó a=a+1
const a = 5;
const b =10;
a++ + ++a;
//5 + ++a/a=6
//5 + 7 = 12

a++ + ++a - --a + a--
//5 + ++a - --a + a--//a=6
// 5 + 7 - --a + a--//a=7
//5+7 - 6 + a--//6
//5+7-6+6=12
a++ * b-- + --a * ++b;
//5*10+ --a * ++b;/a=6,b=9
//50+5*10=100
/*function doSomething(input1,input2,...)
{
    //code
    return something;
}*/
// tên function thường là động từ

function calculateTriangleSquare(a,h){
    return a * h / 2;
}

//tisnh diện tích tam giác có
// h=5,a=10
calculateTriangleSquare(10,5);

// tính diện tích hình tròn 
//S= r * r * 3.14
// bài tập tính diện tích hình tròn với r = 10
function CalculateCircleSquare(r){
    return r * r *3.14;
}
 
CalculateCircleSquare(10);