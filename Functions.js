// Functions 
// what why how 

//agar code likh diya to wo turant chal jaata hai
//resuablity

function greeting(){
    for(let i=0;i<5;i++)
    console.log('nice to see you');
}
// greeting(); 

//method -2 create function

let user=function (){
    //function name is user here
    console.log('Sanji for cooking');

}
// user();

//fuction declaration 

//function statements
function abcd(){

}

//function experssion => store function in variable

let fun= function(){

}

//fat arrow function
let fun1=()=>{
    console.log('learn js  from you tube');

}
fun1();

//--------------------------------------------------------------------------
//parameters  vs arguments
function dispaly(val1){  //val ->parameters
    console.log(`playing ${val1}`);
}
dispaly('gta') //arguments
dispaly('prototype')
dispaly('bgmi')

//--------------------------------------------------------------------------
//Default ,rest ,spread parameters
// default 
function add(v1,v2){
    console.log(`added ${v1+v2}`);
}
add();
// to slove this  we need

function add(v1=0,v2=0){
     console.log(`added ${v1+v2}`);
}
// add();

//rest vs spread

// jab arguments kai saare ho to humein utne hi parameter banaane padege , issey bachne ke liya ,hum rest ka use karte hai ... agarb..function ke parameters space mein lage to wo rest operator hai and agar wo arrays and objects mein lage to wo spread opertor 

function abcd(a,...val){
    console.log(a,val);
}
abcd(1,2,3,4,5,6,7,8,9)

//------------------------------------------------------------------
//Return values and early returns
// return matalab jaha se aaya ho wahi daal denge
function fun2(val){
    return 12+val;
}
console.log(fun2(23));


// ----------------------------------------------------------------

// first class functions

// --> function ko values ki tarah treat kar sakte hai 

function input (fun01){
    fun01();

}

input(function (){
    console.log('hi ! js learn functions');
})


// -------------------------------------------------------------
// higher order functions  
// -> wo function hota hai jo ki return kare function ya fir accept kare ek function apne  parameter mein

function abcde(){
    return function (){
        console.log('hello world');
    };
}

abcde()();

// -----------------------------------------------------------------
// pure vs impure function 
//  ek aise function jo  ki baahar value ko naa badle  wo hai pure 

let a=12;

function pure(){
    console.log('i am pure function');
}
pure();

function impure(){
    return a++;
}
console.log(impure);

//  ek aise function jo  ki baahar value ko  badle de   wo hai impure function 

// ----------------------------------------------------------------
 
// closures and lexical scoping
// closures ->ek aise function jo return kare ek aur function aur return  hone wale function humesha use karega parent function ka koi variable

function fun_clos(){
    let w= 12;
    return function (){
        console.log(w);
    }
}

fun_clos()();

// lexical scoping 

// ek concept  hai scope bara ma  out of block acess ni karchta ho
function lex(){
    let a=12;
    function ab(){
        let b=13;
        function cd(){
            let c=14;
        }
    }
}

// --------------------------------------------------------------
// IIFE(Immediately invoked Function Expression)

(function (){
    console.log('IIFE function');

})
();

// -----------------------------------------------------------------------

//Hoisting differnecs b/w declaration and expression 
abcd0();
function abcd0(){
    console.log('hello');
}

//fun expersion

expfun(); //get error for function expreesion


let expfun=function(){
    console.log('no run');
}

//--------------------------------------------------------------
//normal fun is mostly use old models , lastest vesion use ()=>