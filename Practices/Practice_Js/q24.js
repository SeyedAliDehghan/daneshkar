let grades=[0,5,10,11,20,19,16];
let counter=0;
let sum=0;
for (let i=0;i<=grades.length;i++){
    if (grades[i]>15){
        sum+=grades[i];
        counter++;
    }
}
console.log("average is: "+ sum/counter);