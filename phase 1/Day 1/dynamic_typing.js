//dynamic typing =>js main static typing mahi hai and yaha par hai dynamic typing jiska matlab hai aap dat ko change kr sakta ho kyukli yaha par dynamic types hai

let a=12
a=true;
a=''
a=[]
a=null
a=undefined
console.log(typeof(a));

// quirks
// typeof null ==='Object'

console.log(typeof(NaN));
console.log(NaN===NaN);
console.log(0.1+0.2);

//type corresion
// truthy vs fasly value
// type corresion -> concept jismein aapka ek type automatically convet hojaayega

console.log("5"+1)
console.log("5"-1);

//false value
//=>!!0 , !!NaN  , !!null ,!!'' ,!!undefined , !!document.all
//rest all -> true

//typeof NaN ===Number =>true
// 2*'js'
//undefined and null

let x;
console.log(x);
let y=null;
console.log(y);