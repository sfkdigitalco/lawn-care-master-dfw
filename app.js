const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      document.getElementById('form-success').style.display = 'block';
      form.reset();
    } else {
      alert('Something went wrong. Please call or text us directly at (817) 996-1103.');
    }
  } catch {
    alert('Something went wrong. Please call or text us directly at (817) 996-1103.');
  }
}
