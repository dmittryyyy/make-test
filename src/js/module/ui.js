const input = document.querySelector('.interactive-input');
const prompt = document.querySelector('.prompt');

input.querySelector('input').addEventListener('click', () => {
    prompt.classList.toggle('promptShow');
    validate(prompt);
});