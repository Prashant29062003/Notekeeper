const elements = document.querySelectorAll(".state-layer-parent");

elements.forEach(element => {
  if (element.querySelector('.state-layer')) {
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.style.isolation = 'isolate';
    element.style.webkitUserSelect = 'none';
    element.style.userSelect = 'none';
  }
});
