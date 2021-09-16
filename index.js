const body = document.querySelector('body');
const container = document.createElement('div');
const btn = document.createElement('button');
const title = document.querySelector('.title');
const colorBtn = document.createElement('button')
const btns = document.createElement('div')

container.classList.add('container');
body.append(container);

btn.innerText = 'Clear-Le-Sketch';


colorBtn.innerText = 'Color-Le-Sketch';
colorBtn.classList.add('color');

btns.append(colorBtn);
btns.append(btn);
title.append(btns);

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
};

function findSides(sqrs) {
    x = 400 / sqrs;
    return x;
};

function makeSqrs(x, color) {
    if (x > 64 || x < 4) {
        alert('Sorry, you must pick a number between 4 and 64...')
    } else {
        y = x * x;
        for(let i = 0; i < y; i++) {
            const square = document.createElement('div');
            square.setAttribute('style', `width: ${findSides(x)}px; height: ${findSides(x)}px`);
            if (color !== 'black'){
                square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = `${makeRandColor()}`;
                });
            } else {
                square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = 'black';
                });
            }
            container.append(square);
        };
    };
};

btn.addEventListener('click', () => {
    container.innerHTML = '';
    makeSqrs(prompt('How many Squares per side?', placeholder="16"), 'black');
});

colorBtn.addEventListener('click', () => {
    container.innerHTML = '';
    makeSqrs(prompt('How many Squares per side?', placeholder="16"), makeRandColor());
});

makeSqrs(16, 'black');