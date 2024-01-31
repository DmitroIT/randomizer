const form = document.getElementById('form');
const body = document.getElementById('body');

export function setBlur() {
    form.classList.add('blur');
}

export function removeBlur() {
    form.classList.remove('blur');
}