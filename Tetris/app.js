document.addEventListener('DOMContentLoaded',() => {
//assigne 1 élément du DOM à 1 cste via sa classe html. (class: .grid comme en css)
    const grid = document.querySelector('.grid');  
//sélectionne ttes les div à l'intérieur de .grid et les places ds 1 array
    let squares = Array.from(document.querySelectorAll('.grid div'));
//affectation via l'id (unique, #)
    const scoreDisplay = document.querySelector('#score');
    const startButton = document.querySelectorAll('#start-button');

    const width = 10
    console.log(width)

//tetrominoes
const lTetromino = [
    [1, width + 1, width*2 +1, 2],
    [width, width + 1, width +2, 2*width +2],
    [1, width+1, 2*width+1, width*2],
    [width, 2*width, 2*width +1, 2*width +2]
];

const zTetromino = [
    [0, width, width +1, 2*width + 1],
    [width +1,width +2, 2*width, 2*width +1],
    [0, width, width +1, 2*width + 1],
    [width +1,width +2, 2*width, 2*width +1],
];

const oTetromino = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
];

const tTetromino = [
    [1, width, width+1, width+2],
    [1, width +1, width +2 , 2*width + 1],
    [width, width +1, width +2, 2*width + 1],
    [1, width, width+1,  2*width + 1]
];

const iTetromino =[
    [1, width +1, 2*width +1, 3*width+1],
    [width, width +1, width+2, width+3],
    [1, width +1, 2*width +1, 3*width+1],
    [width, width +1, width+2, width+3],
]

const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

let currentPosition = 4;
let current = theTetrominos[0][0];
console.log(theTetrominos);



//draw the first rotation of the first tetromino

function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
    })
}

draw()


})