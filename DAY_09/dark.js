const myBody = document.getElementById("myBody");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", event => {
    if(myBody.style.backgroundColor === "black"){
        myBody.style.backgroundColor = "white";
        myBtn.textContent = "DarkMode";
    }
    else{
        myBody.style.backgroundColor = "black";
        myBtn.textContent = "LightMode";
    }
})