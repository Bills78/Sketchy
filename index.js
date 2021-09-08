const body = document.querySelector('body');
const container = document.createElement('div');
const btn = document.createElement('button');
const title = document.querySelector('.title');

container.classList.add('container');
body.append(container);

btn.innerText = 'Clear-Le-Sketch'
title.append(btn);

function findSides(sqrs) {
    x = 400 / sqrs;
    return x;
}

function createSqr(x) {
    const square = document.createElement('div');
    square.className ='sqr';
    square.setAttribute('style', `width: ${findSides(x)}px; height: ${findSides(x)}px`)
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = 'gray';
    });
    container.append(square);
};


function makeSqrs(x) {
    if (x > 64 || x < 4) {
        alert('Sorry, you must pick a number between 4 and 64...')
    } else {
        y = x * x;
        for(let i = 0; i < y; i++) {
            createSqr(x)
        };
    };
};

btn.addEventListener('click', () => {
    // empty sketch old sqrs
    const allSqrs = document.querySelectorAll('.sqr');
    allSqrs.remove();
    // prompt user for number of sqrs per side, then input into makeSqrs()
    const x = prompt('Pick the number of squares per side', placeholder=('must be between 4 - 64'));
    makeSqrs(x);
});

makeSqrs(16);