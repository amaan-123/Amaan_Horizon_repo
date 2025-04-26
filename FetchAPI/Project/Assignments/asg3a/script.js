'use strict';

document.getElementById("getData").addEventListener("click",response)

function response(){

  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => {
    let output = `<h2>Response Text</h2>`
    data.forEach(comment => {
      output += `
      <hr>
        <h3>${comment.name}</h3>
        <p>${comment.body}</p>
      `
      }
    )
    document.getElementById("response").innerHTML = output
  })
  .catch(error => console.log(error))
} 
