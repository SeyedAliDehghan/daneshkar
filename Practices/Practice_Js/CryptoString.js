function crypt(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetArr = Array.from(String(alphabet));
    let strArr = Array.from(String(string));
    for (let i=0;i<strArr.length;i++){
        let tmpIndex=alphabetArr.indexOf(strArr[i]);
        strArr[i]=alphabetArr[tmpIndex+1];

    }
    let done=strArr.join('');
    return done;
}
function run(num,string){
    let tmp=string;
    for (let i=0;i<num;i++){
        tmp=reverse(tmp);
        tmp=crypt(tmp)
    }
    return tmp;
}
function reverse(str){
    let strArr = Array.from(String(str));
    strArr.unshift(strArr.pop());
    return strArr.join('');
}

let str="abcd";
let cryptedStr=run(5,str);
console.log(cryptedStr);
