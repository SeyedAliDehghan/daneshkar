movies = {
    aquaman:{
        name: "aquaman",
        rate: "8.2/10",
        img: "img/aquaman.jpg"
    },
    avengers:{
        name: "avengers",
        rate: "7.9/10",
        img: "img/avengers.jpg"
    }
};

moviesList = JSON.stringify(movies);
obj=JSON.parse(moviesList);
// console.log(movies);

function createMovie(key){
    const movieContainer=document.getElementsByClassName("movieContent")[0];

    let movieBox=document.createElement("div");
    movieBox.classList.add("movieBox");
    let movieImg=document.createElement("img");
    movieImg.src=key.img;
    movieImg.classList.add("movieImg")
    movieBox.append(movieImg);

    let movieInfo=document.createElement("div");
    movieInfo.classList.add("movieInfo");
    let movieNameSpan=document.createElement("span");
    movieNameSpan.classList.add("movieName");
    const movieName=document.createTextNode(key.name);

    let movieRateSpan=document.createElement("span");
    movieRateSpan.classList.add("movieRate");
    const movieRate=document.createTextNode(key.rate);

    movieNameSpan.append(movieName)
    movieBox.append(movieInfo);
    movieInfo.append(movieNameSpan);
    movieBox.append(movieInfo);
    movieRateSpan.append(movieRate);
    movieInfo.append(movieRateSpan);
    movieContainer.append(movieBox);
}

for (key in obj){
    createMovie(obj[key])
    console.log(obj[key].name);
}
let a="aalii";
let b="1";
if (a.includes(b)){
    alert("yes");
}
const searchBox=document.getElementsByClassName("search_box")[0];


searchBox.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        const movieContent=document.getElementsByClassName("movieContent")[0];
        movieContent.innerHTML=' ';
        for (key in obj){
            if (obj[key].name.includes(searchBox.value)){
                createMovie(obj[key])
            }

        }
    }
});
