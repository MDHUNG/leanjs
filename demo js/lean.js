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

// object methods
// object dùng để mô tả các sụ vật hiện tượng, vật thể bằng các thuộc tính của nó
const myDog = {
    weight : 5,
    name : 'lucy',
    age : 1
    bark: function (){
        console.log('ngu ngu',this.name);// this laf đại diện cho myDog thí là là đại diện cho objest
    }
    eat: function (bone){
        this.weight=this.weight + bone.weight;
        return this;
    }
};

const bone = {weight=5}

myDog.eat(bone);
console.log('after eating',myDog.weight);
// anonymous function (function ko tên)

myDog.bark()//kết quả ra 'ngu ngu'


function bark(){
    console.log('hihi');
};
 
function bark(){

};

// function as a parameter (callback)
// dùng function như một tham số

function sum (a,b){
    return a + b ;

};
sum(2,3);

const coffeeMachine = {
    makeCoffee : function(onFinish){//onFinish gọi là callback, onFinish truyền vào phải là 1 hàm nếu là 1 số sẽ báo lỗi
        console.log('making coffee...');
        onFinish();
    }
};

const beep =function(){
    console.log('tít tít ');
};

coffeeMachine.makeCoffee(beep);

const daySo = [1,2,3,4];
daySo.map (function(x){ //sau array.map là 1 function
                        // functiong này sẽ cho các số đi qua và trả ra các sô mới
    return x * x ;
});

//array.filter: làm nhiệm vụ lọc ra nhưng phần tử không thỏa mãn điều kiện
// cú pháp của cả map và filter chỉ cần thay fileter bằng map là xong hai cái này giống nhau
/*
syntax
arr.filter( function(item){
    //filter
    return newValue;//true or false//nếu true thì sẽ đc qua nếu false thì ko đc qua
});
*/
const number = [1, 2 , 3 , 4];
const evenNumbers = number.filter(function(item){
    return item % 2 === 0;
});
evenNumbers;//kết quả sẽ ra [2,4] vì đk là chia hết cho 2 và dư 0

const number1 =[1, 2 , 3 , 4];
const evenNumbers1 = number1.filter(function(item){
    return item % 2 === 1;
});
evenNumbers1;//lúc này kết quả sẽ ra là[1,3]vì đk là chia hết cho 2 và dư 1

/*
arr.find//là lọc cái phần tử qua cái đk nếu mà true thì cái arr.find này sẽ dừng lại và trả lại 1 giá trị chứ ko trả lại 1 mảng như là map và filter
cú pháp:
arr.find(fuction(item){
    return x;//true ỏr false
});
*/

const daySoMoi = [1, 2, 3, 4];
daySoMoi.find(function(item){
    return item % 2 ===0;
});

// khi đó kết quả trả về là 2 vì đk là chia hết cho 2 và dư 0 khi đến 2 giá trị đã trả lại true

const daySoCho = [1, 2, 3,4];
daySoCho.reduce(function(a, b){
    return a + b ;//tính tổng của dãy số trên
});//kết quả trả lại là 10
// các bước làm của hàm reduce này :
// 1 + 2 =3 lấy số thứ nhật cộng với số thứ 2 và lấy kết quả số thứ 2 để cộng với sôs thứ 3 cứ thế đến hết mảng 
// 3 + 3 =6
// 6 + 4 =10

//cú pháp :
/* 
arr.reduce(function(item1,item2){
    //calcultion
    return x ;
},init);// init là tham số thứ hai được lắp vào vị đầu tiên đo là item 1 và item 2 là vị vị tri đầu tiên của mảng
*/


const item = ['tom' , 'bill' , 'kim'] ;
item.reduce (function(item1,item2){
    return '<' + item + '>';
}) ;

item.map (function(x){
    return '<' + x + '>' ;
});


item.map((x)=>{
    return x + '>'
},'<');
item.join('<');




/*

REACT

 */
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
  // cho tất cả các biến trong function đấy với giá trị a,b là băng 4,7

  // đây là spread operator
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
// khí dùng như thế này {...myVehicle, ...updateMyVehicle} sẽ gán các giá trị lại thành 1 object cái sau sẽ đựoc thau thế bằng cái trước nếu như nó cùng element


/*ternary operator
Syntax(cú pháp): condition ? <expression if true> : <expression if false>
khi dùng if/else

if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

khi dùng ternary

authenticated ? renderApp() : renderLogin();


*/