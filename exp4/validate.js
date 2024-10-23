function validate(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    const namePattern = /\d/;

    // Validate Name
    if (namePattern.test(name)) {
        alert('Username must not contain numeric values.');
        return;
    }

    if (name.length < 6) {
        alert('Username must be at least 6 characters long.');
        return;
    }

    // Validate Password
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate Phone Number
    const numberPattern = /^\d{10}$/;
    if (!numberPattern.test(number)) {
        alert('Phone number must be exactly 10 digits long.');
        return;
    }

    // If all validations pass
    alert('Form submitted successfully!');
}