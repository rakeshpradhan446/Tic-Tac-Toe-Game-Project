let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let message = document.querySelector("#message");
let turno = true;//playerx ,playero
//here we use 2D array
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const resetgame =() =>{
    tutno=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked!!");
        if (turno) {//player o
            box.innerText = "O";
            turno = false;
        } else {//player x
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    }
    );

});

  const disableboxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
  }


const enableboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
  }


    const showwinner =(winner) => {
    message.innerText = `CONGRATULATION!!WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    }


     
const checkWinner = () => {
    for (let pattern of winpatterns) {
        console.log([pattern[0]], [pattern[1]], [pattern[2]]);

        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );
        let position1value = boxes[pattern[0]].innerText;
        let position2value = boxes[pattern[1]].innerText;
        let position3value = boxes[pattern[2]].innerText;
        if (position1value != "" && position2value != "" && position3value != "") {
            if (position1value === position2value && position2value === position3value) {
                // console.log("winner", position1value);
                showwinner(position1value);
            }
        }

    }
};
newGamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

