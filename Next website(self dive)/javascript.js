const menu = document.querySelector('.menu_toggle');
const menulinks = document.querySelector('.navigation');
menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menulinks.classList.toggle('active');
  
});
