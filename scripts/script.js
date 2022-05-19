var mousePosDisplay = document.getElementById('mousePos');
var player = document.getElementById('player');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
const border =15;
const radius = 15;
var life = 3;
let playZone = document.getElementById('playZone');
let mouse;
let dontStart = true;
let immune = false;
document.body.addEventListener('mousemove', function(e){
    dontStart = false;
    mouse = e;
})

function init(){
    mousePosDisplay = document.getElementById('mousePos');
    player = document.getElementById('player');
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    life = 3;
    immune = false;
    playZone = document.getElementById('playZone');
    document.body.addEventListener('mousemove', function(e){
        dontStart = false;
        mouse = e;});
    gameLoop = setInterval(updater,30);
}




let gameLoop = setInterval(updater, 30);



    function updater (){
        if(dontStart){
            return;
        }
    mousePosDisplay.innerText = `x: ${mouse.x} y: ${mouse.y}`;
    player.style.transform = 'translateY('+(mouse.y)+'px)';
    player.style.transform += 'translateX('+(mouse.x)+'px)';
    //border x + half player width
    if (mouse.x <= radius+border || mouse.x>=(windowWidth-border)-radius){
        if (immune == false){
            
            immune = true;
            life--;
            setTimeout(() => {
                immune = false;
            }, 2000);
            
        }
        console.log(life)
    }
    else if(mouse.y <= radius+border || mouse.y >= (windowHeight -border)-radius){
        if (immune == false){
            
            immune = true;
            life--;
            setTimeout(() => {
                immune = false;
            }, 2000);
        }
        console.log(life)
    }
    else if (life <= 0){
       
        mousePosDisplay.innerText= "you are ded";
        let new_element = document.body.cloneNode(true);
        document.body.parentNode.replaceChild(new_element, document.body);
        let startButton = document.createElement('button');
        playZone = document.getElementById('playZone');
        playZone.appendChild(startButton);
        startButton.classList.add('btn-start');
        startButton.id = "btn-start";
        startButton.innerText = "start";
        clearInterval(gameLoop);
        startButton.addEventListener('click',function(){
            init()
            playZone.removeChild(startButton);
        })
    }
}