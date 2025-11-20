
// data ka type
// 12,'tom',true,1,[],{},(),null,undefined,NaN, BigInt

// primitives => asisi saari values  jinko copy karne par tumhe ek real copy mil jaaye

//string,number, null, boolean, undefined,symbol,bigInt

// Reference => inko copy karne par real copy nahi milegi but  aapko Reference milegi parent ka
// array ,object  functions
 let a=[1,2,3]
 let b=a;
 b.pop()
console.log(a);

//strings
// '' ""  ``back ticks

//booleans
let c=true
let d=false

//null
//=> null ka matlab hai aapne jaan  boojh kar koi value nahi di
let user=null;
user='aman';

//undefined

//undefined ka matlab ki aaapne ek variable  banaya aur value nahi di to jo value by default mili wo hi undefined
let formers;

// Symbol ->unqiue immutable value 

//future mein hum koi libries use karege ab is case mein un libries mein kai baar kuchh fields hoti gai jinse similar hum bhi banaa dete hai aur galti se humaari banaai hui feilds us library ki original feilds ko change kar  deta hai

let user_mode={
    uid:1,
    model:'daily'
};
user_mode.uid=12;

//
let u1=Symbol("uid");
let u2=Symbol("uid");
console.log(u1===u2);

let obj ={
    uid :1,
    name:'Rafi',
    age:21,
    email:'js@gmail.com',
}

let e1 =Symbol("email");
obj[e1]='sgdkjsa@hdh.com';
console.log(e1);


//bigInt
Number.MAX_SAFE_INTEGER
let num=Number.MAX_SAFE_INTEGER
console.log(num+1);
console.log(num+2);
console.log(num+3);
console.log(num+4);


let num1=62139862862n
let add=num1*74932749274983274932749379n
console.log(add);


//arrays

let arr_a=[1,2,3];
let arr_b=arr_a;
arr_b.pop()
console.log(arr_a);

//objects
//same concept for object also
let obj_a={
    name:'humza',
}

let obj_b=obj_a;
obj_b.name ='hala'
console.log(obj_a);
