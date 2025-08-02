const envelope = document.getElementById('envelope');
const flap = document.getElementById('flap');
const paper = document.getElementById('paper');
const buttons = document.getElementById('buttons');

function showPaper() {
  flap.classList.add('flap-open');
  setTimeout(() => {
    paper.classList.add('show');
    envelope.style.opacity = '1'; /* Keep envelope visible for alignment */
    buttons.style.opacity = '0';
    buttons.style.pointerEvents = 'none';
  }, 600);
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
