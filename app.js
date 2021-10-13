const boardHTML = document.querySelector(".board");
const boardJS = [
    [[""],[""],[""]],
    [[""],[""],[""]],
    [[""],[""],[""]],
];
const box0 = document.querySelector("#box-0")
const box1 = document.querySelector("#box-1")
const box2 = document.querySelector("#box-2")
const box3 = document.querySelector("#box-3")
const box4 = document.querySelector("#box-4")
const box5 = document.querySelector("#box-5")
const box6 = document.querySelector("#box-6")
const box7 = document.querySelector("#box-7")
const box8 = document.querySelector("#box-8")
const boxes = [box0,box1,box2,box3,box4,box5,box6,box7,box8];
let turn = "human";
let boxNum;



const gameControl = () => {

    alert("this is added using counselhero account");

    updateJSboard();
    drawOnBoard(boxNum, turn);
    switchPlayer()
    handleTurnCPU();
    drawOnBoard(boxNum, turn);
    switchPlayer()


    

    
}

const handleTurnCPU = () => {
//left here.
}

const eventListener = () => {
    document.querySelector('#box-0').addEventListener("click", () => {
        boxNum = 0;
        document.querySelector('#box-0').style.pointerEvents = "none";
        gameControl()

    })
    document.querySelector('#box-1').addEventListener("click", () => {
        boxNum=1
        console.log(boxNum)
        document.querySelector('#box-1').style.pointerEvents = "none";
        gameControl()


    })
    document.querySelector('#box-2').addEventListener("click", () => {
        boxNum=2
        document.querySelector('#box-2').style.pointerEvents = "none";
        gameControl();



    })
    document.querySelector('#box-3').addEventListener("click", () => {
        boxNum=3
        document.querySelector('#box-3').style.pointerEvents = "none";
        gameControl()




    })
    document.querySelector('#box-4').addEventListener("click", () => {
        boxNum=4
        document.querySelector('#box-4').style.pointerEvents = "none";
        gameControl();


    })
    document.querySelector('#box-5').addEventListener("click", () => {
        boxNum=5;
        document.querySelector('#box-5').style.pointerEvents = "none";
        gameControl()


})
    document.querySelector('#box-6').addEventListener("click", () => {
        boxNum=6
        document.querySelector('#box-6').style.pointerEvents = "none";
        gameControl()



    })
    document.querySelector('#box-7').addEventListener("click", () => {
        boxNum=7
        document.querySelector('#box-7').style.pointerEvents = "none";
        gameControl()




    })
    document.querySelector('#box-8').addEventListener("click", () => {
        boxNum=8
        document.querySelector('#box-8').style.pointerEvents = "none";
        gameControl();




    })
}





const updateJSboard = () => {
    switch(boxNum) {
        case 0:
            boardJS[0][0] = turn;
            break;
        case 1: 
            boardJS[0][1] = turn;
            break;
        case 2: 
            boardJS[0][2] = turn;
            break;
        case 3: 
            boardJS[1][0] = turn;
            break;
        case 4: 
            boardJS[1][1] = turn;
            break;
        case 5: 
            boardJS[1][2] = turn;
            break;
        case 6: 
            boardJS[2][0] = turn;
            break;
        case 7: 
            boardJS[2][1] = turn;
            break;
        case 8: 
            boardJS[2][2] = turn;
            break;
    }
}
const currPlayerMess = (player) => {
    let message;
    player === "human"? message = "X": message = "O";

    return message
}

const switchPlayer = () => {
    if (turn === "human") {
        turn = "CPU";
    } else {
        turn = "human"
    }

}

const drawOnBoard = (boxNum, player) => {
    const move = document.createElement("h1");
    move.innerHTML = currPlayerMess(player);
    boxes[boxNum].appendChild(move);
}

eventListener();

//1. create method that adds X/O to the clicked box 
//2. create method that resets game

