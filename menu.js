/*const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLink = document.getElementsByClassName('navbar-link')[0]

toggleButton.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
});


const openNav = () => {
    document.getElementById("mobile-nav").style.width = "50%";

}

const closeNav = () => {
    document.getElementById("mobile-nav").style.width = "0%";
}*/


const toggleBtn = document.querySelector(".toggle-button");
const toggleBtnIcon = document.querySelector(".toggle-button ");
const dropDownMenu = document.querySelector(".dropmenu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains()

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
};