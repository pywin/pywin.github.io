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
document.getElementById('copyright-year').textContent=new Date().getFullYear();
