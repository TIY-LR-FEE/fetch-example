import 'es6-promise';
import 'whatwg-fetch';

// Get One

// fetch(`https://api.github.com/users/jbarket`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//     document.querySelector("#name").innerHTML = response.name;
//     document.querySelector("#avatar").src = response.avatar_url;
//   });

// Get All

// fetch(`http://localhost:4000/api/todos`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   });

// Post

// let todo = {
//   item: "Wash the car",
//   student: "Barket"
// };
//
// fetch(`http://localhost:4000/api/todos`, {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify(todo)
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   })

// Put

// let todo = {
//   completed: true,
//   item: "Buy groceries"
// };
//
// fetch(`http://localhost:4000/api/todos/1`, {
//   method: 'put',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify(todo)
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   })

// Delete

// fetch(`http://localhost:4000/api/todos/1`, {
//   method: 'delete'
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   })
