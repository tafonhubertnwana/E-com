const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLink = document.getElementsByClassName('navbar-link')[0]

toggleButton.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
});


const openNav = () => {
    document.getElementById("mobile-nav").style.width = "50%";

}

const closeNav = () => {
    document.getElementById("mobile-nav").style.width = "0%";
}