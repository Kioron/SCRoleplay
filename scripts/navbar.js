const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('aria-expanded');
});

dropdownToggle.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggle')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});