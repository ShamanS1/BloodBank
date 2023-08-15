var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function login() {
    x.style.left = '27px';
    y.style.right = '-350px';
    z.style.left = '0px';
}
function register() {
    x.style.left = '-350px';
    y.style.right = '25px';
    z.style.left = '150px';
}

// View password codes

function togglePasswordVisibility(inputId, eyeIconId, eyeSlashIconId) {
    var input = document.getElementById(inputId);
    var eyeIcon = document.getElementById(eyeIconId);
    var eyeSlashIcon = document.getElementById(eyeSlashIconId);

    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.style.opacity = '0';
        eyeSlashIcon.style.opacity = '1';
    } else {
        input.type = 'password';
        eyeIcon.style.opacity = '1';
        eyeSlashIcon.style.opacity = '0';
    }
}

function myLogPassword() {
    togglePasswordVisibility('logPassword', 'eye', 'eye-slash');
}

function myRegPassword() {
    togglePasswordVisibility('regPassword', 'eye-2', 'eye-slash-2');
}

// Password validation
function validatePassword(password) {
    // Define your password validation criteria here
    var minLength = 8;
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasDigits = /\d/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasDigits;
}

function validateRegistrationForm() {
    var regPassword = document.getElementById('regPassword').value;
    var regPasswordError = document.getElementById('regPasswordError');

    if (!validatePassword(regPassword)) {
        regPasswordError.innerText = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.';
        return false;
    } else {
        regPasswordError.innerText = '';
        return true;
    }
}

// Attach the validation function to the form's submit event
var registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', function (event) {
    if (!validateRegistrationForm()) {
        event.preventDefault();
    }
});
