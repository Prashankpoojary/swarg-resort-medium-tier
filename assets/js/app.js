/**
 * SWARG — Himalayan Cloud Retreat (Medium Tier)
 * Architectural Studio Edition (Inspired by FORMA)
 * 1. Full-Bleed Architectural Room Walkthrough Slider (Living, Dining, Hearth, Suite, Bath, Horizon)
 * 2. Multi-Currency Exchange System (USD, EUR, MVR, INR)
 * 3. Live Himalayan Weather & Nepal Standard Time (UTC+5:45)
 * 4. Architectural Suite Details Inspector Drawer with CAD Blueprint
 * 5. Bespoke Stay & Experience Curation Engine
 * 6. VIP Reservation & Diplomatic Reference Code Dispatch
 * 7. Private Aviation & Helipad Logistics Selector
 */

// ============================================================================
// 1. ARCHITECTURAL ROOM WALKTHROUGH ENGINE (FORMA INSPIRATION)
// ============================================================================
const SPACES_DATA = [
  {
    index: '01 / LIVING',
    titleLine1: 'THE LIVING',
    titleLine2: 'SPACE',
    subtitle: 'WHERE THE DAY GATHERS.',
    desc: 'Cantilevered stone salon with floor-to-ceiling structural glass overlooking the Annapurna valley mist.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85'
  },
  {
    index: '02 / DINING',
    titleLine1: 'THE DINING',
    titleLine2: 'ROOM',
    subtitle: 'MADE FOR LONG TABLES, LONGER EVENINGS.',
    desc: 'Reclaimed alpine oak, custom low-slung seating, and foraged Michelin-caliber high-altitude terroir.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2400&q=85'
  },
  {
    index: '03 / HEARTH',
    titleLine1: 'THE DUAL',
    titleLine2: 'HEARTH',
    subtitle: 'CARVED SLATE & AROMATIC BLUE PINE.',
    desc: 'Sunken fire lounge wrapped in aged cashmere and hand-chiseled Himalayan granite hearths.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85'
  },
  {
    index: '04 / SUITE',
    titleLine1: 'PRIMARY',
    titleLine2: 'SUITE',
    subtitle: 'A ROOM THAT HOLDS THE LIGHT.',
    desc: 'Low platform cedar bed aligned with sunrise peaks and morning valley mist at 8,250 feet.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2400&q=85'
  },
  {
    index: '05 / BATH',
    titleLine1: 'THE',
    titleLine2: 'BATH',
    subtitle: 'STONE, WATER, STILLNESS.',
    desc: 'Continuous 38°C natural geothermal springs soaking tub with unhindered alpine horizons.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2400&q=85'
  },
  {
    index: '06 / HORIZON',
    titleLine1: 'THE GRAND',
    titleLine2: 'VIEW',
    subtitle: 'FULLY UNTOUCHED. ABOVE 8,250 FT.',
    desc: 'Private cantilevered observation deck suspended between Himalayan bedrock and the sky.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=85'
  }
];

let currentSlideIndex = 0;
let slideInterval = null;

function initWalkthrough() {
  const container = document.getElementById('walkthrough-slides-container');
  const pillsContainer = document.getElementById('walkthrough-pills');
  if (!container) return;

  // Render Slides
  container.innerHTML = SPACES_DATA.map((space, idx) => `
    <div class="walkthrough-slide ${idx === 0 ? 'active' : ''}" data-slide="${idx}">
      <img src="${space.image}" alt="${space.titleLine1} ${space.titleLine2}" class="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.06]">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent"></div>
    </div>
  `).join('');

  // Render Navigation Pills
  if (pillsContainer) {
    pillsContainer.innerHTML = SPACES_DATA.map((space, idx) => `
      <button onclick="goToSlide(${idx})" class="room-nav-pill ${idx === 0 ? 'active' : ''} px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest" data-pill="${idx}">
        ${space.index}
      </button>
    `).join('');
  }

  updateSlideContent(0);
  startAutoSlide();

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
}

function updateSlideContent(index) {
  const space = SPACES_DATA[index];
  if (!space) return;

  const tagEl = document.getElementById('hero-room-index');
  const title1El = document.getElementById('hero-room-title-1');
  const title2El = document.getElementById('hero-room-title-2');
  const subEl = document.getElementById('hero-room-subtitle');
  const descEl = document.getElementById('hero-room-desc');
  const progressFill = document.getElementById('walkthrough-progress');

  if (tagEl) tagEl.textContent = space.index;
  if (title1El) title1El.textContent = space.titleLine1;
  if (title2El) title2El.textContent = space.titleLine2;
  if (subEl) subEl.textContent = space.subtitle;
  if (descEl) descEl.textContent = space.desc;

  // Update slide classes
  document.querySelectorAll('.walkthrough-slide').forEach((slide, i) => {
    if (i === index) slide.classList.add('active');
    else slide.classList.remove('active');
  });

  // Update pills
  document.querySelectorAll('.room-nav-pill').forEach((pill, i) => {
    if (i === index) pill.classList.add('active');
    else pill.classList.remove('active');
  });

  // Update Progress Bar (1/6 to 6/6)
  if (progressFill) {
    const pct = ((index + 1) / SPACES_DATA.length) * 100;
    progressFill.style.width = `${pct}%`;
  }
}

function goToSlide(index) {
  currentSlideIndex = index;
  updateSlideContent(currentSlideIndex);
  resetAutoSlide();
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % SPACES_DATA.length;
  updateSlideContent(currentSlideIndex);
  resetAutoSlide();
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + SPACES_DATA.length) % SPACES_DATA.length;
  updateSlideContent(currentSlideIndex);
  resetAutoSlide();
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 7000);
}

function resetAutoSlide() {
  if (slideInterval) clearInterval(slideInterval);
  startAutoSlide();
}

// ============================================================================
// 2. CURRENCY EXCHANGE SYSTEM
// ============================================================================
const CURRENCY_CONFIG = {
  USD: { symbol: '$', rate: 1.0, decimals: 0, prefix: true },
  EUR: { symbol: '€', rate: 0.92, decimals: 0, prefix: true },
  MVR: { symbol: 'Rf ', rate: 15.42, decimals: 0, prefix: true },
  INR: { symbol: '₹', rate: 83.30, decimals: 0, prefix: true }
};

let currentCurrency = 'USD';

const SUITES_DATA = {
  chalet: {
    id: 'chalet',
    name: 'The Cloudline Chalet',
    basePriceUSD: 850,
    tagline: 'Private cantilevered timber chalet perched directly above the floating valley mist.',
    size: '1,250 sq.ft / 116 sq.m',
    capacity: 'Up to 2 Adults',
    view: 'Unobstructed Annapurna Peak & Deep Valley Vista',
    heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    duskImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { label: 'Exterior Vista', url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Bedroom Hearth', url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Cedar Soaking Tub', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Alpine Stargazing Deck', url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: [
      'Heated Japanese cedarwood soaking tub with floor-to-ceiling glass',
      'Double-sided stone hearth fireplace with aromatic Himalayan pine logs',
      'Private 400 sq.ft cantilevered stargazing deck with high-powered optics',
      'Dedicated personal Sherpa mountain butler on continuous call',
      'Complimentary morning artisan tea service brewed with alpine herbs',
      'Acoustically triple-glazed insulated windows with heated slate flooring'
    ],
    inclusions: 'Includes Michelin-inspired breakfast, evening aperitifs, and guided sunrise alpine walks.',
    blueprint: {
      rooms: [
        { name: 'Master Bedroom & Hearth', area: '580 sq.ft', note: 'King cashmere bed facing Annapurna South' },
        { name: 'Cedar Soaking Pavilion', area: '270 sq.ft', note: 'Continuous 39°C natural spring bath' },
        { name: 'Cantilevered Starlight Deck', area: '400 sq.ft', note: 'Outdoor radiant heating & telescope station' }
      ]
    }
  },
  villa: {
    id: 'villa',
    name: 'The Celestial Glass Villa',
    basePriceUSD: 1450,
    tagline: 'Dual-level luxury estate with private 38°C infinity thermal pool and retractable starlight ceiling.',
    size: '2,600 sq.ft / 241 sq.m',
    capacity: 'Up to 4 Guests',
    view: 'Panoramic 270° Glacial Mountain Range & Annapurna Valley',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    duskImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { label: 'Thermal Pool Horizon', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Glass Starlight Salon', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Finnish Sauna & Cold Plunge', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Twilight Alpine View', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: [
      'Private temperature-controlled (38°C) infinity thermal plunge pool',
      'Private Finnish dry cedar sauna and glacial cold plunge facing the snow line',
      'Master bedroom with motorized retractable glass ceiling for nocturnal stargazing',
      'Private chef dining table and temperature-regulated Sommelier wine cellar',
      'Round-trip private helicopter transfer from regional helipad included',
      'In-villa sound therapy meditation bowls and customized aromatherapy'
    ],
    inclusions: 'All-inclusive gourmet dining, private cellar tasting, and daily bespoke mountain wellness sessions.',
    blueprint: {
      rooms: [
        { name: 'Upper Sky Sanctuary', area: '1,100 sq.ft', note: 'Retractable glass roof & dual fireplace' },
        { name: 'Lower Wellness Salon', area: '900 sq.ft', note: 'Finnish cedar sauna & indoor stone bath' },
        { name: 'Horizon Plunge Terrace', area: '600 sq.ft', note: '38°C heated rim-flow mineral pool' }
      ]
    }
  },
  penthouse: {
    id: 'penthouse',
    name: 'The Sanctuary Summit Penthouse',
    basePriceUSD: 2200,
    tagline: 'The crowning apex of Himalayan hospitality reserved for discerning international dignitaries.',
    size: '4,100 sq.ft / 380 sq.m',
    capacity: 'Up to 6 Guests',
    view: 'Highest vantage across the entire valley & 8,000m summits',
    heroImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    duskImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      { label: 'Grand Summit Lounge', url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Presidential Master Suite', url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Sound Healing Dome', url: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80' },
      { label: 'Summit Helipad & Night View', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: [
      'Full private floor crowning the highest ridge of the estate',
      'Direct private helipad access with discreet diplomatic escort protocol',
      'Private Himalayan crystal sound healing studio & personal spa treatment suite',
      'Dedicated executive chef, sommelier, and 24-hour estate security detail',
      'Handcrafted artisan furnishings in aged cedar and hammered mist brass',
      'Subterranean private cellar stocked with vintage Grand Crus'
    ],
    inclusions: 'Full buyout exclusivity, unlimited bespoke alpine expeditions, and customized gourmet degustations.',
    blueprint: {
      rooms: [
        { name: 'Grand Himalayan Salon', area: '1,800 sq.ft', note: 'Floating 4-sided stone hearth & banquet table' },
        { name: 'Three Diplomatic Master Suites', area: '1,500 sq.ft', note: 'Independent ensuite dressing & soaking baths' },
        { name: 'Sound Healing Dome & Terrace', area: '800 sq.ft', note: 'Acoustic bronze bowl dome & private heligate' }
      ]
    }
  }
};

function formatCurrency(amountUSD, currencyCode) {
  const config = CURRENCY_CONFIG[currencyCode] || CURRENCY_CONFIG.USD;
  const converted = Math.round(amountUSD * config.rate);
  const formattedNumber = converted.toLocaleString();
  return `${config.symbol}${formattedNumber}`;
}

function updatePrices(currencyCode) {
  currentCurrency = currencyCode;
  
  document.querySelectorAll('.currency-option').forEach(btn => {
    if (btn.dataset.currency === currencyCode) {
      btn.classList.add('bg-white', 'text-slate-900', 'font-semibold');
      btn.classList.remove('text-slate-300', 'hover:text-white');
    } else {
      btn.classList.remove('bg-white', 'text-slate-900', 'font-semibold');
      btn.classList.add('text-slate-300', 'hover:text-white');
    }
  });

  document.querySelectorAll('[data-suite-price]').forEach(el => {
    const suiteKey = el.dataset.suitePrice;
    if (SUITES_DATA[suiteKey]) {
      el.textContent = formatCurrency(SUITES_DATA[suiteKey].basePriceUSD, currencyCode);
    }
  });

  document.querySelectorAll('.currency-label').forEach(el => {
    el.textContent = currencyCode;
  });

  updateCuratorTotals();
  updateBookingSummary();
}

// ============================================================================
// 3. LIVE HIMALAYAN WEATHER & TIME TICKER
// ============================================================================
function initWeatherTicker() {
  const timeEl = document.getElementById('ticker-himalayan-time');
  
  function updateTime() {
    if (!timeEl) return;
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const himalayanTime = new Date(utc + (3600000 * 5.75));
    
    let hours = himalayanTime.getHours();
    const minutes = String(himalayanTime.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    timeEl.textContent = `${hours}:${minutes} ${ampm} NPT (UTC+5:45)`;
  }

  updateTime();
  setInterval(updateTime, 15000);
}

// ============================================================================
// 4. ELEVATED SUITE ARCHITECTURAL INSPECTOR MODAL
// ============================================================================
let activeSuiteKey = 'chalet';

function openSuiteModal(suiteKey) {
  const suite = SUITES_DATA[suiteKey];
  if (!suite) return;

  activeSuiteKey = suiteKey;

  const modal = document.getElementById('suite-modal');
  const title = document.getElementById('modal-suite-title');
  const tagline = document.getElementById('modal-suite-tagline');
  const size = document.getElementById('modal-suite-size');
  const capacity = document.getElementById('modal-suite-capacity');
  const view = document.getElementById('modal-suite-view');
  const price = document.getElementById('modal-suite-price');
  const heroImg = document.getElementById('modal-suite-main-image');
  const inclusions = document.getElementById('modal-suite-inclusions');
  const bookBtn = document.getElementById('modal-suite-book-trigger');

  if (title) title.textContent = suite.name;
  if (tagline) tagline.textContent = suite.tagline;
  if (size) size.textContent = suite.size;
  if (capacity) capacity.textContent = suite.capacity;
  if (view) view.textContent = suite.view;
  if (inclusions) inclusions.textContent = suite.inclusions;
  if (price) price.textContent = `${formatCurrency(suite.basePriceUSD, currentCurrency)} / night`;
  if (heroImg) heroImg.src = suite.heroImage;

  const featuresList = document.getElementById('modal-suite-features');
  if (featuresList) {
    featuresList.innerHTML = suite.features
      .map(feat => `
        <li class="flex items-start space-x-3 text-mist-300">
          <svg class="w-4 h-4 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="text-xs font-light leading-relaxed">${feat}</span>
        </li>
      `)
      .join('');
  }

  renderGalleryThumbnails(suite);
  renderBlueprintView(suite);
  switchSuiteTab('gallery');

  if (bookBtn) {
    bookBtn.onclick = () => {
      closeSuiteModal();
      openBookingModal(suite.id);
    };
  }

  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeSuiteModal() {
  const modal = document.getElementById('suite-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function renderGalleryThumbnails(suite) {
  const container = document.getElementById('modal-gallery-thumbs');
  if (!container) return;

  container.innerHTML = suite.gallery.map((item, idx) => `
    <button onclick="selectGalleryImage(${idx})" class="gallery-thumb ${idx === 0 ? 'active' : ''} h-16 rounded-lg overflow-hidden relative text-left group">
      <img src="${item.url}" alt="${item.label}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors"></div>
      <span class="absolute bottom-1 left-1.5 text-[9px] uppercase tracking-wider text-white bg-slate-950/80 px-1.5 py-0.5 rounded font-light">${item.label}</span>
    </button>
  `).join('');
}

function selectGalleryImage(idx) {
  const suite = SUITES_DATA[activeSuiteKey];
  if (!suite || !suite.gallery[idx]) return;

  const heroImg = document.getElementById('modal-suite-main-image');
  if (heroImg) {
    heroImg.src = suite.gallery[idx].url;
  }

  document.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    if (i === idx) thumb.classList.add('active');
    else thumb.classList.remove('active');
  });
}

function setSuiteLighting(mode) {
  const suite = SUITES_DATA[activeSuiteKey];
  if (!suite) return;

  const heroImg = document.getElementById('modal-suite-main-image');
  if (heroImg) {
    heroImg.src = mode === 'dusk' ? suite.duskImage : suite.heroImage;
  }

  document.querySelectorAll('.suite-lighting-btn').forEach(btn => {
    if (btn.dataset.lighting === mode) {
      btn.classList.add('bg-white', 'text-slate-900', 'font-semibold');
      btn.classList.remove('text-mist-400');
    } else {
      btn.classList.remove('bg-white', 'text-slate-900', 'font-semibold');
      btn.classList.add('text-mist-400');
    }
  });
}

function switchSuiteTab(tab) {
  const galleryView = document.getElementById('modal-view-gallery');
  const blueprintView = document.getElementById('modal-view-blueprint');

  document.querySelectorAll('.suite-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tab) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  if (tab === 'gallery') {
    if (galleryView) galleryView.classList.remove('hidden');
    if (blueprintView) blueprintView.classList.add('hidden');
  } else {
    if (galleryView) galleryView.classList.add('hidden');
    if (blueprintView) blueprintView.classList.remove('hidden');
  }
}

function renderBlueprintView(suite) {
  const container = document.getElementById('modal-blueprint-details');
  if (!container || !suite.blueprint) return;

  container.innerHTML = `
    <div class="bg-blueprint p-6 rounded-2xl border border-mist-400/20 mb-4 text-xs font-mono">
      <div class="flex items-center justify-between mb-4 border-b border-mist-400/20 pb-3">
        <span class="text-white font-medium">ARCHITECTURAL SCHEMATIC // CAD SCALE 1:100</span>
        <span class="text-mist-400">${suite.size}</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        ${suite.blueprint.rooms.map((room, idx) => `
          <div class="p-3 rounded-lg bg-slate-950/70 border border-mist-400/15">
            <div class="text-[10px] text-mist-400 uppercase tracking-widest mb-1">Zone 0${idx + 1}</div>
            <div class="text-white font-sans font-medium text-sm mb-1">${room.name}</div>
            <div class="text-mist-300 text-xs mb-1">${room.area}</div>
            <div class="text-[11px] text-mist-400 font-sans font-light">${room.note}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================================================
// 5. BESPOKE STAY & EXPERIENCE CURATION ENGINE
// ============================================================================
const CURATOR_STATE = {
  arrival: 'heli_ktm',
  dining: 'degustation',
  wellness: 'sound_soak',
  expedition: 'glacier_picnic'
};

const CURATOR_PRICING = {
  heli_ktm: { usd: 1200, label: 'Private Helicopter from Kathmandu' },
  heli_pkr: { usd: 800, label: 'Private Helicopter from Pokhara' },
  rover: { usd: 0, label: 'VIP Alpine Rover Escort' },
  degustation: { usd: 320, label: '9-Course Foraged Glacial Tasting' },
  hearth: { usd: 220, label: 'Frost & Flame Fireside Wagyu' },
  dining_none: { usd: 0, label: 'A La Carte Casual' },
  sound_soak: { usd: 280, label: '432 Hz Sound Bath & Geothermal Soak' },
  ayurveda: { usd: 190, label: 'Vedic Alpine Herbal Therapy' },
  wellness_none: { usd: 0, label: 'Self-Guided Wellness' },
  glacier_picnic: { usd: 750, label: 'Heli-Glacier Champagne Picnic' },
  star_trek: { usd: 180, label: 'Nocturnal Observatory Stargazing' },
  expedition_none: { usd: 0, label: 'Private Chalet Relaxation' }
};

function selectCuratorOption(category, key) {
  CURATOR_STATE[category] = key;
  
  document.querySelectorAll(`[data-curator-cat="${category}"]`).forEach(card => {
    if (card.dataset.curatorKey === key) {
      card.classList.add('selected');
      card.querySelector('.check-indicator')?.classList.remove('opacity-0');
    } else {
      card.classList.remove('selected');
      card.querySelector('.check-indicator')?.classList.add('opacity-0');
    }
  });

  updateCuratorTotals();
}

function updateCuratorTotals() {
  const arrivalPrice = CURATOR_PRICING[CURATOR_STATE.arrival]?.usd || 0;
  const diningPrice = CURATOR_PRICING[CURATOR_STATE.dining]?.usd || 0;
  const wellnessPrice = CURATOR_PRICING[CURATOR_STATE.wellness]?.usd || 0;
  const expeditionPrice = CURATOR_PRICING[CURATOR_STATE.expedition]?.usd || 0;

  const totalCuratedUSD = arrivalPrice + diningPrice + wellnessPrice + expeditionPrice;

  const summaryEl = document.getElementById('curator-total-amount');
  if (summaryEl) {
    summaryEl.textContent = formatCurrency(totalCuratedUSD, currentCurrency);
  }

  document.querySelectorAll('[data-curator-price-key]').forEach(el => {
    const key = el.dataset.curatorPriceKey;
    const item = CURATOR_PRICING[key];
    if (item) {
      el.textContent = item.usd === 0 ? 'Complimentary' : formatCurrency(item.usd, currentCurrency);
    }
  });
}

function transferCuratorToBooking() {
  const arrivalItem = CURATOR_PRICING[CURATOR_STATE.arrival]?.label;
  const diningItem = CURATOR_PRICING[CURATOR_STATE.dining]?.label;
  const wellnessItem = CURATOR_PRICING[CURATOR_STATE.wellness]?.label;
  const expeditionItem = CURATOR_PRICING[CURATOR_STATE.expedition]?.label;

  const notes = [
    `Curated Experience Selection:`,
    `- Arrival: ${arrivalItem}`,
    `- Dining: ${diningItem}`,
    `- Wellness: ${wellnessItem}`,
    `- Expedition: ${expeditionItem}`
  ].join('\n');

  openBookingModal('chalet');
  
  const reqField = document.getElementById('booking-requests');
  if (reqField) {
    reqField.value = notes;
  }
}

// ============================================================================
// 6. INTERACTIVE BOOKING MODAL & CALCULATION ENGINE
// ============================================================================
function openBookingModal(preselectedSuite = 'chalet') {
  const modal = document.getElementById('booking-modal');
  const suiteSelect = document.getElementById('booking-suite-select');
  
  if (suiteSelect && preselectedSuite) {
    suiteSelect.value = preselectedSuite;
  }

  const checkinInput = document.getElementById('booking-checkin');
  const checkoutInput = document.getElementById('booking-checkout');
  
  if (checkinInput && !checkinInput.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 7);
    checkinInput.value = tomorrow.toISOString().split('T')[0];
  }
  
  if (checkoutInput && !checkoutInput.value) {
    const depart = new Date();
    depart.setDate(depart.getDate() + 11);
    checkoutInput.value = depart.toISOString().split('T')[0];
  }

  updateBookingSummary();

  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function updateBookingSummary() {
  const suiteSelect = document.getElementById('booking-suite-select');
  const checkinInput = document.getElementById('booking-checkin');
  const checkoutInput = document.getElementById('booking-checkout');
  const summaryNights = document.getElementById('booking-summary-nights');
  const summaryRate = document.getElementById('booking-summary-rate');
  const summaryTotal = document.getElementById('booking-summary-total');

  if (!suiteSelect) return;

  const suiteKey = suiteSelect.value || 'chalet';
  const suite = SUITES_DATA[suiteKey];
  if (!suite) return;

  let nights = 4;
  if (checkinInput && checkoutInput && checkinInput.value && checkoutInput.value) {
    const d1 = new Date(checkinInput.value);
    const d2 = new Date(checkoutInput.value);
    const diffTime = d2.getTime() - d1.getTime();
    const calculatedNights = Math.round(diffTime / (1000 * 3600 * 24));
    if (calculatedNights > 0) nights = calculatedNights;
  }

  const rateFormatted = formatCurrency(suite.basePriceUSD, currentCurrency);
  const totalUSD = suite.basePriceUSD * nights;
  const totalFormatted = formatCurrency(totalUSD, currentCurrency);

  if (summaryNights) summaryNights.textContent = `${nights} Night${nights > 1 ? 's' : ''}`;
  if (summaryRate) summaryRate.textContent = `${rateFormatted} / night`;
  if (summaryTotal) summaryTotal.textContent = totalFormatted;
}

function handleReservationSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const guestName = document.getElementById('booking-name')?.value || 'Honored Guest';
  const suiteKey = document.getElementById('booking-suite-select')?.value || 'chalet';
  const suite = SUITES_DATA[suiteKey];
  const totalStr = document.getElementById('booking-summary-total')?.textContent || '$3,400';

  closeBookingModal();

  const refCode = 'SWG-' + Math.floor(100000 + Math.random() * 900000);
  showConfirmationToast(guestName, suite ? suite.name : 'The Cloudline Chalet', refCode, totalStr);
  form.reset();
}

function showConfirmationToast(name, suiteName, refCode, totalStr) {
  const toast = document.getElementById('confirmation-toast');
  const guestEl = document.getElementById('toast-guest-name');
  const suiteEl = document.getElementById('toast-suite-name');
  const refEl = document.getElementById('toast-ref-code');
  const totalEl = document.getElementById('toast-total-amount');

  if (guestEl) guestEl.textContent = name;
  if (suiteEl) suiteEl.textContent = suiteName;
  if (refEl) refEl.textContent = refCode;
  if (totalEl) totalEl.textContent = totalStr;

  if (toast) {
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('opacity-100', 'translate-y-0');
      toast.classList.remove('opacity-0', 'translate-y-8');
    }, 10);
  }
}

function closeConfirmationToast() {
  const toast = document.getElementById('confirmation-toast');
  if (toast) {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-8');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 300);
  }
}

// ============================================================================
// 7. CULINARY & CELLAR TAB SELECTOR
// ============================================================================
function switchDiningTab(tabKey) {
  document.querySelectorAll('.dining-tab-btn').forEach(btn => {
    if (btn.dataset.diningTab === tabKey) {
      btn.classList.add('bg-white', 'text-slate-900', 'font-semibold');
      btn.classList.remove('text-mist-400');
    } else {
      btn.classList.remove('bg-white', 'text-slate-900', 'font-semibold');
      btn.classList.add('text-mist-400');
    }
  });

  document.querySelectorAll('.dining-content-panel').forEach(panel => {
    if (panel.id === `dining-panel-${tabKey}`) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });
}

// ============================================================================
// 8. PRIVATE AVIATION & HELIPAD SELECTOR
// ============================================================================
const AVIATION_ROUTES = {
  ktm: {
    origin: 'Tribhuvan Int. Airport (Kathmandu)',
    duration: '28 Minutes',
    aircraft: 'Airbus H125 / Bell 407 Twin-Turbine',
    elevationChange: '+4,500 FT Direct Ridgeline Approach',
    protocol: 'VIP Terminal Escort, Private Customs & Direct Helipad Landing'
  },
  pkr: {
    origin: 'Pokhara Regional Helipad',
    duration: '14 Minutes',
    aircraft: 'Airbus H125 Alpine Configuration',
    elevationChange: '+5,200 FT Annapurna Gorge Corridor',
    protocol: 'Lakeside Helipad Dispatch & Express Baggage Stewardship'
  },
  del: {
    origin: 'Indira Gandhi Int. (New Delhi)',
    duration: '1h 45m Jet + 20m Heli Transfer',
    aircraft: 'Challenger 350 / Citation X + Final Rotor Transition',
    protocol: 'Direct Diplomatic Tarmac Transfer & In-flight Concierge'
  }
};

function selectAviationRoute(routeKey) {
  const data = AVIATION_ROUTES[routeKey];
  if (!data) return;

  document.querySelectorAll('.aviation-btn').forEach(btn => {
    if (btn.dataset.route === routeKey) {
      btn.classList.add('bg-white', 'text-slate-900', 'font-semibold');
      btn.classList.remove('text-mist-400');
    } else {
      btn.classList.remove('bg-white', 'text-slate-900', 'font-semibold');
      btn.classList.add('text-mist-400');
    }
  });

  const originEl = document.getElementById('aviation-origin');
  const durEl = document.getElementById('aviation-duration');
  const craftEl = document.getElementById('aviation-aircraft');
  const elevEl = document.getElementById('aviation-elevation');
  const protEl = document.getElementById('aviation-protocol');

  if (originEl) originEl.textContent = data.origin;
  if (durEl) durEl.textContent = data.duration;
  if (craftEl) craftEl.textContent = data.aircraft;
  if (elevEl) elevEl.textContent = data.elevationChange;
  if (protEl) protEl.textContent = data.protocol;
}

// ============================================================================
// 9. MASTER DOM INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. FORMA Walkthrough Slider
  initWalkthrough();

  // 2. Weather Ticker
  initWeatherTicker();

  // 3. Navigation Scroll Handling
  const navbar = document.getElementById('main-nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('bg-slate-950/90', 'backdrop-blur-md', 'shadow-2xl', 'py-3.5');
      navbar?.classList.remove('py-5');
    } else {
      navbar?.classList.remove('bg-slate-950/90', 'backdrop-blur-md', 'shadow-2xl', 'py-3.5');
      navbar?.classList.add('py-5');
    }
  });

  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
    });
  });

  // 4. Multi-Currency Buttons
  document.querySelectorAll('.currency-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const code = e.currentTarget.dataset.currency;
      if (code) updatePrices(code);
    });
  });

  // 5. Suite Modal Open Triggers
  document.querySelectorAll('[data-open-suite]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const suiteId = e.currentTarget.dataset.openSuite;
      openSuiteModal(suiteId);
    });
  });

  // 6. Suite Quick Book Triggers
  document.querySelectorAll('[data-quick-book]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const suiteId = e.currentTarget.dataset.quickBook;
      openBookingModal(suiteId);
    });
  });

  // 7. Suite Lighting & Tabs
  document.querySelectorAll('.suite-lighting-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setSuiteLighting(btn.dataset.lighting);
    });
  });

  document.querySelectorAll('.suite-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchSuiteTab(btn.dataset.tab);
    });
  });

  // 8. Booking Form Inputs Calculation
  ['booking-suite-select', 'booking-checkin', 'booking-checkout', 'booking-guests'].forEach(id => {
    const el = document.getElementById(id);
    el?.addEventListener('change', updateBookingSummary);
  });

  // 9. Dining Tabs
  document.querySelectorAll('.dining-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchDiningTab(btn.dataset.diningTab);
    });
  });

  // 10. Aviation Selector
  document.querySelectorAll('.aviation-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectAviationRoute(btn.dataset.route);
    });
  });

  // 11. Initial Currency
  updatePrices('USD');
});
