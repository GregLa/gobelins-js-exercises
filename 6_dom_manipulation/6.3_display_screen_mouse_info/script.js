const height = document.querySelector('#height');
const width = document.querySelector('#width');
const posX = document.querySelector('#posX');
const posY = document.querySelector('#posY');

window.addEventListener("mousemove", e => {
    posX.innerHTML = e.clientX;
    posY.innerHTML = e.clientY;
})

window.addEventListener("resize", e => {
    height.innerHTML = window.innerHeight;
    width.innerHTML = window.innerWidth;
})
