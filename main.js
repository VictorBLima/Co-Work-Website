const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburguer.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click",closeMenu));



function mobileMenu() {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function closeMenu () {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}




const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel:true,
    keyboard:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   }) 
   