//create a resuble discount calucator (HOF)

function discountprices(discount){
    return function(price){
        return price -(price*(discount/100));
    }
}
let counter=discountprices(10)
console.log(counter(200));

