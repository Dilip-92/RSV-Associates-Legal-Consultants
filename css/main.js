// Basic interactive behaviors: nav toggle, year injection, contact form handling

document.addEventListener('DOMContentLoaded', function(){
  // year
  const y = new Date().getFullYear();
  ['year','year-2','year-3','year-4'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // nav toggles (handles multiple pages)
  function wireToggle(toggleId, navId){
    const btn = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if(btn && nav){
      btn.addEventListener('click', ()=> nav.classList.toggle('show'));
    }
  }
  wireToggle('nav-toggle','site-nav');
  wireToggle('nav-toggle-2','site-nav-2');
  wireToggle('nav-toggle-3','site-nav-3');
  wireToggle('nav-toggle-4','site-nav-4');

  // simple contact form: this is static — for production connect to backend or use Formspree
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const output = document.getElementById('form-msg');
      if(!name || !email || !message){
        output.textContent = 'Please fill required fields.';
        return;
      }
      // fake success response
      output.textContent = 'Thanks ' + name.split(' ')[0] + '! Your message has been received.';
      form.reset();
    });
  }
});
