(function () {
  const $ = (id) => document.getElementById(id);
  const data = PORTFOLIO;

  $('scientistName').textContent = data.scientist.name;
  $('designation').textContent = data.scientist.designation + " · " + data.scientist.role.split('(')[0].trim();
  $('affiliation').textContent = data.scientist.location;
  $('heroLead').textContent = data.scientist.lead;
  $('contactSummary').textContent = data.contactSummary;
  $('year').textContent = new Date().getFullYear();

  $('heroMetrics').innerHTML = data.metrics.map(m => `<div class="metric"><strong>${m.value}</strong><span>${m.label}</span></div>`).join('');
  $('sideStats').innerHTML = data.sidebarStats.map(s => `<div class="side-stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join('');

  $('researchGrid').innerHTML = data.scientist.specialization.map((item, i) => `
    <article class="research-card">
      <span class="research-number">0${i + 1}</span>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </article>`).join('');

  const projectCategories = ['All', ...new Set(data.projects.map(p => p.category))];
  let activeCategory = 'All';
  const renderFilters = () => {
    $('projectFilters').innerHTML = projectCategories.map(c => `<button class="filter-btn ${c === activeCategory ? 'active' : ''}" data-filter="${c}">${c}</button>`).join('');
    $('projectFilters').querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
      activeCategory = btn.dataset.filter;
      renderFilters();
      renderProjects();
    }));
  };
  const renderProjects = () => {
    const items = activeCategory === 'All' ? data.projects : data.projects.filter(p => p.category === activeCategory);
    $('projectGrid').innerHTML = items.map(p => `
      <article class="project-card">
        <div class="project-meta"><span class="project-tag">${p.category}</span><span>${p.year}</span></div>
        <h4>${p.title}</h4>
        <p>${p.detail}</p>
      </article>`).join('');
  };
  renderFilters(); renderProjects();

  $('impactGrid').innerHTML = data.impact.map(i => `
    <article class="impact-card"><strong>${i.value}</strong><h4>${i.title}</h4><p>${i.text}</p></article>`).join('');

  $('publicationList').innerHTML = data.publications.map(p => `
    <article class="pub-card"><span class="pub-year">${p.year} · ${p.type}</span><h4>${p.title}</h4><p>${p.venue}</p></article>`).join('');
  $('pubCount').textContent = '200+';
  $('bookCount').textContent = '20';

  $('awardList').innerHTML = data.awards.map(a => `<div class="award-item"><span>${a.year}</span><strong>${a.title}</strong><div>${a.detail}</div></div>`).join('');
  $('patentCard').innerHTML = `
    <div class="patent-box">
      <p class="section-kicker">PATENTS</p>
      <h4>Selected patent record</h4>
      <ul>${data.patents.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>`;

  $('timeline').innerHTML = data.education.map(e => `<div class="timeline-item"><span class="timeline-year">${e.year}</span><h4>${e.title}</h4><p>${e.detail}</p></div>`).join('');

  $('contactCard').innerHTML = [
    ['Email', `<a href="mailto:${data.scientist.email}">${data.scientist.email}</a>`],
    ['Alternate email', `<a href="mailto:${data.scientist.emailAlt}">${data.scientist.emailAlt}</a>`],
    ['Office', data.scientist.phone],
    ['Mobile', data.scientist.mobile],
    ['Institution', data.scientist.role],
    ['Location', data.scientist.location]
  ].map(([label, value]) => `<div class="contact-line"><small>${label}</small>${value}</div>`).join('');

  // Slideshow: add images only in data.js; no other code changes are required.
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
    {
      index: previousIndex,
      className: 'carousel-slide prev-slide'
    },
    {
      index: currentIndex,
      className: 'carousel-slide current-slide'
    },
    {
      index: nextIndex,
      className: 'carousel-slide next-slide'
    }
  ];

  visibleSlides.forEach(item => {

    const slide = slides[item.index];

    const frame = document.createElement('div');
    frame.className = item.className;

    const img = document.createElement('img');

    img.src = slide.src;
    img.alt = slide.label || 'Research portfolio image';

    frame.appendChild(img);
    track.appendChild(frame);

  });

  label.textContent =
    slides[currentIndex].label || 'Research showcase';

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

      progress.style.transition =
        `width ${interval}ms linear`;

      progress.style.width = '100%';

    });

  });

}


// Change slide
function showSlide(nextIndex) {

  if (!slides.length) return;

  index = (nextIndex + slides.length) % slides.length;

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
