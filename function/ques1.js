// what the diference b/w  function decalration and experssion of hoisting

//  quesion 2: function mul(a,b) {
// return a*b;
// }

let mulitply =(a,b)=>{
    return a *b;
}
console.log(mulitply(12,2))

// use rest parameter to accept any no.of scores and return  the total.

function getscore(...scores){
    let total=0;
    scores.forEach(function (val){
        total += val;
    });
    return total;

}
console.log(getscore(12.34,32,34,13,43))
//what does it mean ehen we say "funtions are first-class citizens"?

//what is the of IIFE ? Name one real -world use case.

let shery =(function(){
    let score=0;
    return {
        getscore:function (){
            console.log(score);
        },
        setscore :function (val){
            score=val
        },
    };
})
();

