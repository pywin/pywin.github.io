const citations = JSON.parse(document.getElementById('citation-data').textContent);
const citationDialog = document.getElementById('citation-dialog');
const citationContent = document.getElementById('citation-content');
const copyStatus = document.getElementById('copy-status');
const figureDialog = document.getElementById('figure-dialog');
document.addEventListener('click', event => {
  const cite = event.target.closest('[data-cite]');
  if (cite) { citationContent.textContent = citations[cite.dataset.cite]; copyStatus.textContent = ''; citationDialog.showModal(); }
  const figure = event.target.closest('[data-image]');
  if (figure) {
    document.getElementById('large-figure').src = figure.dataset.image;
    document.getElementById('large-figure').alt = 'Original figure from ' + figure.dataset.caption;
    document.getElementById('figure-caption').textContent = figure.dataset.caption;
    figureDialog.showModal();
  }
  const close = event.target.closest('[data-close-dialog]');
  if (close) document.getElementById(close.dataset.closeDialog).close();
});
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
}));
document.getElementById('copy-citation').addEventListener('click', async () => {
  copyStatus.textContent = 'Copying…';
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await Promise.race([navigator.clipboard.writeText(citationContent.textContent),new Promise((_,reject)=>setTimeout(()=>reject(new Error('Clipboard timed out')),1200))]);
    } else {
      const range=document.createRange();range.selectNodeContents(citationContent);
      const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);
      if(!document.execCommand('copy'))throw new Error('Clipboard unavailable');
      selection.removeAllRanges();
    }
    copyStatus.textContent='Copied to clipboard';
  } catch (_) {
    const range=document.createRange();range.selectNodeContents(citationContent);
    const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);
    copyStatus.textContent='Press ⌘C / Ctrl+C to copy';
  }
});
if ('IntersectionObserver' in window) {
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    document.querySelectorAll('nav a').forEach(link=>link.classList.toggle('active',link.hash==='#'+entry.target.id));
  }),{rootMargin:'-15% 0px -60% 0px',threshold:0});
  document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));
}
const publicationList = document.getElementById('publication-list');
const publicationPages = document.querySelector('.publication-pagination');
if (publicationList && publicationPages) {
  const papers = Array.from(publicationList.querySelectorAll('.publication'));
  const pageSize = Number(publicationList.dataset.pageSize) || 3;
  const pageCount = Math.ceil(papers.length / pageSize);
  const controls = publicationPages.querySelector('.pagination-buttons');
  const status = document.getElementById('publication-page-status');
  let currentPage = 1;
  function pageButton(label, page, ariaLabel) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.dataset.page = page;
    button.setAttribute('aria-label', ariaLabel);
    button.setAttribute('aria-controls', 'publication-list');
    controls.append(button);
    return button;
  }
  const previous = pageButton('←', 'previous', 'Previous publication page');
  const numbered = Array.from({length: pageCount}, (_, i) => pageButton(String(i + 1), i + 1, 'Publication page ' + (i + 1)));
  const next = pageButton('→', 'next', 'Next publication page');
  function showPage(page, scroll = false) {
    currentPage = Math.max(1, Math.min(page, pageCount));
    const start = (currentPage - 1) * pageSize;
    papers.forEach((paper, i) => { paper.hidden = i < start || i >= start + pageSize; });
    numbered.forEach((button, i) => {
      if (i + 1 === currentPage) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    previous.disabled = currentPage === 1;
    next.disabled = currentPage === pageCount;
    status.textContent = 'Showing ' + (start + 1) + '–' + Math.min(start + pageSize, papers.length) + ' of ' + papers.length + ' papers';
    if (scroll) document.getElementById('publications').scrollIntoView({block: 'start'});
  }
  function revealLinkedPaper(scroll = false) {
    const index = papers.findIndex(paper => '#' + paper.id === window.location.hash);
    if (index < 0) return false;
    showPage(Math.floor(index / pageSize) + 1);
    if (scroll) papers[index].scrollIntoView({block: 'start'});
    return true;
  }
  controls.addEventListener('click', event => {
    const button = event.target.closest('button[data-page]');
    if (!button || button.disabled) return;
    const page = button.dataset.page === 'previous' ? currentPage - 1 : button.dataset.page === 'next' ? currentPage + 1 : Number(button.dataset.page);
    showPage(page, true);
    if (papers.some(paper => '#' + paper.id === window.location.hash)) history.replaceState(null, '', '#publications');
  });
  window.addEventListener('hashchange', () => revealLinkedPaper(true));
  if (papers.length && pageCount > 1) {
    publicationPages.hidden = false;
    if (!revealLinkedPaper(true)) showPage(1);
  }
}
document.getElementById('copyright-year').textContent=new Date().getFullYear();
