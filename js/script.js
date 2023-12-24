const menuToggle = document.querySelector ('.menu-toggle input');
const nav = document.querySelector ('nav ul');

menuToggle.addEventListener ('click', function() {
    nav.classList.toggle('slide');
})

var typed= new Typed(".typing", {
    Strings:[">>> Mahasiswa Universitas Pasundan"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true,
})