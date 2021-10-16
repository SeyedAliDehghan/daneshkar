let userInput = '';
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function getInput() {
    readline.question(`Type your input: (enter 'exist' to finish): `, input => {
        userInput = input;
        printCube(userInput)
        readline.close();

        // if (userInput.toLowerCase() === 'exit') {
        //     readline.close()
        // } else {
        //     getInput()
        // }
    })
}
function printCube(num){
    for (let i=1;i<=num;i++){
        for (let j=1;j<=num;j++){
            if (i==1 || i==num || j==1 || j==num){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }
        }
        console.log("")
    }
}

getInput()