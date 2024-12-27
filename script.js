
document.querySelectorAll('.phonogram').forEach(button => {
  let timeoutId;

  button.addEventListener('mousedown', () => {
    // Play sound once
    const sound = button.getAttribute('data-sound');
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();

    // Flip card and show examples
    button.classList.add('flipped');
    const examples = button.getAttribute('data-example');
    button.innerHTML = `<div class="examples">${examples}</div>`;
  });

  button.addEventListener('mouseup', () => {
    // Flip back after holding or clicking
    timeoutId = setTimeout(() => {
      button.classList.remove('flipped');
      button.innerHTML = button.getAttribute('data-sound').toUpperCase();
    }, 1000);
  });

  button.addEventListener('mouseleave', () => {
    // Ensure card flips back if the mouse leaves
    clearTimeout(timeoutId);
    button.classList.remove('flipped');
    button.innerHTML = button.getAttribute('data-sound').toUpperCase();
  });
});
