 //operators 

 // Arithmetic ,comparison ,logical ,assignment , unary ,ternary
 
// + - * / % **
// = == ===
// < > <= >= ! != !== !!
// && ||
// ?:
  
// Arithmetic  operators

//comparison 
//(= == === != !== < >  <= >=)
// = matlab value dalna 

let a =10 //assignment
let b= 20;
console.log(a=='10'); //true
console.log(a==='10'); //false
console.log(a!='10'); //false not strict
console.log(a!=='10');//not strict  true
console.log(a<b);
console.log("String 1",a <='9'); //false (10<=9)
console.log("string 2",a<='12'); // iska matalab jab string sa number compare karto ho string convert hota number ma ,
// otherwise  jab ek number ko strings compare karto ho NAN return deta =>NaN consider as false
console.log("string 2",a<='hello');//false
console.log(a>='9');


//assignemet values 
let ass=12;
ass=10
console.log(ass+=3);
console.log(ass-=3);
console.log(ass*=1);
console.log(ass%2);
ass=4
console.log(ass/2);
console.log(ass**2);

//logical (&& || !)
a=100,b=200
console.log("---------logical ----");
console.log(a!=b && b=='200');
console.log(a==b || b=='200');
console.log(!(a!=b && b=='200'));
console.log(!!12);

console.log("---------unary ---------------");
//unary operator
// + - ! typeof ++ --
console.log(+"6"+1); //consider as number  do perform
console.log(+"js");// not possible to covert

a=typeof(12)
console.log(a);
let val=12;
console.log(val);
val++;
console.log(val);
let pre=20;
++pre
console.log(pre);
let dec=3;
dec--;
console.log(--dec);

//ternary (?:)
//condition ? true hui ka code : flase hui ka code

('run'<'Run')? console.log('yes'): console.log('no');






