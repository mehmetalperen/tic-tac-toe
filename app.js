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



const gameControl = () => {

  

    drawOnBoard(5, "human");
    drawOnBoard(1, "CPU");
    drawOnBoard(0, "CPU");



}




const handleMove = (player) => {
    console.log(currPlayerMess(player));
}
const currPlayerMess = (player) => {
    let turn;
    player === "human"? turn = "X": turn = "O";

    return turn
}

const drawOnBoard = (boxNum, player) => {
    const move = document.createElement("h1");
    move.innerHTML = currPlayerMess(player);
    console.log(boxes)
    boxes[boxNum].appendChild(move);
}

gameControl();



//1. create method that adds X/O to the clicked box 
//2. create method that resets game

