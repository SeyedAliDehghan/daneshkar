// let arr=[1,2,3,4,5,6,7,8,9,10];
// const shuffledArray = arr.sort((a, b) => 0.5 - Math.random());
// console.log(shuffledArray);

const shuffleArray = (array) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
