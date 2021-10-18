function arrRm(firstArr,secArr){
    let finalArr=firstArr;
    for (let i=0;i<secArr.length;i++){
        finalArr.splice(firstArr.indexOf(secArray[i]),1)
    }
    console.log(finalArr);
}
let firstArray= [1,2,3,4,5];
let secArray=[1,5];
arrRm(firstArray,secArray);