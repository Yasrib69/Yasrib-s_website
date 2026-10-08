const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeMenu = () => {
  navLinks?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation menu');
};
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', `${open ? 'Close' : 'Open'} navigation menu`);
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav')) closeMenu();
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
}

if ('IntersectionObserver' in window) {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-motion');
    const reveals = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          reveals.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(item => reveals.observe(item));
  }
  const sections = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks?.querySelectorAll('a').forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sections.observe(section));
}

const filters = document.querySelector('.project-filters');
const projects = [...document.querySelectorAll('.project-card')];
if (filters && projects.length) {
  projects.forEach(card => {
    const type = card.querySelector('.project-type')?.textContent || '';
    card.dataset.category = /Research/.test(type) ? 'research' : /Hack|Full-Stack|Web/.test(type) ? 'web' : 'software';
  });
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    projects.forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) {
        card.classList.add('visible');
        count++;
      }
    });
    document.getElementById('project-count').textContent = `${count} projects shown`;
  });
}

// Direct links to a study or project also reveal its full description.
function revealLinkedWork() {
  const id = window.location.hash.slice(1);
  const target = id ? document.getElementById(id) : null;
  if (!target?.matches('details')) return;
  if (target.classList.contains('project-card') && target.hidden) {
    filters?.querySelector('[data-filter="all"]')?.click();
  }
  target.open = true;
  target.scrollIntoView({ block: 'start' });
}
window.addEventListener('hashchange', revealLinkedWork);
revealLinkedWork();

// Reading controls affect only the visible studies or projects in their section.
document.querySelectorAll('.reading-controls').forEach(controls => {
  controls.hidden = false;
  controls.addEventListener('click', event => {
    const button = event.target.closest('[data-disclosure-action]');
    if (!button) return;
    const open = button.dataset.disclosureAction === 'expand';
    controls.closest('section').querySelectorAll('.research-card, .project-card').forEach(item => {
      if (!item.hidden) item.open = open;
    });
  });
});
