const body = document.querySelector('body');
const inputDiv = document.createElement('div');
inputDiv.className = "inputDiv";
body.appendChild(inputDiv);

const text = document.createElement('h1');
text.textContent = "Enter the number of grids you want";
const input = document.createElement('input');
const defaultBtn = document.createElement('button');
const confirmBtn = document.createElement('button');
defaultBtn.textContent = "Default";
confirmBtn.textContent = "Confirm";
inputDiv.append(text, input, confirmBtn, defaultBtn);

function init () {
    text.textContent = "Enter the number of grids you want";
    defaultBtn.textContent = "Default";
    confirmBtn.textContent = "Confirm";
    // console.log(document);
}

function restorePage () {
    clearPage();

    if (!body.contains(inputDiv)) {
        body.append(inputDiv);
    }
    init();
}

function clearPage () {
    // body.textContent = "";
    const mainDiv = document.querySelector('.mainDiv');
    if (mainDiv) {
        mainDiv.remove();
    }
}

function removeInputPage() {
    const inputDiv = document.querySelector('.inputDiv');
    if (inputDiv && body.contains(inputDiv)) {
        inputDiv.remove();
    }

}

function divCreator (numOfDivs) {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'mainDiv';

    const etchSketchContainer = document.createElement('div');
    etchSketchContainer.className = "etchSketchContainer";

    const returnBtn = document.createElement('button'); 
    returnBtn.addEventListener('click', restorePage);
    returnBtn.textContent = "Return"
    mainDiv.appendChild(returnBtn);

    for (let i = 0; i < numOfDivs; i++) {
        let innerDiv = document.createElement('div');
        innerDiv.className = 'inner';
        // innerDiv.textContent = "1";
        for (let j = 0; j < numOfDivs; j++) {
            const div = document.createElement('div');
            div.className = 'nested'
            innerDiv.appendChild(div);
        }
        etchSketchContainer.appendChild(innerDiv);
    }
    mainDiv.appendChild(etchSketchContainer);
    // console.log(mainDiv);
    body.append(mainDiv);

    const divs = document.querySelectorAll('.nested')
    divs.forEach(div => {
        div.addEventListener('mouseenter', (event) => {
            if (!event.target.style.backgroundColor) {
                event.target.style.backgroundColor = randomColor();
            }
            // console.log(event.target.style.backgroundColor);
            // event.target.style.backgroundColor = randomColor();
            // div.classList = "color-set";
            // console.log(div.classList);
            // if (!event.target.style.backgroundColor) {
            //     // bgColor =  randomColor();
            //     console.log('yes');
            //     // return;
            // }
            // event.target.style.backgroundColor = randomColor();
        });
    });
};


defaultBtn.addEventListener('click', () => {
    clearPage();
    removeInputPage();
    divCreator(12); //12x12
});

//confirm button

confirmBtn.addEventListener('click', () => {
    const value = input.value;
    if (value > 100) {
        throw new Error("Value should be under 100");
    }
    input.value = "";

    clearPage();
    removeInputPage();
    divCreator(value);
})

//Extras

function randomColor() {
    return (`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
}
