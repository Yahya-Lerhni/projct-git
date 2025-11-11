// زر الهامبرغر
const hamb = document.getElementById('hamb');
const navLinks = document.getElementById('navLinks');

hamb.addEventListener('click', () => {
  const isOpen = hamb.classList.toggle('open');
  navLinks.classList.toggle('show', isOpen);
  hamb.setAttribute('aria-expanded', isOpen);
  navLinks.setAttribute('aria-expanded', isOpen);
});

// إغلاق القائمة عند الضغط على أي رابط
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      hamb.classList.remove('open');
      hamb.setAttribute('aria-expanded', 'false');
    }
  });
});

hamb.addEventListener('click', () => {
  const isOpen = hamb.classList.toggle('open');
  navLinks.classList.toggle('show', isOpen);
});

// Close menu when link clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if(navLinks.classList.contains('show')){
      navLinks.classList.remove('show');
      hamb.classList.remove('open');
    }
  });
});

// Contact Form submit (simple alert)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  alert("تم إرسال الرسالة بنجاح! ✨");
  contactForm.reset();
});
