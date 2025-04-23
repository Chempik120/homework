const gallery = document.querySelector('.gallery');

window.addEventListener('keydown', (event) => {
  const scrollAmount = 300; 
  if (event.key === 'ArrowLeft') {
    gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (event.key === 'ArrowRight') {
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
});

const controls = document.getElementById('controls');
const boxesContainer = document.getElementById('boxes');
const input = controls.querySelector('input');
const renderButton = controls.querySelector('[data-action="render"]');
const destroyButton = controls.querySelector('[data-action="destroy"]');

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    box.classList.add('box');
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

renderButton.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Будь ласка, введіть число від 1 до 100');
  }
});

destroyButton.addEventListener('click', destroyBoxes);