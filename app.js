// === app.js ===
// Lógica de UI e interacción. Lee WORDS desde data.js
const board      = document.getElementById('board');
const shuffleBtn = document.getElementById('shuffleBtn');
const resetBtn   = document.getElementById('resetBtn');
const failedBtn  = document.getElementById('failedBtn');

const scoreCorrectEl = document.getElementById('scoreCorrect');
const scoreWrongEl   = document.getElementById('scoreWrong');

let order = WORDS.map((_, i) => i); // índices de las tarjetas
let failedSet = new Set();          // índices fallados en esta sesión
let correctCount = 0;
let wrongCount   = 0;

function updateScore(){
  scoreCorrectEl.textContent = String(correctCount);
  scoreWrongEl.textContent   = String(wrongCount);
}

function render(indices){
  board.innerHTML = '';
  indices.forEach(idx => {
    const it = WORDS[idx];

    const card  = document.createElement('article');
    card.className = 'flashcard';
    card.dataset.index = idx;

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    // FRONT
    const front = document.createElement('section');
    front.className = 'face front';
    front.innerHTML = `
      <div class="word">${it.palabra}</div>
      <div class="prompt">¿Cuál es la mejor traducción?</div>
    `;

    const choices = document.createElement('div');
    choices.className = 'choices';

    it.opciones.forEach((txt, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = `<strong>${String.fromCharCode(65+i)}.</strong> ${txt}`;
      b.addEventListener('click', () => onAnswer(card, txt, i, it));
      choices.appendChild(b);
    });

    front.appendChild(choices);

    // BACK
    const back = document.createElement('section');
    back.className = 'face back';
    back.innerHTML = `
      <div class="word">${it.palabra}</div>
      <div class="meta">
        <div class="row"><div class="k">Traducción</div><div class="v">${it.traduccion}</div></div>
        <div class="row"><div class="k">Tipo de palabra</div><div class="v">${it.tipo}</div></div>
        <div class="row"><div class="k">Tiempo verbal</div><div class="v">${it.tiempo}</div></div>
      </div>
      <div class="example"><em>Ejemplo:</em> ${it.ejemplo}</div>
    `;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    board.appendChild(card);
  });
}

function isCorrect(choiceText, choiceIndex, item){
  // Permite correcta como índice (0..3) o como texto exacto
  if (typeof item.correcta === 'number') return choiceIndex === item.correcta;
  return String(choiceText).trim().toLowerCase() === String(item.correcta).trim().toLowerCase();
}

function onAnswer(card, choiceText, choiceIndex, item){
  if (card.classList.contains('flipped')) return; // ya contestada
  card.classList.remove('bad', 'good');

  const idx = Number(card.dataset.index);

  if (isCorrect(choiceText, choiceIndex, item)){
    card.classList.add('good', 'flipped');
    failedSet.delete(idx);
    correctCount += 1;           // solo se cuenta la primera vez (luego queda bloqueada)
    updateScore();
    // desactivar botones tras acertar
    card.querySelectorAll('.choices button').forEach(b => b.disabled = true);
  } else {
    card.classList.add('bad');
    failedSet.add(idx);
    wrongCount += 1;             // cada intento fallido suma
    updateScore();
  }
}

function shuffleIndices(arr){
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Controles
shuffleBtn.addEventListener('click', () => {
  order = shuffleIndices(order);
  render(order);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

resetBtn.addEventListener('click', () => {
  order = WORDS.map((_, i) => i);
  failedSet.clear();
  correctCount = 0;
  wrongCount   = 0;
  updateScore();
  render(order);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

failedBtn.addEventListener('click', () => {
  const onlyFailed = [...failedSet];
  render(onlyFailed.length ? onlyFailed : order);
});

// Inicial
updateScore();
render(order);

