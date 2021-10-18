const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function move(arr,index,offset){
    let array=arr;
    array.splice(index+offset,0,...array.splice(index,1));
    return array;
}
let myArr=[1,2,3,4,5,6];
console.log("first arr is: ",myArr)
let index;
let offset;
readline.question('Enter index: ', (indx) => {
    index=indx;
    readline.question('sec str: ', (ofst) => {
        offset=ofst;
        let newArr=move(myArr,2,2);
        console.log("and now its: ",newArr);
        readline.close();
    });

});

// console.log("index is 2 and offset is 2")
// let newArr=move(myArr,2,2);
// console.log(newArr);