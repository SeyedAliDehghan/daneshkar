function isPrime(num) {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

function twoNumber(num1,num2){
    for (let i=num1;i<=num2;i++){
        if (isPrime(i)===true){
            console.log(i,",")
        }
    }
}

console.log(twoNumber(0,10))
