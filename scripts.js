function updateBar(percent, fillEl, colorScheme) {
  fillEl.style.width = percent + '%';

  if (colorScheme === 'health') {
    if (percent > 70) fillEl.style.backgroundColor = '#4caf50'; // green
    else if (percent > 35) fillEl.style.backgroundColor = '#ffb300'; // amber
    else fillEl.style.backgroundColor = '#d32f2f'; // red
  } else if (colorScheme === 'status') {
    if (percent > 70) fillEl.style.backgroundColor = '#42a5f5'; // blue
    else if (percent > 35) fillEl.style.backgroundColor = '#29b6f6'; // light blue
    else fillEl.style.backgroundColor = '#81d4fa'; // very light blue
  }
}

// Updated: Loop over .character-block, not .character-name
document.querySelectorAll('.character-block').forEach(block => {
  const hp = parseInt(block.dataset.hp, 10);
  const healthFill = block.querySelector('.health-fill');
  if (!isNaN(hp) && healthFill) {
    updateBar(hp, healthFill, 'health');
  }
});