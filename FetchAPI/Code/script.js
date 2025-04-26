// // How to Send a GET Request Using the Fetch API
// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response => response.json())
// .then(data => {
//   document.querySelector('#user-name').textContent = data.name
//   document.querySelector('#user-email').textContent = data.email
// })


// // How to Send a POST Request Using the Fetch API
// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Whou You',
//     email: 'itMe@mail.com'
//   }),
// }).then(response => response.json())
//   .then(data => console.log(data))


// // How to Send a PUT Request
// fetch('https://jsonplaceholder.typicode.com/users/1', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     name: 'Nathan Sebhastian',
//     email: 'nathan@mail.com'
//   }),
// }).then(response => response.json())
//   .then(data => console.log(data))  


// // How to Send a PATCH Request
// fetch('https://jsonplaceholder.typicode.com/users/1', {
//   method: 'PATCH',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ 
//     name: 'Nathan Sebhastian',
//     username: 'nsebhastian'
//   }),
// }).then(response => response.json())
//   .then(data => console.log(data))


// // How to Send a DELETE Request
// fetch('https://jsonplaceholder.typicode.com/users/1', {
//   method: 'DELETE',
// }).then(response => response.json())
//   .then(data => console.log(data))

// How to Use Async/Await With the Fetch API
// example of sending a GET request using Fetch in async/await syntax:
(async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
})();