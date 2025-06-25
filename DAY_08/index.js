const myBox = document.getElementById("myBox");

const moveAmount = 100;
let y = 0;
let x = 0;

document.addEventListener("keydown", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "😁";
})

document.addEventListener("keyup", event => {
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "😊"
})

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")){
        event.preventDefault();

        switch (event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowRight":
                x -= moveAmount;
                break;
            case "ArrowLeft":
                x += moveAmount;
                break;

        }
        myBox.style.top = `${y}px`;
        myBox.style.right = `${x}px`;
    }
})