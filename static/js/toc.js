document.addEventListener('DOMContentLoaded', function () {
  const tocLinks = document.querySelectorAll('aside.toc a');
  if (!tocLinks.length) return;

  const headings = Array.from(tocLinks).map(function (link) {
    const id = new URL(link.href).hash.slice(1);
    return document.getElementById(id);
  }).filter(Boolean);

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        tocLinks.forEach(function (link) {
          link.classList.remove('active');
        });
        const id = entry.target.id;
        const active = document.querySelector('aside.toc a[href="#' + id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '0px 0px -80% 0px' });

  headings.forEach(function (h) { observer.observe(h); });
});
