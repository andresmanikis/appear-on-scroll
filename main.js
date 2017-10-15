function createDivs(howMany) {
  const body = document.querySelector('body');
  for (let i = 0; i < howMany; i++) {
    const div = document.createElement('div');
    div.innerHTML = i + 1;
    div.className = 'invisible';
    body.appendChild(div);
  }
}

function isVisible(element) {
  const topLimit = element.offsetTop;
  const bottomLimit = topLimit + element.offsetHeight;
  const viewportHeight = window.innerHeight;
  const viewportTop = window.scrollY;
  const viewportBottom = viewportTop + viewportHeight;
  
  if (viewportTop < topLimit && viewportBottom > bottomLimit) {
    return true;
  } else {
    return false;
  }
}

function detectVisibility() {
  const divs = document.querySelectorAll('div');
  divs.forEach(function(div) {
    div.className = isVisible(div) ? 'visible' : 'invisible';
  });
}

createDivs(10);
detectVisibility();
window.addEventListener('scroll', detectVisibility);
window.addEventListener('resize', detectVisibility);