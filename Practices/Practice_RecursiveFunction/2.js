function Power(num,power){
    if(typeof num!= 'number'|| typeof power != 'number') return ('please insert two number')
    if(power===0) return 1
    return num*Power(num,power-1)
}

console.log(Power(5,3))