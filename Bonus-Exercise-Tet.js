/* Toán tử ba ngôi: */
const x = 100;
const result = (x < 1000) ? 'Nhỏ hơn 1000': 'Lớn hơn 1000';

/* Shorthand Evaluated: */
let variable1;
const variable2 = variable1 || "";

/* Variable declaration - If Comparison: */
let a, b, c = 3;
//-----------------------------------
if (isTurnOn);

/* For loop - For loop with decimal base */
for(let item in sampleArr);
//-----------------------------------
for(let i = 0; i < 1e5; i++);
// Giá trị các biểu thức sau đều là True
1e0 === 1;
1e1 === 10;
1e2 === 100;
1e3 === 1000;
1e4 === 10000;
1e5 === 100000;


/* Object property */
const y = 1, z = 2;
const obj = {y,z}; // gán property cho object nếu tên key trùng tên biến

/* Rút gọn định nghĩa Function */ 
sayHello = name => console.log('Hello ', name);

setTimeout(() => console.log('Loaded'), 2000);

list.forEach(item => console.log(item));// Sử dụng arow function
//-----------------------------------
getValue = ratio => ratio * 6.9;// Implicit return (ẩn return đi bằng arrow function)

/* Set default value for parameter in function */
getValue1 = (a = 3, b = 4, c) => (a * b + c);

/* Template list */
const welcome = 'You have logged in as ${first} ${last} .';
//-----------------------------------
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris irure dolor in reprehenderit in voluptate velit esse.';

/* Destructuring Assignment */
import { action, service } from 'lib';

const { form, errors, entity, controller, component } = this.props;

/* Spread Operator */
//Joining arrays
const odd = [1, 3, 5];
const nums = [2, 4, 6, ...odd];
//cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = [...arr];

const odd1 = [1, 3 ,5];
const nums1 = [2, ...odd1, 4, 6];

/* Constraint Param */
mandatory = () => { throw new Error('Thiếu tham số!') }

sample = (param1 = mandatory()) => param1;

/* Find() in arrays */
const employees = [
    {name: 'Emp A', age: 25},
    {name: 'Emp B', age: 28},
    {name: 'Emp C', age: 35}
];

const name = 'Emp A';
emp = employees.find(item => item.name === name);

/* Object[key] */


const rule = {
    firstName:{
        required:true
    },
    lastName:{
        required:true
    }
}

const validate = (rule, values) => {
    for(prop in rule){
        if(rule[prop].required){
            if(!values[prop]){
                return false;
            }
        }
   }
   return true;
}

console.log(validate(rule, {firstName:'Duy'})); //false
console.log(validate(rule, {firstName:'Duy', lastName:'Buffet'})); //true


/* Bitwise NOT double */
~~6.9 === 6//true