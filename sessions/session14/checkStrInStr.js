const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function check(first,second){
    if(first.includes(second)){
        let secArr = Array.from(String(second));
        console.log("first index:",first.indexOf(second),"last pos is: ",first.indexOf(second)+(secArr.length-1));

    }else{
        console.log("not found");
    }
}

let firstStr;
let secondStr;
readline.question('first str: ', (fStr) => {
    firstStr=fStr;
    readline.question('sec str: ', (secStr) => {
        secondStr=secStr;
        check(firstStr,secondStr);
        readline.close();
    });

});

//console.log(num.toString()[1]);
//process.stdout.write(" "+"ds");
//printNum(num);
