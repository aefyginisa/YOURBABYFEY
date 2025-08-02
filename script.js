const envelope = document.getElementById('envelope');
const paper = document.getElementById('paper');
const buttons = document.getElementById('buttons');

function showPaper() {
  paper.classList.add('show');

  // Fade out envelope and buttons after animation
  setTimeout(() => {
    envelope.style.opacity = '0';
    buttons.style.opacity = '0';
    buttons.style.pointerEvents = 'none';
  }, 1000);
}

function hidePaper() {
  paper.classList.remove('show');
  envelope.style.opacity = '1';
  buttons.style.opacity = '1';
  buttons.style.pointerEvents = 'auto';
}

function returnToEnvelope() {
  hidePaper();
}
