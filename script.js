

window.addEventListener('scroll', reveal);
window.addEventListener('scroll', revealX);
window.addEventListener('scroll', revealY);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) { // corrected spelling of 'length'

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

function revealX() {
    var reveals = document.querySelectorAll('.revealx');

    for (var i = 0; i < reveals.length; i++) { // corrected spelling of 'length'

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

function revealY() {
    var reveals = document.querySelectorAll('.reveal_y');

    for (var i = 0; i < reveals.length; i++) { // corrected spelling of 'length'

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const triggerElement = document.getElementById('separator');
    const fixedElement = document.querySelector('.background-clip');

    const triggerPosition = triggerElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Determine the current scroll position
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (triggerPosition < windowHeight) {
            fixedElement.classList.add('moved-up');
            console.log("moved")
    }
    else
    fixedElement.classList.remove('moved-up');

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});


 bar = document.querySelector(".fa-bars")

 bar.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
 }

