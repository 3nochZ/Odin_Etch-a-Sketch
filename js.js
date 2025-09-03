const body = document.querySelector('body');
const inputDiv = document.createElement('div');
body.appendChild(inputDiv);

const text = document.createElement('h1');
text.textContent = "Enter the number of grids you want";
const input = document.createElement('input');
const defaultBtn = document.createElement('button');
const confirmBtn = document.createElement('button');
defaultBtn.textContent = "Default";
confirmBtn.textContent = "Confirm";
inputDiv.append(text, input, confirmBtn, defaultBtn);