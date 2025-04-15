// Global JavaScript functionality
'use strict';

// Before adding the event listener
console.log('scripts.js loaded successfully');

document.getElementById('admissionForm').addEventListener('submit', function (event) {
    console.log('Form submission event triggered');
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
    console.log('Captured form data:', formData);//not visible

    // Before storing data in localStorage
    console.log('Storing form data in localStorage');//not visible

    // Store data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to the display page
    window.location.href = 'display.html';

    // After redirecting to the display page
    console.log('Redirecting to display.html');//not visible
});
