function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}
function hard(len){
    let firstNum=10**(len-1);
    // console.log(firstNum);
    let secNum=(10**len)-1;
    // console.log(secNum);
    for (let i=firstNum;i<=secNum;i++){
        checkArr(i,len)
    }
    // console.log(firstNum);
    // console.log(secNum);
}
function checkArr(numberToCheck,length){
    // let tmplen=length;
    // let tmp=0;
    // const numToSeparate = numberToCheck;
    // const arrayOfDigits = Array.from(String(numToSeparate), Number);
    // // if (isPrime(numberToCheck)){
    // //     for (let i=0;i<arrayOfDigits.length;i++){
    // //         // console.log(arrayOfDigits[i])
    // //         if (isPrime(arrayOfDigits[i])){
    // //             tmp++;
    // //         }
    // //     }
    // //
    // // }
    // console.log(numberToCheck/10)
    // if (tmp===tmplen){
    //     console.log(numberToCheck," ,")
    // }
    // console.log(arrayOfDigits);
    // console.log(arrayOfDigits.length);

}
function isHardPrime(number){
    let tmp=number;
    while (tmp>0){
        tmp=(tmp-(tmp%10))/10;
        if (!(isPrime(tmp))){
            return false;
        }else{
            return true;
        }
    }
    // return false
}
function allHardPrimes(len){
    let arr=[];
    let firstNum=10**(len-1);
    let secNum=(10**len)-1;
    for (let i=firstNum;i<secNum;i++){
        if (isPrime(i)){
            if (isHardPrime(i)){
                arr.push(i)
            }
        }
    }
    return arr;
}
console.log(allHardPrimes(3));
// console.log(isHardPrime(233))
// console.log(isPrime(223));
// checkArr(123)
// console.log(hard(3))