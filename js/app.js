(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const config = window.BOCATA_CONFIG || {};
  const products = Array.isArray(window.MENU_DATA) ? window.MENU_DATA : [];
  const categories = Array.isArray(window.MENU_CATEGORIES) ? window.MENU_CATEGORIES : [];
  const promos = Array.isArray(window.PROMO_DATA) ? window.PROMO_DATA : [];
  const gallery = Array.isArray(window.GALLERY_DATA) ? window.GALLERY_DATA : [];
  const videos = Array.isArray(window.VIDEO_DATA) ? window.VIDEO_DATA : [];

  const categoryLabel = (categoryId) => categories.find((item) => item.id === categoryId)?.label || categoryId;
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);

  function productCard(product) {
    const tag = product.tag ? `<span class="product-tag">${escapeHtml(product.tag)}</span>` : "";
    return `
      <article class="product-card reveal" data-product-id="${escapeHtml(product.id)}">
        <div class="product-media">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.imageAlt)}" loading="lazy" width="800" height="600">
          ${tag}
        </div>
        <div class="product-body">
          <p class="product-category">${escapeHtml(categoryLabel(product.category))}</p>
          <h3>${escapeHtml(product.name)}</h3>
          <p class="product-description">${escapeHtml(product.description)}</p>
          <div class="product-footer">
            <p class="product-price">${escapeHtml(product.price)}</p>
            <button class="button order-trigger" type="button" data-product="${escapeHtml(product.name)}">Pedir</button>
          </div>
        </div>
      </article>`;
  }

  function renderFeatured() {
    const grid = document.querySelector("[data-featured-grid]");
    if (!grid) return;
    grid.innerHTML = products.filter((product) => product.featured && product.available).slice(0, 5).map(productCard).join("");
  }

  function renderFilters() {
    const filters = document.querySelector("[data-filters]");
    if (!filters) return;
    filters.innerHTML = categories.map((category, index) => `
      <button class="filter-button${index === 0 ? " is-active" : ""}" type="button" data-category="${escapeHtml(category.id)}" aria-pressed="${index === 0 ? "true" : "false"}">${escapeHtml(category.label)}</button>
    `).join("");
  }

  function renderMenu(category = "todos") {
    const grid = document.querySelector("[data-menu-grid]");
    const count = document.querySelector("[data-results-count]");
    if (!grid) return;
    const filtered = products.filter((product) => product.available && (category === "todos" || product.category === category));
    grid.innerHTML = filtered.map(productCard).join("");
    if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? "opción disponible" : "opciones disponibles"}`;
    observeReveals(grid);
  }

  function renderPromos() {
    const grid = document.querySelector("[data-promo-grid]");
    if (!grid) return;
    grid.innerHTML = promos.filter((promo) => promo.available).map((promo) => `
      <article class="promo-card reveal">
        <img src="${escapeHtml(promo.image)}" alt="Imagen provisoria para ${escapeHtml(promo.name)}" loading="lazy" width="1000" height="800">
        <span class="promo-tag">${escapeHtml(promo.tag)}</span>
        <div class="promo-body">
          <h3>${escapeHtml(promo.name)}</h3>
          <p>${escapeHtml(promo.description)}</p>
          <div class="promo-price-row"><span class="promo-price">${escapeHtml(promo.price)}</span>${promo.previousPrice ? `<span class="promo-old-price">${escapeHtml(promo.previousPrice)}</span>` : ""}</div>
          <button class="button order-trigger" type="button" data-product="${escapeHtml(promo.name)}">Pedir promo</button>
        </div>
      </article>`).join("");
  }

  function renderGallery() {
    const grid = document.querySelector("[data-gallery]");
    if (!grid) return;
    grid.innerHTML = gallery.map((item, index) => `
      <button class="gallery-item reveal" type="button" data-gallery-index="${index}" aria-label="Ampliar: ${escapeHtml(item.caption)}">
        <img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy" width="900" height="700">
        <span class="gallery-caption">${escapeHtml(item.caption)}</span>
      </button>`).join("");
  }

  function renderVideos() {
    const grid = document.querySelector("[data-video-grid]");
    if (!grid) return;
    grid.innerHTML = videos.map((video) => `
      <article class="video-card reveal">
        <div class="video-player" data-video-player="${escapeHtml(video.id)}">
          <button class="video-placeholder" type="button" data-video-play="${escapeHtml(video.id)}" aria-label="Reproducir ${escapeHtml(video.title)}">
            <span class="video-play-icon" aria-hidden="true">▶</span>
            <span>Reproducir video</span>
          </button>
        </div>
        <div class="video-body">
          <div><h3>${escapeHtml(video.title)}</h3><p>${escapeHtml(video.description)}</p></div>
          <a href="${escapeHtml(video.url)}" target="_blank" rel="noopener noreferrer">Abrir en Google Vids <span aria-hidden="true">↗</span></a>
        </div>
      </article>`).join("");
  }

  function renderBusinessData() {
    const address = document.querySelector("[data-address]");
    const phone = document.querySelector("[data-phone]");
    const email = document.querySelector("[data-email-link]");
    const emailFooter = document.querySelector("[data-email-footer]");
    const instagram = document.querySelector("[data-instagram-label]");
    if (address) address.textContent = config.address || "Próximamente";
    if (phone) phone.textContent = config.phone || "Próximamente";
    [email, emailFooter].forEach((link) => {
      if (!link) return;
      link.textContent = link === email ? (config.email || "Próximamente") : "Email";
      if (config.email) link.href = `mailto:${config.email}`;
      else link.removeAttribute("href");
    });
    if (instagram) {
      instagram.textContent = config.instagramHandle || "Próximamente";
      if (config.instagramUrl) instagram.href = config.instagramUrl;
      else instagram.removeAttribute("href");
    }

    const map = document.querySelector("[data-map]");
    if (map && config.googleMapsEmbedUrl) {
      map.classList.add("has-map");
      map.removeAttribute("role");
      map.removeAttribute("aria-label");
      map.innerHTML = `<iframe title="Mapa de Bocata en ${escapeHtml(config.address)}" src="${escapeHtml(config.googleMapsEmbedUrl)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
    }

    const hours = document.querySelector("[data-hours]");
    if (hours && config.openingHours) {
      hours.innerHTML = Object.entries(config.openingHours).map(([day, value]) => `<div><dt>${escapeHtml(day)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("");
    }
  }

  let toastTimer;
  function showToast(message) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
  }

  function whatsappUrl(productName) {
    const number = String(config.whatsapp || "").replace(/\D/g, "");
    if (!number) return "";
    const message = productName ? `Hola, quiero pedir: ${productName}.` : (config.orderMessage || "Hola, quiero hacer un pedido en Bocata.");
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  function openConfiguredUrl(url, missingMessage) {
    if (!url) {
      showToast(missingMessage);
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function bindDelegatedActions() {
    document.addEventListener("click", (event) => {
      const filter = event.target.closest("[data-category]");
      if (filter) {
        document.querySelectorAll("[data-category]").forEach((button) => {
          const active = button === filter;
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-pressed", String(active));
        });
        renderMenu(filter.dataset.category);
        return;
      }

      const orderButton = event.target.closest(".order-trigger");
      if (orderButton) {
        openConfiguredUrl(whatsappUrl(orderButton.dataset.product), "WhatsApp se habilitará cuando se cargue el número real de Bocata.");
        return;
      }

      const external = event.target.closest(".external-trigger");
      if (external) {
        const urls = { instagram: config.instagramUrl, googleMaps: config.googleMapsUrl, googleReviews: config.googleReviewsUrl };
        const labels = { instagram: "Instagram", googleMaps: "Google Maps", googleReviews: "las reseñas de Google" };
        openConfiguredUrl(urls[external.dataset.service], `El enlace de ${labels[external.dataset.service]} se agregará próximamente.`);
        return;
      }

      const galleryButton = event.target.closest("[data-gallery-index]");
      if (galleryButton) openLightbox(Number(galleryButton.dataset.galleryIndex));

      const videoButton = event.target.closest("[data-video-play]");
      if (videoButton) {
        const video = videos.find((item) => item.id === videoButton.dataset.videoPlay);
        const player = videoButton.closest("[data-video-player]");
        if (!video || !player) return;
        player.innerHTML = `<iframe src="${escapeHtml(video.url)}" title="${escapeHtml(video.title)}" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      }
    });
  }

  function setupNavigation() {
    const header = document.querySelector("[data-header]");
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    if (!header || !toggle || !nav) return;

    const closeMenu = () => {
      nav.classList.remove("is-open");
      header.classList.remove("menu-visible");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
      document.body.classList.remove("nav-open");
    };

    toggle.addEventListener("click", () => {
      const opening = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", opening);
      header.classList.toggle("menu-visible", opening);
      toggle.setAttribute("aria-expanded", String(opening));
      toggle.setAttribute("aria-label", opening ? "Cerrar menú" : "Abrir menú");
      document.body.classList.toggle("nav-open", opening);
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth >= 1024) closeMenu(); }, { passive: true });

    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  let revealObserver;
  function setupReveals() {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
      return;
    }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
    observeReveals(document);
  }

  function observeReveals(root) {
    const elements = root.querySelectorAll(".reveal:not(.is-visible)");
    if (!revealObserver) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    elements.forEach((element) => revealObserver.observe(element));
  }

  function openLightbox(index) {
    const dialog = document.querySelector("[data-lightbox]");
    const image = document.querySelector("[data-lightbox-image]");
    const caption = document.querySelector("[data-lightbox-caption]");
    const item = gallery[index];
    if (!dialog || !image || !caption || !item) return;
    image.src = item.src;
    image.alt = item.alt;
    caption.textContent = item.caption;
    if (typeof dialog.showModal === "function") dialog.showModal();
  }

  function setupLightbox() {
    const dialog = document.querySelector("[data-lightbox]");
    const close = document.querySelector("[data-lightbox-close]");
    if (!dialog || !close) return;
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  }

  function setupAccordions() {
    document.querySelectorAll("[data-accordion]").forEach((accordion) => {
      accordion.addEventListener("toggle", () => {
        if (accordion.open) observeReveals(accordion);
      });
    });
  }

  renderFeatured();
  renderFilters();
  renderMenu();
  renderPromos();
  renderVideos();
  renderGallery();
  renderBusinessData();
  bindDelegatedActions();
  setupNavigation();
  setupLightbox();
  setupReveals();
  setupAccordions();
})();
