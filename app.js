// Intro animation
const introScreen = document.getElementById('intro-screen');
const introText   = document.getElementById('intro-text');
const introLogo   = document.getElementById('intro-logo');

// Prevent browser restoring scroll position and lock all scrolling
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
document.documentElement.style.overflow = 'hidden';
document.body.style.overflow = 'hidden';
window.scrollTo({ top: 0, behavior: 'instant' });

setTimeout(() => {
  introText.style.opacity = '0';
  setTimeout(() => {
    introLogo.style.opacity = '1';
    setTimeout(() => {
      introScreen.classList.add('hidden');
      setTimeout(() => {
        introScreen.remove();
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }, 700);
    }, 900);
  }, 500);
}, 1000);

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

function toggleCallText() {
  const opts = document.getElementById('callTextOptions');
  opts.classList.toggle('open');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.call-text-wrap')) {
    const opts = document.getElementById('callTextOptions');
    if (opts) opts.classList.remove('open');
  }
});

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
