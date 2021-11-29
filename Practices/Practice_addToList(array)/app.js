let arr = [];

button = document.querySelector("button");
input = document.querySelector("input");
list = document.querySelector(".list");

button.addEventListener("click", add);
list.addEventListener("click", remove);

function add(event) {
  event.preventDefault();
  arr.push(input.value);
  render();
}

function remove(event) {
  const item = event.target;
  // item.parentElement=remove();
  //console.log(item.parentElement);
  // console.log();
  //   item.parentElement.remove();
  const li = item.parentElement;

  if (item.classList[0] === "remove") {
    arr = arr.filter((item) => item !== li.children[0].innerText);
    render();
    // item.parentElement.remove();
  } else if (item.classList[0] === "update") {
    // window.prompt(item.parentElement)
    const li = item.parentElement;
    const newText = window.prompt("enter new:", li.children[0].innerText);
    arr=arr.map((item)=> item === li.children[0].innerText?newText:item);
    render();

    // li.children[0].innerText = newText;
    // console.log(newText);
  }
}
function render() {
  list.innerText = "";

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = arr[i];
    listItem.appendChild(span);
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "remove";
    removeBtn.classList.add("remove");
    listItem.appendChild(removeBtn);
    const updateBtn = document.createElement("button");
    updateBtn.innerText = "update";
    updateBtn.classList.add("update");
    listItem.appendChild(updateBtn);
    list.appendChild(listItem);
  }
  console.log(arr);
}
