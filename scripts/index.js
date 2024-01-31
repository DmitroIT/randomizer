import { removeBlur, setBlur } from "./formBlur.js";
import { hiddenSpinner, showSpinner } from "./spinner.js";

const startNumInput = document.getElementById('start-num');
const finishNumInput = document.getElementById('finish-num');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

startNumInput.addEventListener('input', handleInputChange);
finishNumInput.addEventListener('input', handleInputChange);

resetButton.addEventListener('click', resetValues);

let startNum = 0;
let finishNum = 0;

function handleInputChange(e) {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    e.target.value = inputValue;
}

function resetValues() {
    startNumInput.value = '';
    finishNumInput.value = '';
}

startButton.addEventListener('click', randomizer);

function randomizer() {
    if (startNumInput.value !== '' && finishNumInput.value !== '') {
        startNum = Number(startNumInput.value);
        finishNum = Number(finishNumInput.value);

        let rand = Math.floor(startNum + Math.random() * (finishNum + 1 - startNum));

        showSpinner();
        setBlur();

        const timeoutDuration = finishNum - startNum;

        setTimeout(() => {
            alert(`Починаючи з числа ${startNum} і закінчуючи числом ${finishNum}, переможець під номером: \n ${rand}`)
        }, 1000 + timeoutDuration * 50);

        setTimeout(() => {
            hiddenSpinner();
            removeBlur();
        }, 1000 + timeoutDuration * 50);
    } else {
        alert('Будь ласка, введіть числа для початку та завершення діапазону.');
    }
}









