const spinnerLoader = document.getElementById('spinner');

export function showSpinner() {
    spinnerLoader.classList.remove('hidden')
}

export function hiddenSpinner() {
    spinnerLoader.classList.add('hidden')
}

