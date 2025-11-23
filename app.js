// let isJsProgramminglanguage = true;
// let isJsHard = false;
// let favnum = 20;
// console.log(isJsProgramminglanguage);
// console.log(isJsHard);
// console.log(favnum);


//switch case

// let x=5;
// let txt;
// switch (x){
//     case 0 :
//         text = "off"
//         break;
//     case 1 :
//         text= "sunday";
//         break;
//     case 2 :
//         text= "Monday";
//         break;
//     case 3 :
//         text= "tuesday";
//         break;
//     case 4 :
//         text= "wednesday";
//         break;
//     case 5 :
//         text= "thursday";
//         break;
//     case 6 :
//         text= "friday";
//         break;
//     case 5 :
//         text= "saturday";
//         break;    
//     default:  
//     console.log("there are seven days in a week");   

// }

// console.log (text);


// Array

// const favSinger=["nabin k bhattrai", "Ishan onta" , "Sabin Rai"];
// console.log(favSinger[0]);

// const favNum = [1,2,3,4];
// const mixedarr =   ["aayush",["gurjudhara","nepal"],123, true];
// console.log(favNum);
// console.log(mixedarr);
//   favSinger.push("ishanThapa");
// console.log(favSinger);
// console.log(favSinger.join('-'));
// const pl=["js","css"];
// console.log(pl.includes("css"));
// console.log(pl);


// objects concept
// it is a data sturucture, which allows us to  store a collection of data

//  let person = {
//     firstName : "Aayush", 
//     lastName: "Shrestha",
//     age : 19,
//     location: ["Earth","Planet"],
//     isProgrammer : true,
// };

// person.clz = "uni";
// console.log(person);

// // ascessing item in object
// console.log(person.age);

// console.log(person['firstName']);

// tasks

// let car ={
//     type : 'hundai',
//     model : 2006,
//     color: 'black',
// }
// console.log(car.type);
// console.log(car.type = "suzuki");
// car.wheels = "nice";
// console.log(typeof(car));
// console.log(car);

// const person = {
//     name: "Aayush Shrestha",
//     age : 19,
//     location : ["chandrairi","Balambu"],
//     isProgrammer : true,
// };
// console.log(person);
// console.log(person.age);


// Functions
// a function is a block of code that performs a specific task

// syntax = functionName (parameterIfAny){....}
// function greet( ){
//     console.log("function call sucessfully.");
// }
// greet();

// function sayHello(name){
//     console.log(`Hello ${name}`);
// }
// sayHello("Aayush");
// sayHello("Prince");
// sayHello("ishan");
// sayHello("ram");

//return in function

// function add(x,y) {
//     return x+y;
// }
// console.log(add(10,5));

//challenfges

// function myFunction(a,b){
//     return a *b;
    
// }
// const res = myFunction(2,5);
// console.log(res);
// myFunction();

// function decleration 
// function sayHello(username){
//     console.log(`hello ${username}`);
// }
// sayHello("ram");
// // function expression
// const greet = function (name){
//     console.log(`hello ${name}`);
// }
// greet("aayush");

//call back function in js
// when we provide funciton as an argument to other function that functin is
//known as call back funciton.

// function showCallFunv(fn)   {
//     const val = 10;
//     fn(val)
    
// }
// showCallFunv(function(val){
//     console.log(val);
// });
//self try
// function greet(name,callback ) {
//     console.log(`HEllo ${name}`);
//     callback();
// }
// function callback(){
//     console.log(`This is a callback function`);

// }
// greet("Aayush",callback);


// function showCallFunc(fn) {
//     let a=10;
//     fn(a);
    
// }

// showCallFunc(function(a){
//     console.log(a);
// });

// scope 
// scope in js  refers to the current context of code which determines the accessibility 
// of a variable  to js 

// let textMessage="This is  message"; this is global
// console.log(textMessage);

// function showMsg(){
//     let textMessage ="HI";// this is local
//     console.log(textMessage);
// }
// showMsg();

// methods in js
//  it is a function inside a object

// simople way to write  method
// function greet() {
//     return `hello, My namne is  ${person.name}. My age is ${person.age}`;
    
// }
// const person ={
//     name :"Aayush",
//     age : 19,
//     greet,
// };
// console.log(person.greet());

// real-world method

// const person ={
//     name :"Aayush",
//     age : 19,
//     greet: function greet() {
//             return `hello, My namne is  ${person.name}. My age is ${person.age}`; 
//         },
// };
// console.log(person.greet());


// json



