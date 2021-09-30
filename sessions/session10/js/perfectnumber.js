function perfectnumber(num){
    let tmpnum=0;
    for (let i=0;i<num;i++){
        if (num%i===0){
            tmpnum=tmpnum+i;
        }
    }
    if (tmpnum===num) return "YES";
    else return "NO";
}
console.log(perfectnumber(6));
console.log(perfectnumber(7));