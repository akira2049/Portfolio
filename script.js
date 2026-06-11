new Typed('#typing', {
strings: [
'Software Developer',
'Computer Science Student',
'Full Stack Developer',
'AI Enthusiast'
],
typeSpeed: 70,
backSpeed: 50,
loop: true
});

ScrollReveal().reveal('.hero-text',{
delay:200,
distance:'50px',
origin:'bottom'
});

ScrollReveal().reveal('.glass,.card,.project-card',{
delay:200,
interval:150,
distance:'50px',
origin:'bottom'
});
