// Global JavaScript functionality
'use strict';

document.getElementById('admissionForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        course: document.getElementById('course').value,
        address: document.getElementById('address').value,
    };

    // Store data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // console.log('Form data saved to localStorage:', formData);

    // Redirect to the display page
    window.location.href = 'display.html';
});
