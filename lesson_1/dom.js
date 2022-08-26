// html DOM 

// 1 element
/* + ID , class , tagName , css selector , HTML collection */
/* getElementById là select qua id
getElementsByClassname là select qua class
getElementsByTagName là select qua tag */ 
/* 
var nodeList = document.querySelector('.box');

console.log(nodeList.querySelector('li'));

var elementId = document.getElementById('123');

console.log({elementId})

var elementClass = document.getElementsByClassName('box');

console.log(elementClass) */


// 2 attributers
/* var headingElement = document.querySelector('h1');

headingElement.className = 'heading';
// nếu thêm class phải dùng classname 
// với những element  ko có attributes nếu dùng như trên là ko được
//nếu muốn đặt attibutes ko phải thuộc element thì dùng setAttribute

headingElement.setAttribute('cmn','heading-1')

//cách lấy ra giát trị của attribute thì dùng getAttribute

console.log(headingElement.getAttribute('cmn'))
console.log(headingElement.cmn)// khi dùng set thì ko thể dùng .
console.log(headingElement.className)//vẫn có thể lấy ra bằng cách dùng dấu .

console.log(headingElement) */


// text
/*  
 innerText khác với textContent là lấy ra giá trị của text
 interText chỉ hiện những gì hiện trên màn hình trong phần console
 textContnent nó hiện những gì ở phần code hiện cả code
 */
/* 
var headingElement = document.querySelector('.heading');

headingElement.innerHTML = '<span>hi DOM </span>';

console.log([headingElement]) */

// innerHTML là thêm 1 tag bên trong thẻ và có thể dè nhưn text ở bên trong nó 


// CLASS LSIT 
// add thêm 1 thuộc tính vào 
// contain kiểm tra xem thuộc tính đó có trong class ko 
// remove xóa 1 thuộc tính ra khỏi class
// togger kiểm tra nếu co thì xóa đi nếu ko có thêm vào 
/* 
var boxElement = document.querySelector('.box');
boxElement.classList.add('red','blue','yellow')

setInterval(() => {
    boxElement.classList.toggle('blue');
},1000)

console.log(boxElement.classList.contains('yellow')); */

// DOM event

/* var h1Elements = document.querySelectorAll('h1');

var h1ElementLength= h1Elements.length;

for ( let i = 0;i < h1ElementLength; ++i) {
    h1Elements[i].onclick = function(e) {
        console.log(e.target.innerText);
    }
} */

// DOM events

/* var inputElement = document.querySelector('input[type="text"]');

inputElement.onkeyup = function(e) {
  console.log(e.which);
  switch(e.which) {
    case 27:{
      console.log('exit')
    }
  }
  
} */
/* 
var inputElementcheck = document.querySelector('input[type=checkbox]')

inputElementcheck.onchange = function(e) {
  console.log(e.target.checked);
} */


// event listener

// var btn = document.getElementById('btn');
/* cách sử dụng DOM event
setTimeout(function(){
  btn.onclick = function(e) {
    console.log('viec 1');
    console.log('viec 2');
    console.log('viec 3');
  };
},5000) */

// function viec1() {
//   console.log('viec 1');
// }

// function viec2() {
//   console.log('viec 2');
// }

// function viec3() {
//   console.log('viec 3');
// }

// btn.addEventListener('click',viec1);
// btn.addEventListener('click',viec2);
// btn.addEventListener('click',viec3);

// btn.removeEventListener('click',viec2)