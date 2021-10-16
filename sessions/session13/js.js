function minMax(arr){
    // console.log(arr);
    const obj={
        max:Math.max(...arr),
        min:Math.min(...arr)
    }
    return obj;
    // console.log("Max is",Math.max(...arr));
    // console.log("Max is",Math.min(...arr));
}

let array=[1,2,3,4];
console.log(minMax(array));

// const counts = {};
// const sampleArray = ["a", "a", 'b', "c","c","c"];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)

function repeatCounter(arr){
    let obj= {}
    for (let i=0;i<arr.length;i++){
        let tmpcount=0;
        let tmp=arr[i];
        for (let j=0;j<=arr.length;j++){
            if (tmp===arr[j]){
                tmpcount++;
            }
        }
        // console.log(tmp,tmpcount)
        obj[tmp]=tmpcount;
    }
    return obj
}
const myArray = ["a", "a", 'b', "c","c","c"];
console.log(repeatCounter(myArray));