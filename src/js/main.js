import { CATEGORIES, TREATMENTS } from '../data/treatments.js';

// Configuration
const CONFIG = {
  whatsappNumber: '5491150121882',
  instagramUrl: 'https://www.instagram.com/antolopez.skinstudio/?hl=es-la',
  studioName: 'Skin Studio | Cosmiatría & Make Up'
};

// Global State
let currentCategory = 'todas';
let searchQuery = '';

// DOM Elements
const categoryContainer = document.getElementById('categoryContainer');
const treatmentsGrid = document.getElementById('treatmentsGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const activeCategoryTitle = document.getElementById('activeCategoryTitle');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalCloseBtn = document.getElementById('modalCloseBtn');

/**
 * Generate WhatsApp Link with pre-filled message
 */
function createWhatsAppUrl(treatmentTitle = null) {
  let text = '';
  if (treatmentTitle) {
    text = `¡Hola Skin Studio! 🌸 Quisiera consultar / agendar un turno para el tratamiento: *${treatmentTitle}*.`;
  } else {
    text = `¡Hola Skin Studio! 🌸 Me gustaría obtener más información y agendar un turno.`;
  }
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Filter treatments based on active category and search input
 */
function getFilteredTreatments() {
  return TREATMENTS.filter(item => {
    const matchesCategory = (currentCategory === 'todas') || (item.category === currentCategory);
    
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    const matchesTitle = item.title.toLowerCase().includes(query);
    const matchesDesc = item.description.toLowerCase().includes(query);
    const matchesBadge = item.badge ? item.badge.toLowerCase().includes(query) : false;
    const matchesIncludes = item.includes.some(inc => inc.toLowerCase().includes(query));

    return matchesTitle || matchesDesc || matchesBadge || matchesIncludes;
  });
}

/**
 * Render category filter buttons
 */
function renderCategories() {
  if (!categoryContainer) return;

  categoryContainer.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === 'todas' 
      ? TREATMENTS.length 
      : TREATMENTS.filter(t => t.category === cat.id).length;
    
    const isActive = cat.id === currentCategory;

    return `
      <button 
        class="filter-pill ${isActive ? 'active' : ''}" 
        data-category="${cat.id}"
        aria-label="Filtrar por ${cat.label}"
      >
        <span>${cat.label}</span>
        <span class="pill-count">${count}</span>
      </button>
    `;
  }).join('');

  // Add click listeners to filter pills
  categoryContainer.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.category;
      renderCategories();
      updateView();
    });
  });
}

/**
 * Render treatment cards in the grid
 */
function renderTreatments(list) {
  if (!treatmentsGrid) return;

  if (list.length === 0) {
    treatmentsGrid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  treatmentsGrid.style.display = 'grid';
  if (emptyState) emptyState.style.display = 'none';

  treatmentsGrid.innerHTML = list.map(item => {
    const waUrl = createWhatsAppUrl(item.title);
    
    const includesListHTML = item.includes.map(inc => `
      <li class="checklist-item">
        <div class="check-icon-bg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span>${inc}</span>
      </li>
    `).join('');

    return `
      <article class="treatment-card" data-id="${item.id}">
        <div class="card-media">
          <img class="card-img" src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="card-media-overlay"></div>
          ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}
          <span class="card-category-label">${item.categoryLabel}</span>
        </div>

        <div class="card-content">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-description">${item.description}</p>

          <!-- Meta badges (Frequency & Duration) -->
          <div class="card-meta-box">
            ${item.duration ? `
              <div class="card-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span class="card-meta-text"><strong>Duración:</strong> ${item.duration}</span>
              </div>
            ` : ''}
            ${item.frequency ? `
              <div class="card-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
                </svg>
                <span class="card-meta-text">${item.frequency}</span>
              </div>
            ` : ''}
          </div>

          <!-- Accordion "Ver qué incluye" -->
          <div class="accordion-wrapper">
            <button class="accordion-trigger" aria-expanded="false">
              <span>Ver qué incluye (${item.includes.length} pasos)</span>
              <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="accordion-content">
              <ul class="checklist-list">
                ${includesListHTML}
              </ul>
            </div>
          </div>

          <!-- WhatsApp CTA Button -->
          <a 
            href="${waUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="cta-button"
            title="Agendar por WhatsApp"
          >
            <svg viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Consultar / Agendar por WhatsApp</span>
          </a>
        </div>
      </article>
    `;
  }).join('');

  // Attach accordion handlers
  treatmentsGrid.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = trigger.classList.contains('open');
      const content = trigger.nextElementSibling;

      trigger.classList.toggle('open');
      trigger.setAttribute('aria-expanded', !isOpen);

      if (isOpen) {
        content.classList.remove('open');
      } else {
        content.classList.add('open');
      }
    });
  });
}

/**
 * Update dynamic text and state
 */
function updateView() {
  const filtered = getFilteredTreatments();

  // Update header text
  const currentCatObj = CATEGORIES.find(c => c.id === currentCategory);
  if (activeCategoryTitle) {
    activeCategoryTitle.textContent = currentCatObj ? currentCatObj.label : 'Tratamientos';
  }

  if (resultsCount) {
    resultsCount.textContent = `${filtered.length} tratamiento${filtered.length === 1 ? '' : 's'}`;
  }

  renderTreatments(filtered);
}

/**
 * Initialize event listeners
 */
function initEvents() {
  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('active', searchQuery.length > 0);
      }
      updateView();
    });
  }

  // Clear Search Handler
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.remove('active');
      searchInput.focus();
      updateView();
    });
  }

  // Reset Search from empty state
  const resetSearchBtn = document.getElementById('resetSearchBtn');
  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      currentCategory = 'todas';
      if (clearSearchBtn) clearSearchBtn.classList.remove('active');
      renderCategories();
      updateView();
    });
  }
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  updateView();
  initEvents();
});
