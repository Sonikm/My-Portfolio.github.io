
let navLinks = document.querySelector('.nav-links');
let toggleMenu = document.querySelector('.toggle-nav');
let closeMenu = document.querySelector('.close-nav');

toggleMenu.addEventListener('click', ()=> {
   navLinks.classList.add('active');
})

closeMenu.addEventListener('click', ()=> {
    navLinks.classList.remove('active');
})
