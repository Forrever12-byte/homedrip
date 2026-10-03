// Nav Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if(window.scrollY > 20) {
        navbar.classList.add('bg-base');
    } else {
        navbar.classList.remove('bg-base');
    }
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

hamburger.addEventListener('click', function() {

    bar1.classList.toggle('rotate-45')
    bar1.classList.toggle('translate-y-1.5')
    bar2.classList.toggle('hidden')
    bar3.classList.toggle('-rotate-45')
    bar3.classList.toggle('-translate-y-1.5')

    const mobileMenu = document.getElementById('mobile-menu')
    mobileMenu.classList.toggle('hidden');

     // let the browser register "hidden" is gone before animating in
    requestAnimationFrame(() => {
        mobileMenu.classList.toggle('opacity-0');
        mobileMenu.classList.toggle('-translate-y-4');
        mobileMenu.classList.toggle('pointer-events-none');
    });
});