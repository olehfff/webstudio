const studio = document.querySelector('.studio');
console.log(studio);

const hellow = document.querySelector('.hellow');
console.log(hellow);

// const active = document.querySelector('.active');
// console.log(active);

studio.addEventListener('click', function() {
  hellow.classList.add('active')
})