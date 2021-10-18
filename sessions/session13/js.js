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

