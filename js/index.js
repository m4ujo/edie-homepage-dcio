const menuButton = document.querySelector('.menu-button'),
  nav = document.querySelector('.nav'),
  navElements = document.querySelectorAll('.nav__link')

let menuOpen = false

menuButton.addEventListener('click', () => {
  if (!menuOpen)
    menuButton.classList.add('open')
  else
    menuButton.classList.remove('open')
  document.querySelector('body').style.overflowY = menuOpen ? 'auto' : 'hidden'
  menuOpen = !menuOpen
})

navElements.forEach((e) => {
  e.addEventListener('click', () => {
    if (menuOpen) {
      menuButton.classList.remove('open')
      menuOpen = false
    } else
      menuOpen = true
  })
})