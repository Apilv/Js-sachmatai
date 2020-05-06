"use strict";

function renderChessboard(size) {
    let HTML = '';
    const DOMchessboard = document.querySelector('.chessboard');
    if (!isFinite(size)){
        return console.error('ERROR: reikalingas normalus skaicius.');
    }
    if (size <= 0){
        return console.error('ERROR: reikalingas teigiamas skaicius.');
    }
    if (size % 1 !== 0){
        return console.error('ERROR: reikalingas sveikas skaicius (be kablelio).');
    }
    // eiluciu HTML
    for (let r = 0; r < size; r++){
        let cellsHTML = '';

        //langeliu HTML
        for (let c = 0; c < size; c++){
            let color = '';
            if ((r + c) % 2 === 0){
                color = 'black';
            } else {
                color = 'white';
            }
            cellsHTML += `<div class="cell ${color}" style="width: ${100 / size}%;"></div>`;
        }

        HTML += `<div class="row" style="height: ${100 / size}%;">
                    ${cellsHTML}
                </div>`;
    }

    DOMchessboard.innerHTML = HTML;

    return;
}





renderChessboard(8);