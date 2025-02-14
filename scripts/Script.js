//navigation
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');
//login-dropdown
const dropdownLogin = document.querySelector('.dropdown-login');
const loginToggle = document.querySelector('.auth-buttons');
//register-loginForms
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

//dropdowns
if (navToggle) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('aria-expanded');
    });
}

if (dropdownToggle) {
    dropdownToggle.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });
}

if (loginToggle) {
    loginToggle.addEventListener('click', () => {
        dropdownLogin.classList.toggle('show');
    });
}   

if (dropdownLogin) {
    dropdownLogin.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}


window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggle')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
    if (!event.target.closest('.auth-buttons') && !event.target.closest('.dropdown-login')) {
        if (dropdownLogin.classList.contains('show')) {
            dropdownLogin.classList.remove('show');
        }
    }
});

//registration-loginScript
if (registerForm) {
    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const userName = document.getElementById('registerUserName').value;
        const userEmail = document.getElementById('registerUserEmail').value;
        const password = document.getElementById('registerPassword').value;
    
        console.log('Registering user:', { userName, userEmail, password });
    
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: userName,
                UserEmail: userEmail,
                Password: password
            })
        });
    
        if (response.ok) {
            alert('User registered successfully');
        } else {
            alert('Error registering user');
        }
    });
}

if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const userName = document.getElementById('loginUserName').value;
        const password = document.getElementById('loginPassword').value;
    
        console.log('Logging in user:', { userName, password });
    
        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: userName,
                Password: password
            })
        });
    
        if (response.ok) {
            const result = await response.text();
            if (result === 'Success') {
                alert('Login successful');
            } else {
                alert('Login failed');
            }
        } else {
            alert('Error logging in');
        }
    });
}