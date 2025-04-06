let name = document.getElementById("user-name").value;
let age = document.getElementById("user-age").value;
let phone = document.getElementById("user-phone").value;

const addUser = () => {
    const name = document.getElementById("user-name").value;
    const age = document.getElementById("user-age").value;
    const phone = document.getElementById("user-phone").value;
    
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Phone:", phone);
    
    const tbody = document.getElementById("user-table-body");
    
    const row = document.createElement("tr");
    
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    
    const ageCell = document.createElement("td");
    ageCell.textContent = age;
    
    const phoneCell = document.createElement("td");
    phoneCell.textContent = phone;
    
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(phoneCell);
    
    tbody.appendChild(row);

    document.getElementById("user-form").reset();
};

document.getElementById("add-btn").addEventListener("click", addUser);
  