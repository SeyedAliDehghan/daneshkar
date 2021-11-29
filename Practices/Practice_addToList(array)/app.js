let arr=[];

button = document.querySelector("button");
input = document.querySelector("input");
list = document.querySelector(".list");


button.addEventListener("click", add);
list.addEventListener('click',remove)

function add(event) {
  event.preventDefault();
  arr.push(input.value);
  render();
}
function remove(event) {
    const item = event.target;
    // item.parentElement=remove();
    console.log(item.parentElement);
    item.parentElement.remove();
}
function render() {
  for(let i=0;i<arr.length;i++){
  const listItem = document.createElement("li");
  const span=document.createElement("span");
  span.innerText=arr[i];
  listItem.appendChild(span);
  const removeBtn = document.createElement("button");
  removeBtn.innerText="remove";
  removeBtn.classList.add("romove");
  listItem.appendChild(removeBtn);
  list.appendChild(listItem);
  }
}
