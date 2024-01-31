let isDragging = false;
let offsetX, offsetY;
let movableDiv;

document.querySelectorAll('.movableDiv').forEach(function(div) {
  div.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - parseInt(window.getComputedStyle(div).left);
    offsetY = e.clientY - parseInt(window.getComputedStyle(div).top);
    movableDiv = div;
    movableDiv.classList.add('grabbing');
  });
});

document.addEventListener('mousemove', function (e) {
  if (isDragging) {
    movableDiv.style.left = e.clientX - offsetX + 'px';
    movableDiv.style.top = e.clientY - offsetY + 'px';
  }

});

document.addEventListener('mouseup', function () {
    if (isDragging) {
        movableDiv.classList.remove('grabbing');
      }
  isDragging = false;
 
});