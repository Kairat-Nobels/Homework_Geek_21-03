const perevorot = function(str){
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) newStr += str[i];
    return newStr
}
console.log(perevorot('привет'));
const srednee = function (){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) sum += arguments[i]
    return sum / arguments.length;
}
console.log(srednee(1,2,3,4,5,6,7,8,9,10));