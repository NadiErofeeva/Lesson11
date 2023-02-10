'use strict';

document.getElementById('btn').addEventListener('click', function () {
    const inputText = document.querySelector('input[type=text]').value
    if (!inputText) {
        return
    }
    document.getElementById('square').style.backgroundColor = inputText;
    console.log(inputText);

})

document.getElementById('e_btn').style.display = 'none';

const circle = document.querySelector('#circle');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

const logger = function (event) {
    rangeSpan.textContent = event.target.value;
    circle.style.width = rangeSpan.textContent + '%';
    circle.style.height = rangeSpan.textContent + '%';
    console.log(circle.style.width)
}
range.addEventListener('input', logger);











