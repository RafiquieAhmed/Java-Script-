// if else else if
// switch case
// early return Pattern

if(12){
    console.log('hi');
}
if(false){
    console.log('no');
}
else{
    console.log('thank god');
}
//switch case :
// switch (val){
//     case 1:
//         break ;
//     case 2:
//         break;
//     default :
// }

function getval(val){
    if(val <25) return "D";
    else if(val <50) return "C";
    else if (val<75) return "B";
    else return "A";

}
console.log(getval(5));