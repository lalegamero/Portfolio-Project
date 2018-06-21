// scrollreveal init
window.sr = ScrollReveal();

// apply animations to DOM elements
sr.reveal('div.first', {
  duration: 800,
  delay: 200,
  mobile: true,
});

sr.reveal('div.second', {
  duration: 800,
  delay: 300,
  mobile: true,
});

sr.reveal('div.third', {
  duration: 800,
  delay: 400,
  mobile: true,
});

sr.reveal('.footer-container img', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  delay: 200,
  mobile: true,
});
