let num="1";
check(num);
// console.log(num%10);
function check(){
    switch (num%10){
        case 1:
            console.log(num+"st")
            break;
        case 2:
            console.log(num+"nd")
            break;
        case 3:
            console.log(num+"rd")
            break;
        case 4:
            console.log(num+"th")
            break;
        default:
            console.log("idk")
    }
}