let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let addBtn = document.getElementById("addBtn");
const btnText = addBtn.innerText;

//check submit button
form.addEventListener("submit", (e) => {
  e.preventDefault(); //not refresh automatically
  console.log("button clicked");
  formValidation();
});

//check data is success or failure with error msg
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Please enter data";
    console.log("failure");
  } else {
    msg.innerHTML = "";
    console.log("success");
    acceptData();
  }
};

//data object
let data = {};

//save input data
let acceptData = () => {
  //data["key"] = value
  data["text"] = input.value;
  console.log(data);
  createPost();
};

//display text on screen
let createPost = () => {
  posts.innerHTML += ` <div id="task">
        <p>${data.text}</p>
        <span class="options">
            <i id="edit" onClick="editPost(this)" class="fas fa-edit"></i>
            <i id="delete" onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
  //remove previous input
  input.value = "";

  //change button data on click
  addBtn.innerText = btnText;
  savePost();
};

//delete
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
  savePost();
};

//edit
let editPost = (e) => {
  ////edit paragraph and set to parent input box
  input.value = e.parentElement.previousElementSibling.innerHTML; //p
  addBtn.innerText = "Update Task";
  e.parentElement.parentElement.remove();
  savePost();
};

//save data in localStorage
let savePost = (e) => {
  localStorage.setItem("fetchData", posts.innerHTML);
};

//display save data from localStorage
let showTask = (e) => {
  posts.innerHTML = localStorage.getItem("fetchData");
};

//onload display data
showTask();
