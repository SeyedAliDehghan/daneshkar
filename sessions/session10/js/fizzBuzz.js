function fizzbuzz(num){
    if (num%15===0) return "fizzBuzz";
    else if (num%3===0) return "fizz";
    else if (num%5===0) return "Buzz";
    else return "ERROR!";
}
console.log(fizzbuzz(1))