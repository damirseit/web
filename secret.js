colors = generateColors(6);
pickedColor = colors[pickColor()];
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var heading = document.querySelector("h1");
var heading1 = document.querySelector("h2");
var heading2 = document.querySelector("h3");
var heading3 = document.querySelector("#scoretext");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var scoreSpan = document.querySelector("#score");
var prize = document.querySelector("#prize");

var score = 0;
var attempt = 0;

easyBtn.addEventListener("click", function(){
    heading.style.backgroundColor = "steelblue";
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateColors(3);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(i < colors.length){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].classList.add("hidden");
        }
    }
})

hardBtn.addEventListener("click", function(){
    heading.style.backgroundColor = "steelblue";
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateColors(6);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].classList.remove("hidden");
        if(i < colors.length){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].classList.add("hidden");
        }
    }
})

for(var i = 0; i < 6; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor == pickedColor){
            changeColors(pickedColor);
            if(attempt === 0)
                score++;
            attempt = 1;
            messageDisplay.textContent = "Correct!";
            
            scoreSpan.textContent = score;
            if(score === 10){
                heading.textContent = "YOU WON!";
                heading1.textContent = "Scroll Down";
                heading2.textContent = "";
                prize.style.visibility = "visible";
            }
            resetButton.textContent = "Play Again";
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

resetButton.addEventListener("click", function(){
    colors = generateColors(colors.length);
    attempt = 0;
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    if(resetButton.textContent == "Play Again"){
        heading.style.backgroundColor = "steelblue";
        heading1.style.backgroundColor = "steelblue";
        heading2.style.backgroundColor = "steelblue";
        heading3.style.backgroundColor = "steelblue";
        resetButton.textContent = "New Colors";
        messageDisplay.textContent = "";
    }
})

function changeColors(color){
    for(var i = 0; i < 6; i++){
        squares[i].style.backgroundColor = color;
    }
    heading.style.backgroundColor = color;
    heading1.style.backgroundColor = color;
    heading2.style.backgroundColor = color;
    heading3.style.backgroundColor = color;
}

function generateColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function pickColor(){
    return Math.floor(Math.random() * colors.length);
}
