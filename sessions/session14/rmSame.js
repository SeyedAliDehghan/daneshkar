const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function rm(str){
    let arr = str.split('');
    //console.log(arr);
    let uniqueChars = [...new Set(arr)];
    for(let i=0;i<uniqueChars.length;i++){
        process.stdout.write(uniqueChars[i]);
    }
}

let string;
//let last;
readline.question('Enter string: ', (str) => {
    string=str;
    rm(string)
    readline.close();
});
