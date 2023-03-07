const preloadRemover = () => {
  document.querySelector('body').classList.remove('preload');

  window.removeEventListener('load', preloadRemover);
};

window.addEventListener('load', preloadRemover);
