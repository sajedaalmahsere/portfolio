let circle = document.querySelector(".circle");
let square = document.querySelector(".square");

let position = 0;
let direction = 1;

function moveShapes() {

    position += direction * 0.1;

    circle.style.transform = `translateY(${position}px)`;
    square.style.transform = `translateY(${-position}px)`;

    if (position >= 20 || position <= -20) {
        direction *= -1;
    }

    requestAnimationFrame(moveShapes);
}

moveShapes();