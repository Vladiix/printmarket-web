/* Smooth scroll + active nav link highlighting */
(function () {
  const links = Array.from(document.querySelectorAll('a.nav-link[href^="#"]'));
  if (!links.length) return;

  // Smooth scroll on click
  links.forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    });
  });

  // Highlight active section while scrolling
  const sections = links
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const linkById = new Map(
    links.map((a) => [a.getAttribute('href').slice(1), a])
  );

  const setActive = (id) => {
    links.forEach((l) => l.classList.remove('is-active'));
    const active = linkById.get(id);
    if (active) active.classList.add('is-active');
  };

  const io = new IntersectionObserver(
    (entries) => {
      // pick the most visible intersecting section
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible && visible.target && visible.target.id) {
        setActive(visible.target.id);
      }
    },
    { root: null, threshold: [0.2, 0.4, 0.6], rootMargin: "-20% 0px -60% 0px" }
  );

  sections.forEach((s) => io.observe(s));
})();