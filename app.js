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
  const form = e.target;
  const name = form.name.value;
  const phone = form.phone.value;
  const email = form.email.value;
  const message = form.message.value;

  const subject = encodeURIComponent('Quote Request from ' + name);
  const body = encodeURIComponent(
    'Name: ' + name + '\n' +
    'Phone: ' + phone + '\n' +
    'Email: ' + email + '\n\n' +
    'Message:\n' + message
  );

  window.location.href = 'mailto:lawncaremasterdfw@gmail.com?subject=' + subject + '&body=' + body;

  document.getElementById('form-success').style.display = 'block';
  form.reset();
}
