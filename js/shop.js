/* const shop = {
  name: "Taher Store",
  address: "Rustom Ali Collage Road",
  profit: 20000,
  products: ["Chal", "Ata", "Moydaaa", "Suji", "Paij", "Rosun"],
  owner: { name: "Abu Taher", Number: "01828155839" },
  isExpensive: false
};

const shopStringFild = JSON.stringify(shop);
console.log(shopStringFild);
const convarted = JSON.parse(shopStringFild);
console.log(convarted); */

/* New part Start */

function lodeUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => displayUsers(users));
}

function lodePosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => displayPost(posts));
}
function lodeComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((comments) => displayComment(comments));
}

/* Display Show Users */

function displayUsers(users) {
  const ul = document.getElementById("users");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = `hello my name is ${user.name}, \n my email id ${user.email}`;
    ul.appendChild(li);
  }
}

/* Display Show Post */

function displayPost(posts) {
  const section = document.getElementById("posts");
  for (const post of posts) {
    const div = document.createElement("div");
    div.innerHTML = `<h4>hello this is title ${post.title} </h4> <p>This is details ${post.body}`;
    section.appendChild(div);
  }
}

/* Display Comment */

function displayComment(comments) {
  const section = document.getElementById("comments");
  for (const comment of comments) {
    const div = document.createElement("div");
    div.classList.add('post')
    div.innerHTML = `<h3>Name: ${comment.name}</h3> <h4>Email: ${comment.email}</h4><p>Body: ${comment.body}</p>`;
    section.appendChild(div);
  }
}
