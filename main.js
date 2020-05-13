const selectElement = function (element) {
  return document.querySelector(element);
};
let  menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
   body.classList.toggle('open');
});
// console.log('hello');

//Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  orrgin: 'left',
  duration: 1000,
  distance:'25rem',
  delay:300
});

sr.reveal('.animate-right', {
  orrgin: 'right',
  duration: 1000,
  distance:'25rem',
  delay:600
});