const envelope = document.getElementById('envelope');
const paper = document.getElementById('paper');
const buttons = document.getElementById('buttons');

function showPaper() {
  paper.classList.add('show');

  // Wait for animation to finish
  setTimeout(() => {
    envelope.style.opacity = '0';
    buttons.style.opacity = '0';
    buttons.style.pointerEvents = 'none';
  }, 1000); // matches transition duration
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
