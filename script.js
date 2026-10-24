const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-base');
        } else {
            navbar.classList.remove('bg-base');
        }
    });
}

const hamburger = document.getElementById('hamburger');
if (hamburger) {
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');

    hamburger.addEventListener('click', function() {
        bar1.classList.toggle('rotate-45');
        bar1.classList.toggle('translate-y-1.5');
        bar2.classList.toggle('hidden');
        bar3.classList.toggle('-rotate-45');
        bar3.classList.toggle('-translate-y-1.5');

        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');

        requestAnimationFrame(() => {
            mobileMenu.classList.toggle('opacity-0');
            mobileMenu.classList.toggle('-translate-y-4');
            mobileMenu.classList.toggle('pointer-events-none');
        });
    });
}

const filterTabs = document.getElementById('filter-tabs');
const galleryGrid = document.getElementById('gallery-grid');

if (filterTabs && galleryGrid) {
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

    const params = new URLSearchParams(window.location.search);
    const urlCategory = params.get('category');

    if (urlCategory) {
        const matchingButton = [...buttons].find(btn => btn.dataset.filter === urlCategory);
        if (matchingButton) {
            filterCards(urlCategory);
            setActiveButton(matchingButton);
        }
    }
}

const pieceData = {
    'under-stair-shelf': {
        title: 'Under Stair Shelf',
        category: 'Living room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790173311/stair-shelf-light_pn411f.jpg' }
        ]
    },
    'clean-work-desk': {
        title: 'Clean Work Desk',
        category: 'Office',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790401933/black-white-table-drawer_jtpmjr.jpg' }
        ]
    },
    'black-bedframe': {
        title: 'Black Bedframe',
        category: 'Bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790401973/black-bed_hqzvat.jpg' }
        ]
    },
    'brown-drawer': {
        title: 'Brown Drawer',
        category: 'Bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790402412/brown-drawer_i7ycuj.jpg' }
        ]
    }
};

const galleryModal = document.getElementById('gallery-modal');
const modalMedia = document.getElementById('modal-media');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalCaption = document.getElementById('modal-caption');
const prevMediaButton = document.getElementById('prev-media');
const nextMediaButton = document.getElementById('next-media');
const closeModalButton = document.getElementById('close-gallery-modal');

let currentPiece = null;
let currentMediaIndex = 0;
let touchStartX = null;

function renderMediaItem() {
    if (!currentPiece) return;

    const media = currentPiece.media[currentMediaIndex];
    const isVideo = media.type === 'video';

    if (isVideo) {
        modalMedia.innerHTML = `
            <video class="h-full w-full object-cover" controls autoplay muted playsinline>
                <source src="${media.src}" type="video/mp4">
            </video>
        `;
    } else {
        modalMedia.innerHTML = `
            <img src="${media.src}" alt="${currentPiece.title}" class="h-full w-full object-cover">
        `;
    }

    modalTitle.textContent = currentPiece.title;
    modalCategory.textContent = currentPiece.category;
    modalCaption.textContent = currentPiece.media.length > 1
        ? `${currentMediaIndex + 1} of ${currentPiece.media.length} media items`
        : '';
    prevMediaButton.classList.toggle('hidden', currentPiece.media.length < 2);
    nextMediaButton.classList.toggle('hidden', currentPiece.media.length < 2);
}

function openPieceModal(pieceId) {
    const piece = pieceData[pieceId];
    if (!piece || !galleryModal) return;

    currentPiece = piece;
    currentMediaIndex = 0;
    renderMediaItem();
    galleryModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closePieceModal() {
    if (!galleryModal) return;

    galleryModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    modalMedia.innerHTML = '';
}

function moveMedia(direction) {
    if (!currentPiece) return;

    currentMediaIndex = (currentMediaIndex + direction + currentPiece.media.length) % currentPiece.media.length;
    renderMediaItem();
}

if (galleryModal) {
    document.addEventListener('click', function(event) {
        const card = event.target.closest('.piece-card');
        if (card) {
            openPieceModal(card.dataset.pieceId);
        }

        if (event.target.closest('#close-gallery-modal')) {
            closePieceModal();
        }

        if (event.target.closest('#prev-media')) {
            moveMedia(-1);
        }

        if (event.target.closest('#next-media')) {
            moveMedia(1);
        }

        if (event.target === galleryModal) {
            closePieceModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        const card = event.target.closest('.piece-card');
        if (card && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            openPieceModal(card.dataset.pieceId);
        }
    });

    galleryModal.addEventListener('touchstart', function(event) {
        const touch = event.changedTouches[0];
        touchStartX = touch.clientX;
    }, { passive: true });

    galleryModal.addEventListener('touchend', function(event) {
        if (touchStartX === null) return;

        const touch = event.changedTouches[0];
        const delta = touch.clientX - touchStartX;

        if (Math.abs(delta) > 40) {
            moveMedia(delta < 0 ? 1 : -1);
        }

        touchStartX = null;
    }, { passive: true });

    document.addEventListener('keydown', function(event) {
        if (galleryModal.classList.contains('hidden')) return;

        if (event.key === 'Escape') {
            closePieceModal();
        }

        if (event.key === 'ArrowRight') {
            moveMedia(1);
        }

        if (event.key === 'ArrowLeft') {
            moveMedia(-1);
        }
    });
}
