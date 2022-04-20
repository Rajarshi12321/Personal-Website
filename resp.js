burger = document.querySelector('.burger')
Navbar = document.querySelector('.Navbar')
navlist = document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    Navbar.classList.toggle("h-nav-resp");
    navlist.classList.toggle("v-class-resp");


})