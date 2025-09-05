// const { createElement } = require("react");

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

// function restorePage () {
//     const text = document.createElement('h1');
//     text.textContent = "Enter the number of grids you want";
//     const input = document.createElement('input');
//     const defaultBtn = document.createElement('button');
//     const confirmBtn = document.createElement('button');
//     defaultBtn.textContent = "Default";
//     confirmBtn.textContent = "Confirm";
//     inputDiv.append(text, input, confirmBtn, defaultBtn);
// }

// restorePage();

function clearPage () {
    body.textContent = "";
}

defaultBtn.addEventListener('click', () => {
    clearPage();
    const mainDiv = document.createElement('div');
    mainDiv.className = 'mainDiv';

    for (let i = 0; i < 16; i++) {
        let innerDiv = document.createElement('div');
        innerDiv.className = 'inner';
        // innerDiv.textContent = "1";
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            div.className = 'nested'
            innerDiv.appendChild(div);
        }
        mainDiv.appendChild(innerDiv);
    }
    console.log(mainDiv);
    body.append(mainDiv);

    const divs = document.querySelectorAll('.nested')
    divs.forEach(div => {
        div.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = 'aqua';
        }
    )
    }
        );
    }
);