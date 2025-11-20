// arrays creation 

let details =["Rafiquie",20,true,5.7,[12,24],0]; //creation
console.log(details[0]); //access
// let arr = new Array();

details[4]=null;// modification
console.log(details);

// -------------------------------------------------------------
// Array methods;
let arr=[1,2,3,4,5];
console.log(arr.push('7cr'));  //add element at last pos
console.log(arr.pop());       //remove element from last pos
console.log(arr.shift());        //remove feom  1st pos
console.log(arr.unshift(0));    // add element from 1st pos
console.log(arr.splice(2,1)); //delete element from that range   // change actual array
// splice  //change from copy
let arr1=[1,2,3,4,5]
let newarr1=arr1.slice(0,4)
console.log(arr1.reverse()); // change main array
console.log(arr1);
let arr_s=[2,3,4,null,2,4,undefined,60,90.1];
console.log(arr_s.sort(function(a,b){
    // return a-b;
    return b-a;
}));

console.log(newarr1);

//foreach -> traverse evey element code as run 
arr=[11,10,1,2];
arr.forEach(function (val){
    if (val<10)
        console.log(val-1);
});



//Map  sirf tab use karna  hai jab aapko ek naya array banana hai pichhle array ke data ke basis par
//map dikhte i saath  man mein ek blank array bana liya karo

// let new_arr1=arr.map(function (val){
//     if(val>10)
//         return val;
// })
// console.log(new_arr1);

//jab  bhi aapko aisa koi case dikh jaaye jaha par ek array se naya array banega and wo naya array kuchh value ko rakhega



//---------------------------------------------------------------------------------------
//filter

let filarr =[1,2,3,4,5,6,7,8,9,10]
let newfil =filarr.filter(function (val){
    if(val %2==0) return val;
})
console.log(newfil);

let users = [
  { name: "Ali", age: 18 },
  { name: "Sara", age: 25 },
  { name: "John", age: 16 }
];

let adults = users.filter(user => user.age >= 90);

console.log(adults);


let nums = [1, 3, 5, 81];

let hasEven = nums.some(n => n % 2 === 0);

console.log(hasEven); // true
