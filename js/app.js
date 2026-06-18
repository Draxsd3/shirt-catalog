/* =========================================================
   Bender Story — app.js
   Renderiza catálogo, busca, navegação e links de contato.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Helpers ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const norm = (s) =>
    (s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  // Onde mandar quem não tem álbum próprio (fallback) -> WhatsApp da loja.
  const fallbackUrl = () => CONFIG.whatsappUrl;

  /* ---------- Static contact links ---------- */
  function wireContacts() {
    ["#hdr-wa", "#hero-wa", "#foot-wa", "#wa-float"].forEach((id) => {
      const el = $(id);
      if (el) el.href = CONFIG.whatsappUrl;
    });
    ["#hdr-ig", "#hero-ig", "#foot-ig"].forEach((id) => {
      const el = $(id);
      if (el) el.href = CONFIG.instagramUrl;
    });
    $("#year").textContent = new Date().getFullYear();
    $("#designer-name").textContent = CONFIG.designer;
  }

  /* ---------- Subnav chips ---------- */
  function buildSubnav() {
    const ul = $("#subnav-list");
    const frag = document.createDocumentFragment();
    LEAGUES.forEach((lg) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "chip";
      a.href = `#sec-${lg.key}`;
      a.dataset.target = `sec-${lg.key}`;
      a.textContent = lg.short;
      li.appendChild(a);
      frag.appendChild(li);
    });
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "chip";
    a.href = "#produtos";
    a.dataset.target = "produtos";
    a.textContent = "Produtos";
    li.appendChild(a);
    frag.appendChild(li);
    ul.appendChild(frag);
  }

  /* ---------- League sections + crests ---------- */
  function buildCatalog() {
    const main = $("#catalogo");
    const frag = document.createDocumentFragment();

    LEAGUES.forEach((lg) => {
      const section = document.createElement("section");
      section.className = "league";
      section.id = `sec-${lg.key}`;
      section.dataset.league = lg.key;

      // Banner
      const banner = document.createElement("div");
      banner.className = "league-banner reveal";
      const bimg = document.createElement("img");
      bimg.src = lg.banner;
      bimg.alt = `${lg.title} — Bender Story`;
      bimg.loading = "lazy";
      banner.appendChild(bimg);

      // Cyan title bar
      const bar = document.createElement("div");
      bar.className = "league-bar reveal";
      const h2 = document.createElement("h2");
      h2.textContent = lg.title;
      bar.appendChild(h2);

      // Grid
      const grid = document.createElement("div");
      grid.className = "crest-grid";

      lg.teams.forEach((t) => {
        const card = document.createElement("a");
        card.className = "crest";
        card.href = t.url || fallbackUrl();
        card.target = "_blank";
        card.rel = "noopener";
        card.dataset.name = norm(t.name);
        card.setAttribute("aria-label", `Ver fotos das camisas do ${t.name}`);

        const badge = document.createElement("span");
        badge.className = "crest-badge";
        const img = document.createElement("img");
        img.src = t.crest;
        img.alt = t.name;
        img.loading = "lazy";
        img.decoding = "async";
        badge.appendChild(img);

        const name = document.createElement("span");
        name.className = "crest-name";
        name.textContent = t.name;

        card.append(badge, name);
        grid.appendChild(card);
      });

      section.append(banner, bar, grid);
      frag.appendChild(section);
    });

    main.appendChild(frag);
  }

  /* ---------- Products ---------- */
  function buildProducts() {
    const grid = $("#product-grid");
    const frag = document.createDocumentFragment();
    PRODUCTS.forEach((p) => {
      const card = document.createElement("a");
      card.className = "product reveal";
      card.href = p.url || fallbackUrl();
      card.target = "_blank";
      card.rel = "noopener";
      card.setAttribute("aria-label", `Ver fotos de ${p.name}`);
      const ph = document.createElement("div");
      ph.className = "ph";
      const img = document.createElement("img");
      img.src = p.img;
      img.alt = p.name;
      img.loading = "lazy";
      ph.appendChild(img);
      const label = document.createElement("div");
      label.className = "label";
      label.textContent = p.name;
      card.append(ph, label);
      frag.appendChild(card);
    });
    grid.appendChild(frag);
  }

  /* ---------- Search ---------- */
  function setupSearch() {
    const input = $("#search");
    const countEl = $("#search-count");
    const noRes = $("#no-results");
    const nrTerm = $("#nr-term");
    const total = LEAGUES.reduce((n, l) => n + l.teams.length, 0);
    const sections = $$(".league");

    const setCount = (shown, term) => {
      countEl.innerHTML = term
        ? `<b>${shown}</b> resultado${shown === 1 ? "" : "s"} para "${term}"`
        : `<b>${total}</b> times e seleções disponíveis`;
    };
    setCount(total, "");

    const runFilter = () => {
      const q = norm(input.value);
      let shown = 0;
      sections.forEach((sec) => {
        let secShown = 0;
        $$(".crest", sec).forEach((c) => {
          const match = !q || c.dataset.name.includes(q);
          c.classList.toggle("is-hidden", !match);
          if (match) secShown++;
        });
        sec.classList.toggle("is-hidden", secShown === 0);
        shown += secShown;
      });
      const term = input.value.trim();
      setCount(shown, term);
      const empty = shown === 0 && term !== "";
      noRes.classList.toggle("show", empty);
      if (empty) nrTerm.textContent = term;
    };
    input.addEventListener("input", runFilter);
  }

  /* ---------- Scrollspy (active chip) ---------- */
  function setupScrollSpy() {
    const chips = $$(".chip");
    const bar = $("#subnav-list");
    const byId = new Map(chips.map((c) => [c.dataset.target, c]));
    const targets = $$("section.league, #produtos");
    let active = null;

    // Center a chip inside the horizontal bar WITHOUT scrolling the document.
    const centerChip = (chip) => {
      const target = chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2;
      bar.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const chip = byId.get(e.target.id);
            if (chip && chip !== active) {
              if (active) active.classList.remove("active");
              chip.classList.add("active");
              active = chip;
              centerChip(chip);
            }
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    targets.forEach((t) => io.observe(t));
  }

  /* ---------- Reveal on scroll ---------- */
  function setupReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    wireContacts();
    buildSubnav();
    buildCatalog();
    buildProducts();
    setupSearch();
    setupReveal();
    setupScrollSpy();
  });
})();
