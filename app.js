const nav = document.getElementById('navbarTarget')
const navButton = document.getElementById('navButton')
const navButtonClose = document.getElementById('navButtonClose')

navButton.addEventListener('click', () => {
  navButton.classList.add('d-none')
  navButtonClose.classList.remove('d-none')
  nav.classList.add('showNavbar')
})

navButtonClose.addEventListener('click', () => {
  navButton.classList.remove('d-none')
  navButtonClose.classList.add('d-none')
  nav.classList.remove('showNavbar')
})

const button_wa = document.querySelectorAll('.btn-all')

button_wa.forEach(b => {
  b.addEventListener('click', () => {
    window.location.href = "https://wa.me/6288289945187?text=Halo%20min%20dari%20website%20*BuzzerOne.xyz*,%20%20Saya%20mau%20pesan%20Jasa%20*" + b.value + '*'
  })
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach(ent => {
    if (ent.isIntersecting) {
      ent.target.classList.add('show', 'animate__fadeIn');
      //document.documentElement.style.setProperty('--animate-duration', '1s');
    }
  });
});

const animated = document.querySelectorAll('.animate__animated')

animated.forEach((hd) => observer.observe(hd))