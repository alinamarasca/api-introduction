const getTextBtn = document.getElementById("getText");
getTextBtn.addEventListener("click", getText);

const getUsersBtn = document.getElementById("getUsers");
getUsersBtn.addEventListener("click", getUsers);

const getPostsBtn = document.getElementById("getPosts");
getPostsBtn.addEventListener("click", getPosts);

const postForm = document.getElementById("addPost");
postForm.addEventListener("submit", addPost);

function getText() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function getUsers() {
  output.innerHTML = "";
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2 class="mb-4">Users</h2>`;
      data.forEach(function (user) {
        output += `
         <ul class="light-group mb-3">
         <li class="list-group-item">ID:${user.id}</li>
         <li class="list-group-item">Name:${user.name}</li>
         <li class="list-group-item">Email:${user.email}</li>
         </ul>
         `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2 class="mb-4">Posts</h2>`;
      data.forEach(function (post) {
        output += `
          <div class="card card-body mb-3">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <h6>post id:${post.id}</h6>
          </div>
           `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/jason, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
