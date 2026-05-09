const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('form-success').style.display = 'block';
  e.target.reset();
}
