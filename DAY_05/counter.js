const countLabel = document.getElementById("countLabel");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let count = 0;

decreaseBtn.onclick = function(){
    count-- ;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}