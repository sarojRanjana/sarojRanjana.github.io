let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}
/* Contact Form */
const form = document.getElementById('contactForm');
const status = document.getElementById('statusMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // stop normal redirect
  const data = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      alert("✅ Thanks! Your message has been sent.");
      form.reset(); // clear the fields
    } else {
      alert("❌ Oops! Something went wrong. Please try again.");
    }
  } catch (err) {
    alert("❌ Network error. Please try later.");
  }
});