button = document.querySelector("button");
input = document.querySelector("input");
list = document.querySelector(".list");


button.addEventListener("click", add);
list.addEventListener('click',remove)

function add(event) {
  event.preventDefault();
  const listItem = document.createElement("li");
  const span=document.createElement("span");
  span.innerText=input.value;
  listItem.appendChild(span);
  const removeBtn = document.createElement("button");
  removeBtn.innerText="remove";
  removeBtn.classList.add("romove");
  listItem.appendChild(removeBtn);
  list.appendChild(listItem);
}
function remove(event) {
    const item = event.target;
    // item.parentElement=remove();
    console.log(item.parentElement);
    item.parentElement.remove();
}
