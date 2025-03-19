// Завдання 1
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  nameOutput.textContent = nameInput.value.trim() || 'незнайомець';
});

// Завдання 2
const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const requiredLength = parseInt(validationInput.getAttribute('data-length'));
  const inputValue = validationInput.value.trim();

  if (inputValue.length === requiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});

// Завдання 3
const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  textElement.style.fontSize = `${fontSizeControl.value}px`;
});