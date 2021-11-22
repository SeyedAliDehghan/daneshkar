
let num=30;
let divisors=[];
for (let i=0;i<30;i++){
    if (num%i===0){
        divisors.push(i);
    }
}
console.log("All divisors are: "+divisors);
console.log("greatest divisor is: "+divisors[divisors.length-1])