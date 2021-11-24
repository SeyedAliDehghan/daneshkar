function sum(arr){
    let tmp=0;
    for (let i=0;i<arr.length;i++){
        tmp +=arr[i];
    }
    return tmp;
}
let arr=[1,2,3,4,5,6];
console.log(sum(arr));