const jasio = document.querySelector('.jasio-foto');
const mind = document.querySelector('.mind');

const cytaty = [
    'Co tam u was majstry?',
    'Taki Metron... skurwysyny...',
    'Ogień Renia, ogień!',
    'Tylko Kombi nic nie liczy się!',
    'Gdyby ktoś kiedykolwiek mnie szukał... Niech idzie tam, gdzie gra Elvis Presley...',
    'jerōnie!',
    'co wam powiem to wam powiem',
];

const shakePhoto = () => {
  jasio.classList.add('shake-animation');
  setTimeout(generate, 1000);
};

const generate = () => {
  generateMind();
  jasio.classList.remove('shake-animation');
};

const generateMind = () => {
  randomMind = cytaty[Math.floor(Math.random() * cytaty.length)];
  mind.innerHTML = `"${randomMind}"`;
};

jasio.addEventListener('click', shakePhoto);
