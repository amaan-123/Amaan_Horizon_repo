// At the start of the script
console.log('display.js loaded successfully');

// Retrieve data from localStorage
const formData = JSON.parse(localStorage.getItem('formData'));
console.log('Retrieved form data from localStorage:', formData);

// Display the data
const displayDiv = document.getElementById('displayData');
if (formData) {
    console.log('Form data exists, displaying it on the page');

    // Clear any existing content
    displayDiv.innerHTML = '';

    // Helper function to create a paragraph with a label and a text value
    function addField(labelText, valueText) {
        const p = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = labelText;
        p.appendChild(strong);
        // Add a space between the label and the value
        p.appendChild(document.createTextNode(' '));
        // Add the user-provided value as plain text to avoid interpreting it as HTML
        p.appendChild(document.createTextNode(valueText != null ? String(valueText) : ''));
        displayDiv.appendChild(p);
    }

    addField('Full Name:', formData.fullName);
    addField('Email:', formData.email);
    addField('Phone:', formData.phone);
    addField('Date of Birth:', formData.dob);
    addField('Course:', formData.course);
    addField('Address:', formData.address);

    // Clear the form data from localStorage after displaying it
    localStorage.removeItem('formData'); // Use this to clear only the form data
    console.log('Form data cleared from localStorage');
} else {
    console.log('No form data found in localStorage');
    displayDiv.innerHTML = '<p>No data found. Please submit the form first.</p>';
}