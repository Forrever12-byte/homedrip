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

// Filter logic

const filterTabs = document.getElementById('filter-tabs');
const galleryGrid = document.getElementById('gallery-grid');
const cards = galleryGrid.querySelectorAll('[data-category]');
const buttons = filterTabs.querySelectorAll('button');

function setActiveButton(activeBtn) {
    buttons.forEach(btn => {
        btn.classList.remove('bg-primary');
        btn.classList.add('outline');
    });
    activeBtn.classList.add('bg-primary');
    activeBtn.classList.remove('outline');
}

function filterCards(filter) {
    cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

filterTabs.addEventListener('click', function(e) {
    const clicked = e.target.closest('button');
    if (!clicked) return;

    filterCards(clicked.dataset.filter);
    setActiveButton(clicked);
});

// Apply category from the URL on page load, if present
const params = new URLSearchParams(window.location.search);
const urlCategory = params.get('category');

if (urlCategory) {
    const matchingButton = [...buttons].find(btn => btn.dataset.filter === urlCategory);
    if (matchingButton) {
        filterCards(urlCategory);
        setActiveButton(matchingButton);
    }
}