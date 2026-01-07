function getDataTranslate(el) {
  if (!el) return null;
  return (el.dataset && el.dataset.translate) || el.getAttribute('data-translate');
}
window.getDataTranslate = getDataTranslate;
