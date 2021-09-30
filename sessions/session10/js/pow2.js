function pow2Bigger(num){
    for (let i=0;i<num;i++){
        if (2**i>num){
            return 2**i;
        }
    }
}
console.log(pow2Bigger(95));