(function () {
  const $ = (id) => document.getElementById(id);
  const data = PORTFOLIO;

  /* ------------------------------------------------------------------
     HELPERS
     ------------------------------------------------------------------ */

  // Escape text before it goes into innerHTML (titles contain "&", quotes, etc.)
  const esc = (s) =>
    String(s == null ? '' : s).replace(/[&<>"']/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Normalise a title so links.js keys match even if punctuation/case differ
  const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');

  // links.js (optional) can override or add links by exact title
  const OVERRIDES = (typeof LINK_OVERRIDES !== 'undefined' && LINK_OVERRIDES) || {};
  const overrideMap = {};
  Object.keys(OVERRIDES).forEach((k) => { overrideMap[norm(k)] = OVERRIDES[k]; });

  // Only allow http(s), mailto and relative paths (blocks javascript: etc.)
  const safeUrl = (u) => {
    u = String(u || '').trim();
    if (!u) return '';
    if (/^(https?:\/\/|mailto:)/i.test(u)) return u;
    if (/^[a-z][a-z0-9+.\-]*:/i.test(u)) return '';
    return u; // relative file, e.g. assets/pdfs/paper.pdf
  };

  // links.js wins over the "link" field inside data.js
  const resolveLink = (item) => safeUrl(overrideMap[norm(item.title)] || item.link);

  // Title as a clickable link when a link exists, plain text otherwise
  const linked = (item, text) => {
    const label = esc(text != null ? text : item.title);
    const url = resolveLink(item);
    return url
      ? `<a class="title-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`
      : label;
  };

  const badge = (s) => (s ? `<span class="status-badge">${esc(s)}</span>` : '');

  /* ------------------------------------------------------------------
     AUTO-CALCULATED NUMBERS
     ------------------------------------------------------------------ */
  const PENDING = ['Under review', 'Under revision', 'Submitted', 'Communicated'];
  const published = data.publications.filter((p) => !PENDING.includes(p.status));
  const floorPlus = (n) => (n >= 20 ? Math.floor(n / 10) * 10 + '+' : String(n));
  const autoValues = {
    publications: floorPlus(published.length),
    books: String(data.publications.filter((p) => p.type === 'Book').length),
    patents: String(data.patents.length),
    projects: floorPlus(data.projects.length),
    tech: String((data.technologyTransfer || []).filter((t) => !t.status).length)
  };
  const statValue = (m) => (m.auto ? (autoValues[m.auto] != null ? autoValues[m.auto] : '—') : m.value);

  /* ------------------------------------------------------------------
     HEADER / HERO / SIDEBAR
     ------------------------------------------------------------------ */
  $('scientistName').textContent = data.scientist.name;
  $('designation').textContent = data.scientist.designation + ' · ' + data.scientist.role.split('(')[0].trim();
  $('affiliation').textContent = data.scientist.location;
  $('heroLead').textContent = data.scientist.lead;
  $('contactSummary').textContent = data.contactSummary;
  $('year').textContent = new Date().getFullYear();

  $('heroMetrics').innerHTML = data.metrics
    .map((m) => `<div class="metric"><strong>${esc(statValue(m))}</strong><span>${esc(m.label)}</span></div>`).join('');
  $('sideStats').innerHTML = data.sidebarStats
    .map((s) => `<div class="side-stat"><strong>${esc(statValue(s))}</strong><span>${esc(s.label)}</span></div>`).join('');

  /* ------------------------------------------------------------------
     RESEARCH
     ------------------------------------------------------------------ */
  $('researchGrid').innerHTML = data.scientist.specialization.map((item, i) => `
    <article class="research-card">
      <span class="research-number">0${i + 1}</span>
      <h4>${esc(item.title)}</h4>
      <p>${esc(item.text)}</p>
    </article>`).join('');

  /* ------------------------------------------------------------------
     GENERIC "FILTER + SEARCH + SHOW MORE" LIST  (used by projects & publications)
     ------------------------------------------------------------------ */
  function makeBrowser(o) {
    let active = 'All';
    let query = '';
    let shown = o.pageSize;
    const cats = ['All'].concat(o.categories);

    const filtered = () => {
      const q = query.trim().toLowerCase();
      return o.items.filter((i) =>
        (active === 'All' || i[o.filterKey] === active) &&
        (!q || o.searchText(i).toLowerCase().indexOf(q) !== -1));
    };

    const drawFilters = () => {
      o.filterEl.innerHTML = cats.map((c) => {
        const n = c === 'All' ? o.items.length : o.items.filter((i) => i[o.filterKey] === c).length;
        return `<button class="filter-btn ${c === active ? 'active' : ''}" data-filter="${esc(c)}">${esc(c)} <small>${n}</small></button>`;
      }).join('');
    };

    const draw = () => {
      const items = filtered();
      o.listEl.innerHTML = items.slice(0, shown).map(o.render).join('') ||
        '<p class="empty-state">No matching entries.</p>';
      o.countEl.textContent = `Showing ${Math.min(shown, items.length)} of ${items.length}`;
      o.moreEl.hidden = shown >= items.length;
    };

    o.filterEl.addEventListener('click', (e) => {
      const b = e.target.closest('button[data-filter]');
      if (!b) return;
      active = b.dataset.filter;
      shown = o.pageSize;
      drawFilters();
      draw();
    });
    o.searchEl.addEventListener('input', () => { query = o.searchEl.value; shown = o.pageSize; draw(); });
    o.moreEl.addEventListener('click', () => { shown += o.pageSize; draw(); });

    drawFilters();
    draw();
  }

  /* ------------------------------------------------------------------
     PROJECTS  (Annexure II)
     ------------------------------------------------------------------ */
  const projectOrder = ['International', 'Game Changing', 'R&D', 'Sponsored', 'Developmental'];
  makeBrowser({
    items: data.projects,
    filterKey: 'category',
    categories: projectOrder.filter((c) => data.projects.some((p) => p.category === c))
      .concat([...new Set(data.projects.map((p) => p.category))].filter((c) => projectOrder.indexOf(c) === -1)),
    filterEl: $('projectFilters'),
    searchEl: $('projectSearch'),
    listEl: $('projectGrid'),
    countEl: $('projectCount'),
    moreEl: $('projectMore'),
    pageSize: 12,
    searchText: (p) => [p.title, p.detail, p.year, p.category, p.status].join(' '),
    render: (p) => `
      <article class="project-card ${resolveLink(p) ? 'has-link' : ''}">
        <div class="project-meta"><span class="project-tag">${esc(p.category)}</span><span>${esc(p.year || '—')}</span>${badge(p.status)}</div>
        <h4>${linked(p)}</h4>
        ${p.detail ? `<p>${esc(p.detail)}</p>` : ''}
      </article>`
  });

  /* ------------------------------------------------------------------
     CONTRIBUTIONS  (Annexure III)
     ------------------------------------------------------------------ */
  if ($('contributionIntro')) {
    $('contributionIntro').innerHTML = `<blockquote>${esc(data.contributionIntro || '')}<cite>— ${esc(data.scientist.name)}</cite></blockquote>`;
  }

  const detailsToHtml = (details) => {
    let html = '';
    let open = false;
    details.forEach((d) => {
      if (d.t === 'li') {
        if (!open) { html += '<ul>'; open = true; }
        html += `<li>${esc(d.text)}</li>`;
      } else {
        if (open) { html += '</ul>'; open = false; }
        html += `<p>${esc(d.text)}</p>`;
      }
    });
    if (open) html += '</ul>';
    return html;
  };

  $('highlightGrid').innerHTML = data.highlights.map((h, i) => {
    // don't repeat the summary paragraph at the top of the expanded text
    const body = (h.details || []).filter((d, idx) => !(idx === 0 && d.t === 'p' && d.text === h.summary));
    const hasBody = body.length > 0;
    return `
      <article class="highlight-card ${resolveLink(h) ? 'has-link' : ''}">
        <span class="research-number">${String(i + 1).padStart(2, '0')}</span>
        <h4>${linked(h)}</h4>
        <p class="hl-summary">${esc(h.summary || '')}</p>
        ${hasBody ? `
          <button class="hl-toggle" type="button" aria-expanded="false" aria-controls="hl-body-${i}">Read details <span aria-hidden="true">▾</span></button>
          <div class="hl-body" id="hl-body-${i}" hidden>${detailsToHtml(body)}</div>` : ''}
      </article>`;
  }).join('');

  $('highlightGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('.hl-toggle');
    if (!btn) return;
    const body = $(btn.getAttribute('aria-controls'));
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    btn.firstChild.textContent = open ? 'Read details ' : 'Hide details ';
    btn.lastElementChild.textContent = open ? '▾' : '▴';
    body.hidden = open;
  });

  $('sectorGrid').innerHTML = (data.sectorContributions || []).map((s) => `
    <details class="sector-card">
      <summary><span>${esc(s.title)}</span><small>${s.items.length}</small></summary>
      <ul>${s.items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    </details>`).join('');

  if ($('contributionClosing')) {
    $('contributionClosing').textContent = data.contributionClosing || '';
  }

  /* ------------------------------------------------------------------
     IMPACT
     ------------------------------------------------------------------ */
  $('impactGrid').innerHTML = data.impact.map((i) => `
    <article class="impact-card ${resolveLink(i) ? 'has-link' : ''}"><strong>${esc(i.value)}</strong><h4>${linked(i)}</h4><p>${esc(i.text)}</p></article>`).join('');

  $('trainingStats').innerHTML = (data.trainingStats || [])
    .map((t) => `<div class="training-item"><strong>${esc(t.value)}</strong><span>${esc(t.label)}</span></div>`).join('');

  /* ------------------------------------------------------------------
     PUBLICATIONS  (Annexure I)
     ------------------------------------------------------------------ */
  const pubOrder = ['Book', 'Book Chapter', 'International Journal', 'National Journal', 'Conference',
    'Technical Document', 'Brochure', 'Documentary'];
  makeBrowser({
    items: data.publications,
    filterKey: 'type',
    categories: pubOrder.filter((c) => data.publications.some((p) => p.type === c))
      .concat([...new Set(data.publications.map((p) => p.type))].filter((c) => pubOrder.indexOf(c) === -1)),
    filterEl: $('pubFilters'),
    searchEl: $('pubSearch'),
    listEl: $('publicationList'),
    countEl: $('pubResultCount'),
    moreEl: $('pubMore'),
    pageSize: 12,
    searchText: (p) => [p.title, p.venue, p.year, p.type, p.status].join(' '),
    render: (p) => `
      <article class="pub-card ${resolveLink(p) ? 'has-link' : ''}">
        <span class="pub-year">${esc(p.year || '—')} · ${esc(p.type)}${badge(p.status)}</span>
        <h4>${linked(p)}</h4>
        ${p.venue ? `<p>${esc(p.venue)}</p>` : ''}
      </article>`
  });

  $('pubCount').textContent = autoValues.publications;
  $('bookCount').textContent = autoValues.books;

  /* ------------------------------------------------------------------
     AWARDS / PATENTS / TECHNOLOGY TRANSFER
     ------------------------------------------------------------------ */
  $('awardList').innerHTML = data.awards.map((a) =>
    `<div class="award-item"><span>${esc(a.year)}</span><strong>${linked(a)}</strong><div>${esc(a.detail)}</div></div>`).join('');

  $('patentCard').innerHTML = `
    <div class="patent-box">
      <p class="section-kicker">PATENTS</p>
      <h4>Patent record</h4>
      <ul>${data.patents.map((p) => `
        <li>${linked(p)}${p.year ? ` <span class="muted">(${esc(p.year)})</span>` : ''}${badge(p.status)}
          ${p.ref ? `<div class="muted">${esc(p.ref)}</div>` : ''}</li>`).join('')}</ul>
    </div>
    <div class="patent-box">
      <p class="section-kicker">TECHNOLOGY TRANSFER</p>
      <h4>Technologies transferred to industry</h4>
      <ul>${(data.technologyTransfer || []).map((t) => `
        <li>${linked(t)}${t.year ? ` <span class="muted">(${esc(t.year)})</span>` : ''}${badge(t.status)}
          ${t.partner ? `<div class="muted">${esc(t.partner)}</div>` : ''}</li>`).join('')}</ul>
    </div>`;

  /* ------------------------------------------------------------------
     EDUCATION & CONTACT
     ------------------------------------------------------------------ */
  $('timeline').innerHTML = data.education.map((e) =>
    `<div class="timeline-item"><span class="timeline-year">${esc(e.year)}</span><h4>${linked(e)}</h4><p>${esc(e.detail)}</p></div>`).join('');

  $('contactCard').innerHTML = [
    ['Email', `<a href="mailto:${esc(data.scientist.email)}">${esc(data.scientist.email)}</a>`],
    ['Alternate email', `<a href="mailto:${esc(data.scientist.emailAlt)}">${esc(data.scientist.emailAlt)}</a>`],
    ['Office', esc(data.scientist.phone)],
    ['Mobile', esc(data.scientist.mobile)],
    ['Institution', esc(data.scientist.role)],
    ['Location', esc(data.scientist.location)]
  ].map(([label, value]) => `<div class="contact-line"><small>${label}</small>${value}</div>`).join('');

  /* ------------------------------------------------------------------
     SLIDESHOW  (unchanged: add images only in data.js)
     ------------------------------------------------------------------ */
  // =========================
  // THREE-IMAGE RESEARCH CAROUSEL
  // =========================

  const slides = data.slideshowImages || [];

  const slider = $('slider');
  const track = $('sliderTrack');
  const label = $('slideLabel');
  const counter = $('slideCounter');
  const progress = $('slideProgress');

  let index = 0;
  let timer = null;

  const interval = 3000;

  // Create the three visible slides
  function renderCarousel() {

    if (!slides.length) return;

    track.innerHTML = '';

    const total = slides.length;

    const previousIndex = (index - 1 + total) % total;
    const currentIndex = index;
    const nextIndex = (index + 1) % total;

    const visibleSlides = [
      { index: previousIndex, className: 'carousel-slide prev-slide' },
      { index: currentIndex, className: 'carousel-slide current-slide' },
      { index: nextIndex, className: 'carousel-slide next-slide' }
    ];

    visibleSlides.forEach((item) => {

      const slide = slides[item.index];

      const frame = document.createElement('div');
      frame.className = item.className;

      const img = document.createElement('img');

      img.src = slide.src;
      img.alt = slide.label || 'Research portfolio image';

      frame.appendChild(img);
      track.appendChild(frame);

    });

    label.textContent = slides[currentIndex].label || 'Research showcase';

    counter.textContent =
      `${String(currentIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

    restartProgress();
  }

  // Animate progress bar
  function restartProgress() {

    progress.style.transition = 'none';
    progress.style.width = '0%';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progress.style.transition = `width ${interval}ms linear`;
        progress.style.width = '100%';
      });
    });

  }

  // Change slide
  function showSlide(nextIdx) {

    if (!slides.length) return;

    index = (nextIdx + slides.length) % slides.length;

    renderCarousel();

  }

  // Restart automatic slideshow
  function restartTimer() {

    clearInterval(timer);

    timer = setInterval(() => {
      showSlide(index + 1);
    }, interval);

  }

  // Previous button
  $('prevSlide').addEventListener('click', () => {
    showSlide(index - 1);
    restartTimer();
  });

  // Next button
  $('nextSlide').addEventListener('click', () => {
    showSlide(index + 1);
    restartTimer();
  });

  // Pause while mouse is over carousel
  slider.addEventListener('mouseenter', () => {
    clearInterval(timer);
  });

  // Resume when mouse leaves
  slider.addEventListener('mouseleave', () => {
    restartTimer();
  });

  // Initial render
  renderCarousel();
  restartTimer();
})();
