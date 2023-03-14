vartooltipTrigger = document.getElementById('my-location');
var tooltipText = tooltipTrigger.getAttribute('data-tooltip');

tooltipTrigger.addEventListener('mousemove', function(e) {
  var tooltip = this.querySelector('.tooltip::after');
  tooltip.style.top = e.pageY + 'px';
  tooltip.style.left = e.pageX + 'px';
});

tooltipTrigger.addEventListener('mouseenter', function() {
  var tooltip = this.querySelector('.tooltip::after');
  tooltip.textContent = tooltipText;
});

tooltipTrigger.addEventListener('mouseleave', function() {
  var tooltip = this.querySelector('.tooltip::after');
  tooltip.textContent = '';
});
