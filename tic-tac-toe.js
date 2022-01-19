let allDivs = document.querySelectorAll('.col-4')
// console.log('playing blocks: ', allDivs)

let findPlayer = document.querySelector('#printPlayer')
// console.log('print player', findPlayer)

const player1 = 'X'
const player2 = 'O'
let nextPlayer = player1;

let isGameOver = false;

for (let div of allDivs) {

    let nextBlock = div;
    // console.log(nextBlock)

    div.addEventListener('click', () => {
        if (isGameOver === true) {
            console.log('Game is over you cannot play')
            return
        }
        if (!div.firstChild) {

            div.append(nextPlayer)
            // console.log('Current Player', nextPlayer)

            findPlayer.innerText = 'Current Player: ' + nextPlayer

            if (nextPlayer === player1) {
                nextPlayer = player2

            } else {
                nextPlayer = player1
            }
            // console.log('Next Player', nextPlayer)
            findPlayer.append('  Next Player: ', nextPlayer)
        }

        checkWinner();
    });
}

function getPlayerAtBlock(blockNumber) {

    let queryString = '#block' + blockNumber
    // console.log(queryString)
    let block = document.querySelector(`${queryString}`)
    // console.log('Selected block 5', block)
    // console.log('Player at block 1 is: ', block.innerText)
    return block.innerText //returns the player at clicked block
}

function getPlayerAtRow(rowNumber) {
    // console.log('row number: ', rowNumber)
    let blockOne = (rowNumber - 1) * 3 + 1; // *3 porjonto mane age koyta block skip korse 3 disi karon 3 ta block prottek row te, +1 mane skip er porer block ta blockOne
    // console.log('starting block', blockOne)
    //Amake starting block er player ber korte hobe
    let pB1 = getPlayerAtBlock(blockOne)
    // console.log('player is: ', pB1)
    //Tarpor amake starting block er porer block er player ber korte hobe
    let blockTwo = blockOne + 1;
    let pB2 = getPlayerAtBlock(blockTwo);
    // console.log('player at block2 is: ', pB2)
    //Tarpor 3rd block er player ber korbo
    let blockThree = blockTwo + 1;
    let pB3 = getPlayerAtBlock(blockThree);
    // console.log('player at block3 is: ', pB3)
    //1,2,3 er block player equal naki. Jodi equal hoy, taholei ami player ta return korbo
    if (pB1 === pB2 && pB2 === pB3) {
        if (pB1 === '') {
            return null
        }
        return pB1;
    } else {
        return null;
    }

}

function getPlayerAtColumn(columnNumber) {
    let blockOne = columnNumber;
    let pB1 = getPlayerAtBlock(blockOne)

    let blockTwo = blockOne + 3;
    let pB2 = getPlayerAtBlock(blockTwo)

    let blockThree = blockTwo + 3;
    let pB3 = getPlayerAtBlock(blockThree)

    if (pB1 === pB2 && pB1 === pB3) {
        if (pB1 === '') {
            return null
        }
        return pB1;
    } else {
        return null;
    }
}

function getPlayerAtRightDiagonal(rightBoxNumber) {
    let blockOne = rightBoxNumber;
    let pB1 = getPlayerAtBlock(blockOne)

    let blockTwo = blockOne + 2;
    let pB2 = getPlayerAtBlock(blockTwo)

    let blockThree = blockTwo + 2;
    let pB3 = getPlayerAtBlock(blockThree)

    if (pB1 === pB2 && pB2 === pB3) {
        if (pB1 === '') {
            return null
        }
        return pB1
    } else {
        return null
    }
}

function getPlayerAtLeftDiagonal(LeftBoxNumber) {
    let blockOne = LeftBoxNumber;
    let pB1 = getPlayerAtBlock(blockOne)

    let blockTwo = blockOne + 4;
    let pB2 = getPlayerAtBlock(blockTwo)

    let blockThree = blockTwo + 4;
    let pB3 = getPlayerAtBlock(blockThree)

    if (pB1 === pB2 && pB2 === pB3) {
        if (pB1 === '') {
            return null
        }
        return pB1
    } else {
        return null
    }
}

function checkWinner() {
    //check row for winner
    let playerAtRow1 = getPlayerAtRow(1);
    // console.log('player at row 1 ', playerAtRow1)
    let playerAtRow2 = getPlayerAtRow(2);
    // console.log('player at row 2 ', playerAtRow2)
    let playerAtRow3 = getPlayerAtRow(3);
    // console.log('player at row 3 ', playerAtRow3)

    if (playerAtRow1 != null) {
        console.log('winner is: ', playerAtRow1)
        isGameOver = true;
    } else if (playerAtRow2 != null) {
        console.log('winner is: ', playerAtRow2)
        isGameOver = true;
    } else if (playerAtRow3 != null) {
        console.log('winner is: ', playerAtRow3)
        isGameOver = true;
    }
    //check column for winner
    let playerAtColumn1 = getPlayerAtColumn(1)
    let playerAtColumn2 = getPlayerAtColumn(2)
    let playerAtColumn3 = getPlayerAtColumn(3)

    if (playerAtColumn1 != null) {
        console.log('winner is: ', playerAtColumn1)
        isGameOver = true;
    } else if (playerAtColumn2 != null) {
        console.log('winner is: ', playerAtColumn2)
        isGameOver = true;
    } else if (playerAtColumn3 != null) {
        console.log('winner is: ', playerAtColumn3)
        isGameOver = true;
    }
    //check right diagonal for winner
    let playerAtRightDiagonal = getPlayerAtRightDiagonal(3)
    
    if (playerAtRightDiagonal != null) {
        console.log('winner is: ', playerAtRightDiagonal)
        isGameOver = true;
    }
    //check left diagonal for winner
    let playerAtLeftDiagonal = getPlayerAtLeftDiagonal(1)

    if (playerAtLeftDiagonal != null) {
        console.log('winner is: ', playerAtLeftDiagonal)
        isGameOver = true;
    }


}