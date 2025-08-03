const flap = document.getElementById('flap');
const paper = document.getElementById('paper');
const buttons = document.getElementById('buttons');

function showPaper() {
  // Open flap first
  flap.classList.add('flap-open');

  // Wait until flap finishes (0.8s) then slide letter
  setTimeout(() => {
    paper.classList.add('show');
    buttons.style.opacity = '0';
    buttons.style.pointerEvents = 'none';
  }, 800);
}

function hidePaper() {
  paper.classList.remove('show');
  flap.classList.remove('flap-open');
  buttons.style.opacity = '1';
  buttons.style.pointerEvents = 'auto';
}

function returnToEnvelope() {
  hidePaper();
}
