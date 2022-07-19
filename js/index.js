const toggler_nav = document.querySelector('.nav-toggler');
const nav = document.querySelector('nav');

toggler_nav.addEventListener('click',function(){
  toggler_nav.classList.toggle("active")
  nav.classList.toggle("active")
  
})