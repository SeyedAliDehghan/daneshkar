const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function printNum(num){
    strNum=num.toString();
    for (let i=0;i<strNum.length;i++){
        let x=strNum[i];
        process.stdout.write(x+":");
        for (let j=0;j<x;j++){
            process.stdout.write(x);
        }
        console.log("");
    }
}


let number;
//let last;
readline.question('Enter Number: ', (num) => {
    number=num;
    printNum(number)
    readline.close();
});

//let num=10532;
//printNum(num);
//console.log(num.toString()[1]);
//process.stdout.write(" "+"ds");
//printNum(num);
