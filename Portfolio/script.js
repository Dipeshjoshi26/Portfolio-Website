let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    let top = window.scrollY;
    let sections = document.querySelectorAll('section');
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            // Remove 'active' class from all navLinks
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the corresponding navLink
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};
menuIcon.onclick =() => {
    menuIcon.classList.toggle('bc-x');
    menuIcon.classList.toggle('active');
}