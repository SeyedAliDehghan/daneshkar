function crypt(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetArr = Array.from(String(alphabet));
    let strArr = Array.from(String(string));
    // console.log(strArr);
    strArr.unshift(strArr.pop());
    console.log(strArr);
    for (let i=0;i<strArr.length;i++){
        let tmpIndex=alphabetArr.indexOf(strArr[i]);
        console.log(strArr[i]);
        strArr[i]=alphabetArr[tmpIndex+1];
        // console.log(strArr);

    }
    let done=strArr.join('');
    console.log(done)
    return done;
}
function run(num,string){
    let tmp=string;
    for (let i=0;i<num;i++){
        tmp=crypt(tmp);
    }
    console.log(tmp);
}

let str="abc";
run(2,str)