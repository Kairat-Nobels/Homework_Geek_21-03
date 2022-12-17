var array=['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var obj={}
var arr=[]
for(var tag of array){
    if (obj[tag]) {
        obj[tag]++;
    } else {
        obj[tag] = 1;
    }
}
let arrval = Object.values(obj);
arrval.sort((a, b) => b - a)
console.log(obj);
for(let key in obj){
    arr.push(key)
}
var sortArr = arr.sort((a, b) => obj[b] - obj[a])
for (let i = 0; i < sortArr.length; i++){
    sortArr[i]=sortArr[i]+": "+arrval[i]
}
let sortObj={...sortArr}
console.log(sortObj);