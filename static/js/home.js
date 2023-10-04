document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    // Add a submit event listener to the form
    form.addEventListener('submit',async function(event) {
        event.preventDefault();

        // Get form fields
        const fname = form.querySelector('#fname');
        const lname = form.querySelector('#lname');
        const phone = form.querySelector('#phone');
        const email = form.querySelector('#email');
        const bloodType = form.querySelector('#type');
        const address = form.querySelector('#address');
        const city = form.querySelector('#city');
        const state = form.querySelector('#state');
        const pincode = form.querySelector('#pincode');

        // Check if all conditions are met
        if (!isValidForm()) {
            return;
        }

        // Create an object to hold the submitted data
        const submittedData = {
            firstName: fname.value,
            lastName: lname.value,
            phoneNumber: phone.value,
            emailAddress: email.value,
            bloodType: bloodType.value,
            address: address.value,
            city: city.value,
            state: state.value,
            pincode: pincode.value
        };

        // Log the submitted data to the console
        console.log('Submitted Data:', submittedData);
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

    // Function to check if all form conditions are met
    function isValidForm() {
        const fname = form.querySelector('#fname');
        const lname = form.querySelector('#lname');
        const phone = form.querySelector('#phone');
        const email = form.querySelector('#email');
        const bloodType = form.querySelector('#type');
        const pincode = form.querySelector('#pincode');

        // Check if all fields are filled
        if (!fname.value || !lname.value || !phone.value || !email.value || !pincode.value || bloodType.value === 'select') {
            showValidationError('Please fill in all required fields.');
            return false;
        }

        // Check phone number length
        if (phone.value.length !== 10) {
            showValidationError('Phone number should be 10 digits.');
            return false;
        }

        // Check email format
        if (!isValidEmail(email.value)) {
            showValidationError('Please enter a valid email address.');
            return false;
        }

        // Check blood type
        if (bloodType.value === 'select') {
            showValidationError('Please select a valid blood type.');
            return false;
        }

        // Check pincode length
        if (pincode.value.length !== 6) {
            showValidationError('Pincode should be 6 digits.');
            return false;
        }

        return true;
    }

});

