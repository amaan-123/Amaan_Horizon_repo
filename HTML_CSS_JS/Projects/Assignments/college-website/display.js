// At the start of the script
console.log('display.js loaded successfully');

// Retrieve data from localStorage
const formData = JSON.parse(localStorage.getItem('formData'));
console.log('Retrieved form data from localStorage:', formData);

// Display the data
const displayDiv = document.getElementById('displayData');
if (formData) {
    console.log('Form data exists, displaying it on the page');
    displayDiv.innerHTML = `
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Date of Birth:</strong> ${formData.dob}</p>
        <p><strong>Course:</strong> ${formData.course}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
    `;

    // Clear the form data from localStorage after displaying it
    localStorage.removeItem('formData'); // Use this to clear only the form data
    console.log('Form data cleared from localStorage');
} else {
    console.log('No form data found in localStorage');
    displayDiv.innerHTML = '<p>No data found. Please submit the form first.</p>';
}