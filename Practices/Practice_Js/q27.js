let arr1=[1,2,3,4,5];
let arr2=[1,2,3,4,5,6];
let arr3=[];

for (let i=0;i<(arr1.length<arr2.length?arr2.length:arr1.length);i++){
    if (arr1[i]===undefined ||arr2[i]===undefined){
        if (arr1[i]===undefined){
            arr3.push(arr2[i]);

        }else if (arr2[i]===undefined){
            arr3.push(arr1[i]);
        }
    }else{
        arr3.push(arr1[i]+arr2[i]);
    }
}
console.log(arr3);