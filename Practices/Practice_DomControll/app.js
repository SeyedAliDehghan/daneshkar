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
  removeBtn.classList.add("remove");
  listItem.appendChild(removeBtn);
  const updateBtn = document.createElement("button");
  updateBtn.innerText="update";
  updateBtn.classList.add("update");
  listItem.appendChild(updateBtn);
  list.appendChild(listItem);
}
function remove(event) {
    const item = event.target;
    // item.parentElement=remove();
    //console.log(item.parentElement);
    // console.log();
  //   item.parentElement.remove();
    if (item.classList[0]==='remove') {
      item.parentElement.remove();
  }else if(item.classList[0]==='update'){
    // window.prompt(item.parentElement)
    const li=item.parentElement;
    const newText=window.prompt("enter new:",li.children[0].innerText);
    li.children[0].innerText=newText;
    // console.log(newText);
  }
}
