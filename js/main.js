function clickMe() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => showUi(data));
}
function getPost() {
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then(res => res.json())
   .then(data => display(data));
}

function showUi(data) {   
   const ul = document.getElementById('users');
   for (const users of data){
      const li = document.createElement('li')
      li.classList.add('users')
      li.innerText = `Name = ${users.name}. \n Email = ${users.email}`;
      ul.appendChild(li);
   }
} 

function display(data) {
   const section = document.getElementById('post');
   for (const display of data){
      const div = document.createElement('div')
      div.classList.add('display')
      div.innerHTML = `<h2> ${display.title} </h2> \n <p> ${display.body} </p>`
      section.appendChild(div);
   } 
}
// ami caitechi title gulaaa sob h1 er midde thakbeee nd body thakbeee p tag er moddeee etaaa kivabe korbo .