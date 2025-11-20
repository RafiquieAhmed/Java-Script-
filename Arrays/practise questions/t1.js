//create an array  with 3 fruits and print the second fruit

let fruits=["Apple","Banana","cherry"];
console.log(fruits[1]);
//2) add mango  at end, pipeaple  begigning of this array
fruits.push("Mango");
fruits.unshift("Pineapple")


//3 replace banana with kiwi

fruits[2]="Kiwi";

console.log(fruits);

//4) difference  b/w push and unshift

//5)remove last  item using array
let arr=[1,2,3,4];
arr.pop()
console.log(arr);

//6)insert "Red and blue at index 1 in this array"
let color =["Green","Yellow"];
color.splice(1,0,"Red","Blue");
console.log(color);

// 7) extract only 3 elwmnts 
let items =[1,2,3,4,5,6];
console.log(items.slice(1,4))

//8)sort 
let names =["joy boy","luffy","nami","snaji","zoro","usop","broke"];
let rev=names.sort().reverse();
console.log(rev);

// 9)use .map() to squar each number;

let arr1= [1,2,3,4];
let new_arr =arr1.map(function (val){return val*val})
console.log(new_arr);

//10)use .filter to keep number >10;
let nums1=[5,10,34,54,8];
let new_num1=nums1.filter((val) =>{
    return val>10;
})

console.log(new_num1);

// 11) use reduce () to find the sum of this array
let redu=nums1.reduce(function (accu,curr){
    return accu+curr;
},0);
console.log(redu);

// 12) use find to get first number less than 20;
let arr2=[12,15,3,8,20];
let ans2=arr2.find(function (val){
    return val<20;
})
console.log(ans2);

//13)use .some()  to check if any student has scored below 35;
let arr3=[45,60,28,90];
arr.some(function (val){
    return val<35;
})


//14) use.every () to check if all numbers are even 
let arr4 =[2,4,6,8,10];
let new4=arr4.every(function (val){
    return (val % 2==0)
})
console.log(new4);

//destructing full name;
let fullname =["joy","boy"];
let [a,b]=fullname
console.log(a," ----",b);
