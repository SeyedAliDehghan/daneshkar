function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}
function hard(len){
    let firstNum=10**(len-1);
    let secNum=(10**len)-1;
    for (let i=firstNum;i<=secNum;i++){
        checkArr(i,len)
    }
    console.log(firstNum);
    console.log(secNum);
}
function checkArr(numberToCheck,length){
    let tmplen=length;
    let tmp=0;
    const numToSeparate = numberToCheck;
    const arrayOfDigits = Array.from(String(numToSeparate), Number);
    for (let i=0;i<arrayOfDigits.length;i++){
        // console.log(arrayOfDigits[i])
        if (isPrime(arrayOfDigits[i])){
            tmp++;
        }
    }
    if (tmp===tmplen){
        console.log(numberToCheck," ,")
    }
    // console.log(arrayOfDigits);
    // console.log(arrayOfDigits.length);

}
checkArr(123)
console.log(hard(3))