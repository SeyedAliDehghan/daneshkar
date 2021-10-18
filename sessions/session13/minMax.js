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