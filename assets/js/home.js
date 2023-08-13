document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate the form fields
        const fname = form.querySelector('#fname');
        const lname = form.querySelector('#lname');
        const phone = form.querySelector('#phone');
        const email = form.querySelector('#email'); // Added email field
        const bloodType = form.querySelector('#type');

        // Check if all fields are filled
        if (!fname.value || !lname.value || !phone.value || !email.value || bloodType.value === 'select') {
            showValidationError('Please fill in all required fields.');
            return;
        }

        // Check phone number length
        if (phone.value.length !== 10) {
            showValidationError('Phone number should be 10 digits.');
            return;
        }

        // Check email format
        if (!isValidEmail(email.value)) {
            showValidationError('Please enter a valid email address.');
            return;
        }

        // Check blood type
        if (bloodType.value === 'select') {
            showValidationError('Please select a valid blood type.');
            return;
        }

        // Perform any further processing or submission
        // For now, let's just log a success message
        console.log('Form submitted successfully!');
    });

    // Function to validate email using regular expression
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Function to show validation error alert
    function showValidationError(message) {
        alert(message);
    }
});
