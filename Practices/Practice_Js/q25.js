let nums=[1,2,3,4,5,6,7,8];
let count=0;
let sum=0;
for (let i=0;i<nums.length;i++){
    sum+=nums[i];
    count++;
}
for (let i=0;i<nums.length;i++){
    if (nums[i]<sum/count){
        console.log(nums[i])
    }
}