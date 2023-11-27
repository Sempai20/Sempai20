const navbarBtn = document.querySelector('.navbar-btn')
const navbarBtnIcon = document.querySelector('.navbar-btn i')
const navbarDropdown = document.querySelector('.navbar-dropdown')

navbarBtn.onclick = function() {
    navbarDropdown.classList.toggle('open')
    const isOpen = navbarDropdown.classList.contains('open')

    navbarBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}