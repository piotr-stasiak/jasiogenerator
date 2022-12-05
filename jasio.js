const jasio = document.querySelector('.jasio-foto');
const mind = document.querySelector('.mind');

const cytaty = [
    'Co tam u was majstry?',
    'Taki Metron... skurwysyny...',
    'Taka Elana... wyprzedane wszystko za bezcen...',
    'A taka Czesanka była...',
    'Taki Polchem... to 500 ludzi pracowało...',
    'Kiedyś przez Dworzec Północny węgiel wozili',
    'Młodzi to nie mają tej ikry co kiedyś',
    'Ta muzyka co teraz jest to pożalsięboże',
    'Ogień Renia, ogień!',
    'eMZeta to jest motor!',
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
