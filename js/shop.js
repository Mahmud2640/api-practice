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
    .then((data) => console.log(data));
}
function lodeComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

/* Display Show */

function displayUsers(users) {
  const ul = document.getElementById("users");
  for (const user of users) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
