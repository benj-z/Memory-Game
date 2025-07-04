var buttons = ["button1", "button2", "button3", "button4"];
var count = 0;
var score = 0;

function randomise(){
    for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
    }
}

randomise();

function lightButton(){
    if(count < buttons.length){
        var button = document.getElementById(buttons[count]);
        button.style.filter = 'saturate(100%) brightness(100%)';

        setTimeout(function(){
            document.getElementById("button1").style.filter = 'saturate(50%) brightness(70%)';
            document.getElementById("button2").style.filter = 'saturate(50%) brightness(70%)';
            document.getElementById("button3").style.filter = 'saturate(50%) brightness(70%)';
            document.getElementById("button4").style.filter = 'saturate(50%) brightness(70%)';
        },750);

        if(count > 0 && buttons[count] != buttons[count-1]){
            button = document.getElementById(buttons[count-1]);
            button.style.filter = 'saturate(50%) brightness(70%)';
        }
        count += 1;
    }

    else{
        button = document.getElementById(buttons[count-1]);
        button.style.filter = 'saturate(50%) brightness(70%)';
    }
}

setInterval(lightButton, 1500);

let buttonPressOrder = [];

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

function recordButtonPress(buttonId) {
    if(buttonPressOrder.length < buttons.length) {
        buttonPressOrder.push(buttonId);
    
        if(buttonPressOrder.length === buttons.length) {
            if(compareLists(buttons, buttonPressOrder)){
                score += 1;
                document.querySelector("#score").textContent = "Score: " + score;
                count = 0;
                buttonPressOrder = [];
                var randomNumber = Math.floor(Math.random() * (buttons.length - 1));
                var randomButton = buttons[randomNumber];
                buttons.push(randomButton);
                randomise();
            }

            else{
                document.querySelector('#gameOverDiv').style.display = "block";
                document.querySelector('#gameOverScore').textContent = "Your score was: " + score;
                document.querySelector('#buttons').style.display = "none";
                document.querySelector('#score').style.display = "none";
                document.querySelector('#i').style.display = "none";
            }
        }
    }
}

function compareLists(list1, list2){
    for(var i = 0; i < list1.length; i++){
        if(list1[i] != list2[i]){
            return false;
        }
    }
    return true;
}
