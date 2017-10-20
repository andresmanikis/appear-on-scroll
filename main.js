function createDivs(howMany, where) {
  for (let i = 0; i < howMany; i++) {
    const div = document.createElement('div');
    div.innerHTML = i + 1;
    div.className = 'invisible';
    where.appendChild(div);
  }
}

function isVisible(element, viewport) {
  const topLimit = element.offsetTop;
  const bottomLimit = topLimit + element.offsetHeight;
  const viewportHeight = container.offsetHeight;
  const viewportTop = viewport.scrollTop + container.offsetTop;
  const viewportBottom = viewportTop + viewportHeight;
  console.log(topLimit, viewportTop);
  
  if (viewportTop < topLimit && viewportBottom > bottomLimit) {
    return true;
  } else {
    return false;
  }
}

function detectVisibility() {
  const divs = document.querySelectorAll('#container div');
  divs.forEach(function(div) {
    div.className = isVisible(div, container) ? 'visible' : 'invisible';
  });
}

createDivs(10, document.querySelector('#container'));
detectVisibility();
document.querySelector('#container').addEventListener('scroll', detectVisibility);
window.addEventListener('resize', detectVisibility);