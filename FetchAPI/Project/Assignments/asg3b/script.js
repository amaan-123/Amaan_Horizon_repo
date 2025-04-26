'use strict';

document.getElementById("getData").addEventListener("click",response)

function response(){

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById("userTable")
    table.innerHTML = ""
    data.forEach(user => {
      const tRow = document.createElement("tr")

      const tId = document.createElement("td")
      tId.innerHTML = user.id
      const tName = document.createElement("td")
      tName.innerHTML = user.name
      const tEmail = document.createElement("td")
      tEmail.innerHTML = user.email

      tRow.append(tId)
      tRow.append(tName)
      tRow.append(tEmail)

      table.append(tRow)
    })
    document.getElementById("response").innerHTML = output
  })
  .catch(error => console.log(error))
} 
