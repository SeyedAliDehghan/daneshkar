const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

let myStr;
//let last;
readline.question('Enter string: ', (str) => {
    myStr=str;
    console.log(reverse(myStr));
    readline.close();
});
//str="1234";
//console.log(reverse(str));