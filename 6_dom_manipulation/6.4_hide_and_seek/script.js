const grid = document.querySelector(".grid");
const clickCounterDisplay = document.querySelector("#counter");
const endMessageDisplay = document.querySelector("#end");
const tiles = [];
const guy = "(⌐■_■)";
const intruder = "ಠ_ಠ";
let intruderFound = false;
let clickCounter = 30;

const revealTile = (e) => {
    clickCounter--;
    clickCounterDisplay.innerHTML = clickCounter;
    e.target.dataset["revealed"] = true;
    e.target.classList.add("revealed");
    intruderFound = (e.target.innerHTML === intruder);
    if (intruderFound || clickCounter === 0) {
        stopGame();
    }
}

const updateIntruderPosition = () => {
    const notRevealed = tiles.filter(t => t.dataset["revealed"] === "false");
    const intruderPos = tiles.findIndex(t => t.innerHTML === intruder);
    const newRandomPos = Math.floor(Math.random() * notRevealed.length);
    tiles[intruderPos].innerHTML = guy;
    notRevealed[newRandomPos].innerHTML = intruder;
}

const stopGame = () => {
    clearInterval(updateInterval);
    tiles.forEach(t => t.removeEventListener("click", revealTile));
    const intruderElt = tiles.find(t => t.innerHTML === intruder);
    if (intruderFound) {
        intruderElt.style.backgroundColor = "green";
        endMessageDisplay.innerHTML = "You win !";
    } else {
        intruderElt.classList.add("revealed");
        intruderElt.style.backgroundColor = "red";
        endMessageDisplay.innerHTML = "You loose !";
    }
}

for (let index = 0; index < 64; index++) {
    const elm = document.createElement("div");
    elm.classList.add("tile");
    elm.dataset["revealed"] = false;
    elm.addEventListener("click", revealTile);
    elm.innerHTML = (index === 0) ? intruder : guy;
    tiles.push(elm);
    grid.appendChild(elm);
}

document.querySelector("#showIntruder").addEventListener("click", e => {
    tiles.map(t => t.classList.toggle("show"));
})

updateIntruderPosition();

const updateInterval = setInterval(updateIntruderPosition, 2000);