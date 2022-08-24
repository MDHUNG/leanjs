


/* function arrToObj(arr) {
  const obj =  arr.reduce(function(acc, cur) {
    acc[cur[0]] = cur[1];
    return acc;
  },{});
  return obj;
};

console.log(arrToObj([
  ['name', 'Son Dang'], 
  ['age', 21], 
  ['address', 'Ha Noi']
])); */


  /* console.log(arrToObj.reduce (function(fristValue,currentValue) {
  return [fristValue,...currentValue];
},{})) */


/* Array.prototype.some2 = function(callback) {
  var outPut = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index])
      if (result){
        outPut.push(this[index]);
        break;
      }
    }
  }
  return outPut
}

var courses = [
  {
    name: "Javascript",
    coin: 50
  },
  {
    name: "Java",
    coin: 100
  },
  {
    name: "PHP",
    coin: 500
  },
];

var someCourses = courses.some2(function(course) {
  return course.coin > 50;
})
console.log(someCourses) */

/* Array.prototype.filter2 = function(callback) {
  var outPut = [];
  for ( var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index],index,this)
      if (result) {
        outPut.push(this[index]);
      }
    }
  }
  return outPut;
}

var courses = [
  {
    name: "Javascript",
    coin: 50
  },
  {
    name: "Java",
    coin: 100
  },
  {
    name: "PHP",
    coin: 500
  },
];

var filterCourses = courses.filter2(function(course,index,array) {
  return course.coin > 50;
});
console.log(filterCourses) */

/* Array.prototype.find2 = function(callback) {
  for ( var index in this){
    if (this.hasOwnProperty(index)){
      callback(this[index])
    }
  }
};

var courses = [
  'javascript',
  'java',
  'PHP'
];

courses.find2(function(course) {
 console.log(course === 'java');
}) */

/* Array.prototype.forEach2 = function(callback){
  for (var index in this){
    if(this.hasOwnProperty(index)){
      callback(this[index],index);
    }

  }
}

var courses = [
  'javascript',
  'java',
  'PHP'
];

courses.forEach2(function(course,index){
  console.log(index,course);
}) */
/* Array.prototype.reduce2 = function (callback,initialValue) {
  //callback(this.number)
  
};
function callback(fristValue,currentValue) {
  return fristValue + currentValue ;
};

var totalNumber = numbers.reduce2(callback(),0);
//console.log(totalNumber); */

/*
 var courses = [
  'Javascript',
  'Java',
  'PHP'
];

Array.prototype.reduce2 = function(fristArray) {
  var outPut = [] ,arrayLength = this.length;
  for ( var i = 0; i < arrayLength; ++i) {
    var a = fristArray(this[i])
    
  }
  return outPut;
};

var lastArray = courses.reduce2(function(fristValue,currentCourse) {
  return fristValue.concat(currentCourse)
}, []);
console.log(lastArray) */
/* 
var c = courses.reduce(function(a,b) {
  return a.concat(b);
}, []);
console.log(c)
 */


/* 

MAp

var courses = [
  'Javascript',
  'Java',
  'PHP'
];

Array.prototype.map2 = function(callback) {
  var outPut = [] , arrayLength = this.length;
  for(var i =0; i < arrayLength; ++i){
    var a = callback(this[i])
    outPut.push(a)
  }
  return outPut;
};

var htmls = courses.map2(function(course) {
  return `<h2>${course}</h2>`;
  
});
console.log(htmls.join('')) */


/* var htmls = courses.map(function(course) {
  return `<h2>${course}</h2>`;
});
console.log(htmls.join('')); */

 /* {
    topic: 'front-end',
    courses:[
      {
        id:1,
        title: 'javascript'
      },
      {
        id: 2,
        title: 'HTML,CSS'
      }
    ]
  },
  {
    topic: 'back-end',
    courses:[
      {
        id: 1,
        title: 'PHP'
      },
      {
        id: 2,
        title: 'java'
      }
    ]
  }
];

var list = topics.reduce(function(a,b) {
  return a.concat(b.courses);
}, []);

var listId = list.reduce(function(e,f) {
  return e.concat(f.id)
},[]);
console.log(listId)
var listTitle = list.reduce(function(c,d) {
  return c.concat(d.title)
}, []);
console.log(listTitle)
console.log(list) */


/* var depthArray = [1,2,[3,4],5,6,[7,8,9]];
//chub's cái depthArray thành 1 array thằng
var flatArray = depthArray.reduce(function(flatOutPut,depth) {
  return flatOutPut.concat(depth);
}, []);
console.log(flatArray) */

/* var courses = [
  {
    id:1,
    name:'javascript',
    coin: 1
  },
  {
    id:2,
    name:'java',
    coin: 3
  },
  {
    id:3,
    name:'php',
    coin: 0
  },
  {
    id:1,
    name:'ruby',
    coin: 5
  },
  {
    id:1,
    name:'React JS',
    coin: 4
  },
]; */

/* var i=0; 
function coins(accumulator, currentValue, currentIndex, originArray) {
  i++
  var total = accumulator + currentValue.coin;
  console.table({
    'luot chay': i,
    'bien luu tru': accumulator,
    'gia khoa hoc': currentValue,
    'bien tich tru duoc': total,
  })

  console.log(currentValue); 

  return total

}

var tatolCoin = courses.reduce(coins,0);
console.log(tatolCoin);
 */


/* 
function courseHandler (course,index,originArray){
  return course.name; 
  /* {
    id: course.id,
    name: `khoa hoc : ${course.name}`,
    coin: course.coin,
    coinText: `gia: ${course.coin}`
  } 
}

var newCourses = courses.map(courseHandler);
console.log(newCourses) */

/* var course = courses.find(function(course,index){
  console.log(index)
  return course.name === 'java' ;
})
// kiểm tra và trả về giá trị của nó giống seachs trả về giá trị ngay đâu tiên
còn với filter nó se giống find nhưng nó trả lại tất cả nhưngx cái giống
console.log(course) */
/*
var isFree = courses.some(function(course,index){
  console.log(index)
  return course.coin === 0 ;
})
// kiểm tra điều kiện chỉ cần true ở đâu là dừng ở đấy
console.log(isFree)

var isFree = courses.every(function(course,index){
  console.log(index)
  return course.coin === 0 ;
})
// kiểm tra tất cả thỏa mãn điều kiện thì true ko thì false
console.log(isFree)

courses.forEach(function(course,index){
  console.log(course.name)
}) */
//forEach lọc qua các phần tử của array

/*
var myArray = [
  [1,2],
  [3,4],
  [5,6]
];

for (var i = myArray.length; i >= 0 ; i-- ) {
  for ( var j = myArray[i].length; j >=0; j--) {
    console.log(myArray[i][j]);
  }
}*/

/*
var languages = {
  name: 'hung',
  age: 20
}

console.log(Object.values(languages))
for ( var value of Object.values(languages)) {
  console.log(value)
}
*/
// for-of chỉ lọc được array , string ko lọc đc object

/*
console.log(Object.keys(languages))
for (var value of Object.keys(languages)) {
  console.log(languages[value])
}
*/

/*
var languages = ' javascript';
for ( var key of languages) {
  console.log(key)
  // of khác in là cái synax nó là languages[key]-in còn key-of nếu như làm giống như của in sẽ bị undefined 
}

var languages = 'javascript';
for (var key in languages) {
  //console.log(languages[key]);
}

var myArray = [
  'php',
  'c',
  'python',
  'javascript'
]
for ( var key in myArray) {
  console.log(myArray[key])
}

var myInfo = {
  name: 'duc hung',
  age: 20,
  address: 'Nam Dinh ,HN'
}
for (var key in myInfo) {
  //console.log(myInfo[key]);
}
// for in dùng cho cả string ,object, array;
*/

/*
//in từ 1 đến 1000 bằng vòng lặp for
var myArray = [
  'java',
  'javascript',
  'php',
  'c',
  'ruby',
  'python'
]
 
//var arrayLength = myArray.length;// tiết kiêmj hiệu năng nếu như viết như ở bên dưới thì cứ 1 lần vòng lặp nó sẽ kiểm tra lại myArray.length

for (var i = 0; i < myArray.length; i++){
  console.log(myArray[i]);
}

var a = 1;
var b = 2 ;
var c = a > 0 ? a : b;
console.log(c);

var date = 2;
 if (date > 0 ) {
  console.log('hôm nay là thứ 2')
 } else if (date === 3) {
  console.log('hôm nay là thứ 3')
 } else if (date === 4) {
  console.log('hôm nay là thứ 4')
 }

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;// đếm từ 0-11
var day = date.getDate();
console.log(`hôm nay là ngày ${day} tháng ${month} năm ${year}`);


function Use(firstName, lastName, avatar, age, transport) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function() {
    return `${this.firstName} ${this.lastName} nam nay ${this.age}`;
  };
  this.age = age;
  this.transport = transport;
  this.dieuKienDeDiXe = function() {
    if (this.age > 18){
      return `${this.firstName} đủ tuổi đi ${this.transport}`;
    } else {
      return `${this.firstName} chưa đủ tuổi đi ${this.transport}`;
    }
  };
};

Use.prototype.className = 'F8';
// thêm 1 element vào trong object constractor sử dụng prorotype và nó hiện ở proto chứ k ko hiện như bt

var auther = new Use('Hung', 'mai', 'avatar',17,'car');
var use = new Use('dung', 'dinh', 'avatar',20,'motor');

console.log(auther);
console.log(use);
*/
/*
var languages = [
    'javascript',
    'php',
    'ruby'
]; 
var languages2 = [
  'java',
  'c',
  'c++',
];

var languages3 = {
    name : "c#",

}
*/

/*var myFunction = (languages) => {
  for ( let i = 0; i < languages.length; i++){
    return languages[i];
  };
};

console.log(languages.map(myFunction));

*/
//console.log(languages.includes('c'))
// kiểm tra giá trị xem có trong array hay ko
//console.log(Array.isArray(languages3))
// kiểm tra xem có phải mảng hay không
//console.log(languages.slice(0,2))
// cắt 1 thành 1 array mới từ vị trị bắt đầy chỉ định và số phần tử chỉ định trả về array mới 
//console.log(languages.concat(languages));
// nối 2 array lại với nhau 
//console.log(languages.splice(-3,2))
// từ ví trí bắt đầu xóa đi số phần tử mình móng muốn
//console.log(languages.unshift('java'))
// unshift thêm cá phần tử vào đầu và trả về độ dài cảu array mới
//console.log(languages.shift())
// đưa ra già trị đầu tiền bị xóa ra khỏi mảng
//console.log(languages.push('java'));
// push laf thêm phần tử vào cuối mảng và trả  về độ dài của mảng
//console.log(languages);



// ---------FUNCTIONS-----------------


