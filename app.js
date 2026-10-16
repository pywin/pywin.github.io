// Edit publication metadata here. Only published work is listed.
const publications = [
  {
    id: 'gaussianmatch', short: 'GaussianMatch', year: 2026, venue: 'CVPR 2026', rank: 'CCF-A', first: true, cofirst: true, categories: ['first', 'multimodal'],
    title: 'GaussianMatch: Semi-Supervised Regression with Pseudo-Label Filtering via Multi-View Gaussian Consistency',
    authors: 'Yin Wang, Hao Lu, Zixuan Wang, Zhen Qin, Li Kuang, Mengchu Zhou, Shuiguang Deng',
    summary: { zh: '以多视图预测的高斯一致性筛选伪标签，提升有限标注下半监督回归的可靠性。', en: 'Filtering pseudo-labels through multi-view Gaussian consistency for reliable regression with limited labels.' },
    paper: 'https://openaccess.thecvf.com/content/CVPR2026/html/Wang_GaussianMatch_Semi-Supervised_Regression_with_Pseudo-Label_Filtering_via_Multi-View_Gaussian_Consistency_CVPR_2026_paper.html',
    pdf: 'https://openaccess.thecvf.com/content/CVPR2026/papers/Wang_GaussianMatch_Semi-Supervised_Regression_with_Pseudo-Label_Filtering_via_Multi-View_Gaussian_Consistency_CVPR_2026_paper.pdf',
    image: 'assets/gaussianmatch.png', code: 'https://github.com/pywin/GaussianMatch',
    bibtex: '@inproceedings{wang2026gaussianmatch,\n  title={GaussianMatch: Semi-Supervised Regression with Pseudo-Label Filtering via Multi-View Gaussian Consistency},\n  author={Wang, Yin and Lu, Hao and Wang, Zixuan and Qin, Zhen and Kuang, Li and Zhou, Mengchu and Deng, Shuiguang},\n  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},\n  year={2026}\n}'
  },
  {
    id: 'semi', short: 'SeMi', year: 2025, venue: 'ACM MM 2025', rank: 'CCF-A', first: true, categories: ['first'],
    title: 'SeMi: When Imbalanced Semi-Supervised Learning Meets Mining Hard Examples',
    authors: 'Yin Wang, Zixuan Wang, Hao Lu, Zhen Qin, Hailiang Zhao, Guanjie Cheng, Xin Du, Ge Su, Li Kuang, Mengchu Zhou, Shuiguang Deng',
    summary: { zh: '利用困难样本挖掘与类别平衡记忆库，提高不均衡半监督学习中未标注数据的利用率。', en: 'Hard-example mining and a class-balanced memory bank improve the use of unlabeled data in imbalanced learning.' },
    paper: 'https://doi.org/10.1145/3746027.3755450', pdf: 'https://arxiv.org/pdf/2501.06004', code: 'https://github.com/pywin/SeMi', image: 'assets/semi.png',
    bibtex: '@inproceedings{wang2025semi,\n  title={SeMi: When Imbalanced Semi-Supervised Learning Meets Mining Hard Examples},\n  author={Wang, Yin and Wang, Zixuan and Lu, Hao and Qin, Zhen and Zhao, Hailiang and Cheng, Guanjie and Du, Xin and Su, Ge and Kuang, Li and Zhou, Mengchu and Deng, Shuiguang},\n  booktitle={Proceedings of the 33rd ACM International Conference on Multimedia},\n  pages={499--507},\n  year={2025},\n  doi={10.1145/3746027.3755450}\n}'
  },
  {
    id: 'hiba', short: 'rPPG-HiBa', year: 2024, venue: 'ACM MM 2024', rank: 'CCF-A', first: true, categories: ['first', 'health'],
    title: 'rPPG-HiBa: Hierarchical Balanced Framework for Remote Physiological Measurement',
    authors: 'Yin Wang, Hao Lu, Ying-Cong Chen, Li Kuang, Mengchu Zhou, Shuiguang Deng',
    summary: { zh: '针对生理标签的长尾分布与跨域差异，构建用于非接触式生理测量的分层平衡框架。', en: 'A hierarchical balancing framework addresses long-tailed labels and domain differences in remote physiological measurement.' },
    paper: 'https://openreview.net/forum?id=kckxgbOogx', code: 'https://github.com/pywin/HiBa', theme: 'health',
    bibtex: '@inproceedings{wang2024rppghiba,\n  title={rPPG-HiBa: Hierarchical Balanced Framework for Remote Physiological Measurement},\n  author={Wang, Yin and Lu, Hao and Chen, Ying-Cong and Kuang, Li and Zhou, Mengchu and Deng, Shuiguang},\n  booktitle={Proceedings of the 32nd ACM International Conference on Multimedia},\n  pages={2982--2991},\n  year={2024}\n}'
  },
  {
    id: 'period-llm', short: 'Period-LLM', year: 2025, venue: 'CVPR 2025', rank: 'CCF-A', categories: ['multimodal'],
    title: 'Period-LLM: Extending the Periodic Capability of Multimodal Large Language Model',
    authors: 'Yuting Zhang, Hao Lu, Qingyong Hu, Yin Wang, Kaishen Yuan, Xin Liu, Kaishun Wu',
    summary: { zh: '拓展多模态大语言模型对周期性现象的理解能力，研究跨模态周期任务。', en: 'Extending multimodal large language models to understand periodic phenomena across modalities.' },
    paper: 'https://openaccess.thecvf.com/content/CVPR2025/html/Zhang_Period-LLM_Extending_the_Periodic_Capability_of_Multimodal_Large_Language_Model_CVPR_2025_paper.html',
    pdf: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Zhang_Period-LLM_Extending_the_Periodic_Capability_of_Multimodal_Large_Language_Model_CVPR_2025_paper.pdf', theme: 'mllm',
    bibtex: '@inproceedings{zhang2025periodllm,\n  title={Period-LLM: Extending the Periodic Capability of Multimodal Large Language Model},\n  author={Zhang, Yuting and Lu, Hao and Hu, Qingyong and Wang, Yin and Yuan, Kaishen and Liu, Xin and Wu, Kaishun},\n  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},\n  pages={29237--29247},\n  year={2025}\n}'
  },
  {
    id: 'ccim', short: 'CCIM-Net', year: 2024, venue: 'Cell Reports Medicine · 2024', categories: ['health', 'multimodal'],
    title: 'A multiomics analysis-assisted deep learning model identifies a macrophage-oriented module as a potential therapeutic target in colorectal cancer',
    authors: 'Xuanwen Bao, Qiong Li, Dong Chen, Xiaomeng Dai, Chuan Liu, Weihong Tian, Hangyu Zhang, Yuzhi Jin, Yin Wang, et al.',
    summary: { zh: '结合多组学分析与深度学习，研究结直肠癌免疫微环境及化疗反应预测。', en: 'Combining multiomics and deep learning to study the colorectal cancer immune microenvironment and chemotherapy response.' },
    paper: 'https://doi.org/10.1016/j.xcrm.2024.101399', fulltext: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10897549/', theme: 'medical',
    bibtex: '@article{bao2024multiomics,\n  title={A multiomics analysis-assisted deep learning model identifies a macrophage-oriented module as a potential therapeutic target in colorectal cancer},\n  author={Bao, Xuanwen and Li, Qiong and Chen, Dong and Dai, Xiaomeng and Liu, Chuan and Tian, Weihong and Zhang, Hangyu and Jin, Yuzhi and Wang, Yin and Cheng, Jinlin and Lai, Chunyu and Ye, Chanqi and Xin, Shan and Li, Xin and Su, Ge and Ding, Yongfeng and Xiong, Yangyang and Xie, Jindong and Tano, Vincent and Wang, Yanfang and Fu, Wenguang and Deng, Shuiguang and Fang, Weijia and Sheng, Jianpeng and Ruan, Jian and Zhao, Peng},\n  journal={Cell Reports Medicine},\n  volume={5},\n  number={2},\n  pages={101399},\n  year={2024},\n  doi={10.1016/j.xcrm.2024.101399}\n}'
  },
  {
    id: 'speed', short: 'SPEED', year: 2023, venue: 'iScience · 2023', categories: ['health'],
    title: 'Development of a whole-slide-level segmentation-based dMMR/pMMR deep learning detector for colorectal cancer',
    authors: 'Zhou Tong, Yin Wang, Xuanwen Bao, et al.',
    summary: { zh: '基于全切片病理图像分割，研究结直肠癌错配修复状态的自动识别。', en: 'Whole-slide pathology segmentation for automatic identification of mismatch repair status in colorectal cancer.' },
    paper: 'https://doi.org/10.1016/j.isci.2023.108468', fulltext: 'https://pubmed.ncbi.nlm.nih.gov/38077136/', theme: 'medical',
    bibtex: '@article{tong2023speed,\n  title={Development of a whole-slide-level segmentation-based dMMR/pMMR deep learning detector for colorectal cancer},\n  author={Tong, Zhou and Wang, Yin and Bao, Xuanwen and Deng, Yu and Lin, Bo and Su, Ge and Ye, Kejun and Dai, Xiaomeng and Zhang, Hangyu and Liu, Lulu and Wang, Wenyu and Zheng, Yi and Fang, Weijia and Zhao, Peng and Ding, Peirong and Deng, Shuiguang and Xu, Xiangming},\n  journal={iScience},\n  volume={26},\n  pages={108468},\n  year={2023},\n  doi={10.1016/j.isci.2023.108468}\n}'
  }
];

let language = 'zh';
let activeFilter = 'all';
try { language = localStorage.getItem('yin-wang-language') === 'en' ? 'en' : 'zh'; } catch (_) { /* Storage is optional. */ }
const list = document.getElementById('publication-list');
const dialog = document.getElementById('citation-dialog');
const citationContent = document.getElementById('citation-content');
const copyStatus = document.getElementById('copy-status');
const languageButton = document.getElementById('language-toggle');
const escapeHTML = (text) => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const externalLink = (url, text) => `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${text} <span aria-hidden="true">↗</span></a>`;

function renderPublications() {
  list.innerHTML = publications.map(p => {
    const authors = escapeHTML(p.authors).replace(/\bYin Wang\b/g, '<strong>Yin Wang</strong>');
    const image = p.image ? `<img src="${p.image}" alt="${escapeHTML(p.short)} — ${language === 'zh' ? '论文方法示意图' : 'figure from the paper'}" loading="lazy" width="600" height="400">` : `<div class="paper-typography ${p.theme || ''}"><span>${p.year} / RESEARCH</span><b>${p.short}</b><span>${p.categories.includes('health') ? 'AI FOR HEALTHCARE' : 'MULTIMODAL LEARNING'}</span></div>`;
    return `<article class="publication-item" id="pub-${p.id}" data-categories="${p.categories.join(' ')}"><a class="paper-image" href="${p.paper}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(p.title)}">${image}</a><div class="paper-info"><div class="paper-meta"><span class="venue-badge">${p.venue}</span>${p.rank ? `<span class="rank-tag">${p.rank}</span>` : ''}${p.first ? `<span class="author-tag">${p.cofirst ? (language === 'zh' ? '共同第一作者' : 'Co-first author') : (language === 'zh' ? '第一作者' : 'First author')}</span>` : ''}</div><h3>${externalLink(p.paper, escapeHTML(p.title))}</h3><p class="paper-authors">${authors}</p><p class="paper-summary">${p.summary[language]}</p><div class="paper-links">${externalLink(p.paper, 'Paper')}${p.pdf ? externalLink(p.pdf, p.id === 'semi' ? 'arXiv PDF' : 'PDF') : ''}${p.fulltext ? externalLink(p.fulltext, p.id === 'speed' ? 'PubMed' : 'Full text') : ''}${p.code ? externalLink(p.code, 'Code') : ''}<button type="button" data-cite="${p.id}" aria-label="BibTeX: ${escapeHTML(p.short)}">BibTeX <span aria-hidden="true">“</span></button></div></div></article>`;
  }).join('');
  applyFilter();
}

function applyFilter() {
  let count = 0;
  list.querySelectorAll('.publication-item').forEach(item => {
    const visible = activeFilter === 'all' || item.dataset.categories.split(' ').includes(activeFilter);
    item.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('publication-count').textContent = language === 'zh' ? `${count} 篇论文` : `${count} papers`;
}

function applyLanguage() {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = language === 'zh' ? '王胤 · Yin Wang | 浙江师范大学' : 'Yin Wang · 王胤 | Zhejiang Normal University';
  document.querySelectorAll('[data-zh][data-en]').forEach(el => { el.textContent = el.dataset[language]; });
  document.getElementById('intro-title').innerHTML = language === 'zh' ? '王胤 <span>Yin Wang</span><span class="name-period">.</span>' : 'Yin Wang <span>王胤</span><span class="name-period">.</span>';
  languageButton.innerHTML = (language === 'zh' ? 'EN' : '中') + ' <span aria-hidden="true">↗</span>';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  document.querySelector('nav').setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
  document.querySelector('.filter-group').setAttribute('aria-label', language === 'zh' ? '论文筛选' : 'Filter publications');
  renderPublications();
}

languageButton.addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  try { localStorage.setItem('yin-wang-language', language); } catch (_) { /* Keep working without storage. */ }
  applyLanguage();
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b => {
    const selected = b === button;
    b.classList.toggle('active', selected);
    b.setAttribute('aria-pressed', String(selected));
  });
  applyFilter();
}));
list.addEventListener('click', event => {
  const button = event.target.closest('[data-cite]');
  if (!button) return;
  const paper = publications.find(p => p.id === button.dataset.cite);
  citationContent.textContent = paper.bibtex;
  copyStatus.textContent = '';
  dialog.showModal();
});
document.getElementById('close-citation').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
document.getElementById('copy-citation').addEventListener('click', async () => {
  copyStatus.textContent = language === 'zh' ? '正在复制…' : 'Copying…';
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await Promise.race([
        navigator.clipboard.writeText(citationContent.textContent),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Clipboard timed out')), 1200))
      ]);
    } else {
      const range = document.createRange(); range.selectNodeContents(citationContent);
      const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      if (!document.execCommand('copy')) throw new Error('Clipboard unavailable');
      selection.removeAllRanges();
    }
    copyStatus.textContent = language === 'zh' ? '已复制到剪贴板' : 'Copied to clipboard';
  } catch (_) {
    const range = document.createRange(); range.selectNodeContents(citationContent);
    const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
    copyStatus.textContent = language === 'zh' ? '请按 ⌘C / Ctrl+C 复制' : 'Press ⌘C / Ctrl+C to copy';
  }
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.desktop-nav a').forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id));
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
document.getElementById('copyright-year').textContent = new Date().getFullYear();
applyLanguage();
