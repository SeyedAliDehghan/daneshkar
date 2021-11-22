let str="hello";
let char="l";
let counter=0;
for (let i=0;i<str.length;i++){
    if (str.charAt(i)===char){
        counter++;
    }
}
console.log(counter);