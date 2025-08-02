const envelope = document.getElementById('envelope');
const paper = document.getElementById('paper');

function showPaper() {
  envelope.style.display = 'none';
  paper.classList.add('show');
}

function hidePaper() {
  paper.classList.remove('show');
  envelope.style.display = 'flex';
}

function returnToEnvelope() {
  hidePaper();
}
