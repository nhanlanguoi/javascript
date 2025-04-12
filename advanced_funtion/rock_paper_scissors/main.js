let scoreString = localStorage.getItem('score');
let score;
if (scoreString) {
    score = JSON.parse(scoreString);
    } else {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
function play(t,imgicon){
   
    let you = imgicon;
    
    

    const k = Math.random();
    console.log(t);
    let ketqua = "";
    let bot ="";
    if(k >= 0 && k<=1/3){
        bot = "Rock";
        
    }else if(k > 1/3 && k<=2/3){
        bot = "Paper";
    }else{
        bot = "Scissors";
    }
    if(t === 'Rock') {
        if(k >= 0 && k<=1/3){
            ketqua = 'ties';
            
        }else if(k > 1/3 && k<=2/3){
            ketqua = 'losses';
        }else{
            ketqua = 'wins';
        }
    }else if(t === 'Paper' ){
        if(k >= 0 && k<=1/3){
            ketqua = 'wins';
        }else if(k > 1/3 && k<=2/3){
            ketqua = 'ties';
        }else{
            ketqua = 'losses';
        }
    }else{
        if(k >= 0 && k<=1/3){
            ketqua = 'losses';
        }else if(k > 1/3 && k<=2/3){
            ketqua = 'wins';
        }else{
            ketqua = 'ties';
        }
    }
    
    if(ketqua == 'wins'){
        score.wins++;
    }else if(ketqua == 'losses'){
        score.losses++;
    }else{
        score.ties++;
    }

    localStorage.setItem('score' ,JSON.stringify(score));

    document.querySelector('.p3').innerHTML = `wins:${score.wins} losses:${score.losses} ties:${score.ties}`;
    update();
    if(bot == "Rock"){
        bot = "<img style='background-color: black;width: 50px;vertical-align: middle;border-radius: 100px;' src='./img/rock-emoji.png' alt='erro'>"
    }else if(bot == "Paper"){
        bot = "<img style='background-color: black;width: 50px;vertical-align: middle;border-radius: 100px;' src='./img/paper-emoji.png' alt='erro'>"
    }else{
        bot = "<img style='background-color: black;width: 50px;vertical-align: middle;border-radius: 100px;' src='./img/scissors-emoji.png' alt='erro'>"
    }
    explan(ketqua,you,bot);
}

function update(){
    let scoreString = localStorage.getItem('score');
    let score;
    
    if (scoreString) {
    score = JSON.parse(scoreString);
    } else {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    }
    localStorage.setItem('score' ,JSON.stringify(score));
    document.querySelector('.p3').innerHTML = `wins:${score.wins} losses:${score.losses} ties:${score.ties}`;
}

function explan(ans,you,computer){
    
    if(ans === 'wins'){
        document.querySelector('.p1').innerHTML =  'You Win';
        document.querySelector('.p2').innerHTML =  `You ${you} ${computer} Computer`;
    }else if(ans === 'losses'){
        document.querySelector('.p1').innerHTML =  'You Lose';
        document.querySelector('.p2').innerHTML =  `You ${you} ${computer} Computer`;
    }else{
        document.querySelector('.p1').innerHTML = 'You tie';
        document.querySelector('.p2').innerHTML =  `You ${you} ${computer} Computer`;
    }
}

function bots(){
    const k = Math.random();
    
    let imgbot ="";
    let bot ="";
    if(k >= 0 && k<=1/3){
        bot = "Rock";
        imgbot = "<img style='background-color: black;width: 50px;vertical-align: middle;border-radius: 100px;' src='./img/rock-emoji.png' alt='erro'>";
    }else if(k > 1/3 && k<=2/3){
        bot = "Paper";
        imgbot = "<img style='background-color: black;width: 50px;vertical-align: middle;border-radius: 100px;' src='./img/paper-emoji.png' alt='erro'>";
    }else{
        bot = "Scissors";
        imgbot = "<img style='background-color: black;width: 50px;vertical-align: middle;border-radius: 100px;' src='./img/scissors-emoji.png' alt='erro'>"
    }
    play(bot,imgbot);
    
}

let autoPlayId = null;

function auto(){
    if (autoPlayId === null) {
        autoPlayId = setInterval(function () {
            bots();
        }, 1000);
    } else {
        clearInterval(autoPlayId);
        autoPlayId = null;
    }
}


function reset(){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    localStorage.setItem('score' ,JSON.stringify(score));
    document.querySelector('.p3').innerHTML = `wins:${score.wins} losses:${score.losses} ties:${score.ties}`;
}