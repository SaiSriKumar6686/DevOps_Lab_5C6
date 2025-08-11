function handleRegistration() {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const session = document.getElementById('session');
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const sessionError = document.getElementById('sessionError');

    let isValid = true; 
    if (fullName.value.trim() === '') {
        fullName.classList.add('error');
        fullNameError.style.display = 'block';
        isValid = false;
    } else {
        fullName.classList.remove('error');
        fullNameError.style.display = 'none';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('error');
        emailError.style.display = 'block';
        isValid = false;
    } else {
        email.classList.remove('error');
        emailError.style.display = 'none';
    }
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone.value)) {
        phone.classList.add('error');
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phone.classList.remove('error');
        phoneError.style.display = 'none';
    }
    if (session.value === '') {
        session.classList.add('error');
        sessionError.style.display = 'block';
        isValid = false;
    } else {
        session.classList.remove('error');
        sessionError.style.display = 'none';
    }
    if (isValid) {
        form.style.display = 'none';
        successMessage.style.display = 'block';
    }
}



