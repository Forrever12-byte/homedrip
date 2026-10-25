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

const pieceData = {
    'white-tv-console': {
        title: 'White TV Console',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792912791/tv-console_c47ill.jpg' },
            { type: 'video', src: 'https://res.cloudinary.com/pnfbjbp5/video/upload/v1792921961/finished-tv-console-video_ts4lb9.mp4' }
        ]
    },
    'under-stair-shelf': {
        title: 'Under Stair Shelf',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790173311/stair-shelf-light_pn411f.jpg' },
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792921344/stair-shelf_hjtlfd.jpg' }
        ]
    },
    'black-bed-frame': {
        title: 'Shiny Black Bedframe',
        category: 'bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792916895/black-bedframe_msoxgn.jpg' }
        ]
    },
    'clean-work-desk': {
        title: 'Clean Work Desk',
        category: 'office',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790401933/black-white-table-drawer_jtpmjr.jpg' }
        ]
    },
    'black-bedframe': {
        title: 'Black Bedframe',
        category: 'bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790401973/black-bed_hqzvat.jpg' }
        ]
    },
    'brown-drawer': {
        title: 'Brown Drawer',
        category: 'bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790402412/brown-drawer_i7ycuj.jpg' },
            { type: 'video', src: 'https://res.cloudinary.com/pnfbjbp5/video/upload/v1792922022/brown-drawer-video_xvcf9g.mp4' }
        ]
    },
    'chilling-spot': {
        title: 'Chilling Spot',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792921955/sitting-area_jxcnhw.jpg' },
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792921694/WhatsApp_Image_2026-09-22_at_5.46.08_PM_pztxao.jpg' },
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792921693/WhatsApp_Image_2026-09-22_at_5.46.09_PM_lbzwii.jpg' }
        ]
    },
    'l-shaped-blue-sofa': {
        title: 'L-Shaped Blue Sofa',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792912621/l-shaped-blue-sofa_rjgvfv.jpg' }
        ]
    },
    'brown-large-bed': {
        title: 'Brown Large Bed',
        category: 'bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792912281/brown-large-bed_fdu9mi.jpg' }
        ]
    },
    'clean-black-bedframe': {
        title: 'Clean Black Bedframe',
        category: 'bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792912089/clean-black-bedframe_hywrdk.jpg' }
        ]
    },
    'black-center-table': {
        title: 'Black Center Table',
        category: 'tables',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792911543/black-center-table_ka2tto.jpg' }
        ]
    },
    'l-shaped-chair': {
        title: 'L-Shaped Chair',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792912756/l-shaped-chair_djpfqv.jpg' }
        ]
    },
    'black-white-table': {
        title: 'Black & White Center Table',
        category: 'tables',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792913486/Black-white-table_nibwfq.jpg' }
        ]
    },
    'black-l-shaped-chair': {
        title: 'Black L-Shaped Chair',
        category: 'bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792913441/black-l-shaped-sofa_dqg8j2.jpg' }
        ]
    },
    'brown-white-tv-console': {
        title: 'Brown & White TV Console',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790173473/Designer_b2sk7p.png' },
            { type: 'video', src: 'https://res.cloudinary.com/pnfbjbp5/video/upload/v1792921704/tv-console-white-sofa_ffgdyk.mp4' }
        ]
    },
    'brown-sofa-set': {
        title: 'Brown Sofa Set',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790334566/brown-chair-tv-console_bxjtbb.jpg' }
        ]
    },
    'black-work-desk': {
        title: 'Black Work Desk',
        category: 'office',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792913494/black-work-desk_xl4hrr.jpg' }
        ]
    },
    'blue-luxury-sofa': {
        title: 'Blue Luxury Sofa',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792913547/blue-sofa_oyvnxm.jpg' }
        ]
    },
    'white-tv-stand': {
        title: 'White TV Stand',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792913573/white-tv-stand-1_c1azry.jpg' },
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792913571/white-tv-stand_plvktt.jpg' },
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792913575/white-tv-stand-2_vpgxjh.jpg' }
        ]
    },
    'simple-brown-work-desk': {
        title: 'Simple Brown Work Desk',
        category: 'office',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792913580/work-table-brown_udamdq.jpg' }
        ]
    },
    'bathroom-sink': {
        title: 'Bathroom Sink',
        category: 'bathroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792921680/single-toilet-sink_v4hww9.jpg' },
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792921679/toilet-sink_lnwaqn.jpg' }
        ]
    },
    'brown-black-tv-console': {
        title: 'Brown & Black TV Console',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1790332330/Designer_1_mxif1m.webp' },
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792922030/black-white-tv-console_bzmlej.jpg' }
        ]
    },
    'brown-bedframe': {
        title: 'Brown Bedframe',
        category: 'bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792919323/brown-bed-frame_cthn2u.jpg' }
        ]
    },
    'white-shelf': {
        title: 'White Shelf',
        category: 'bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792921690/white-shelf_zwig4h.jpg' }
        ]
    },
    'green-sofas': {
        title: 'Green Sofas',
        category: 'living-room',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792923922/green-chairs_e6e1za.jpg' }
        ]
    },
    'grey-bed': {
        title: 'Grey Bed',
        category: 'bedroom',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792924182/grey-bed-head_spulea.jpg' }
        ]
    },
    'brown-work-desk': {
        title: 'Brown Work Desk',
        category: 'office',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792924265/brown-workstation_vxmbbl.jpg' }
        ]
    },
    'brown-work-desk': {
        title: 'Brown Work Desk',
        category: 'office',
        media: [
            { type: 'image', src: 'https://res.cloudinary.com/pnfbjbp5/image/upload/v1792924488/black-bed-grey-head_c7wvcr.jpg' },
            { type: 'video', src: 'https://res.cloudinary.com/pnfbjbp5/video/upload/v1792922039/black-bedframe-video_slrfum.mp4' }
        ]
    }
};

const categoryLabels = {
    'living-room': 'Living room',
    bedroom: 'Bedroom',
    tables: 'Tables',
    office: 'Office',
    bathroom: 'Bathroom'
};

const filterTabs = document.getElementById('filter-tabs');
const galleryGrid = document.getElementById('gallery-grid');

if (galleryGrid) {
    Object.entries(pieceData).forEach(([pieceId, piece]) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'piece-card w-full text-left p-3 bg-surface flex flex-col gap-3 lg:gap-5 rounded-lg cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-xl';
        card.dataset.pieceId = pieceId;
        card.dataset.category = piece.category;
        card.setAttribute('aria-label', `View ${piece.title}`);

        const image = document.createElement('img');
        image.src = piece.media[0].src;
        image.alt = piece.title;
        image.className = 'h-[220px] w-full object-cover rounded-lg';

        const details = document.createElement('div');
        details.className = 'flex flex-col lg:gap-3';

        const title = document.createElement('h3');
        title.className = 'text-white font-bold lg:text-xl';
        title.textContent = piece.title;

        const category = document.createElement('p');
        category.className = 'text-text-muted lg:text-lg';
        category.textContent = categoryLabels[piece.category];

        details.append(title, category);
        card.append(image, details);
        galleryGrid.append(card);
    });
}

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
    modalCategory.textContent = categoryLabels[currentPiece.category] || currentPiece.category;
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
