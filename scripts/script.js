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
let isEnemy = false;
let enemies = [];
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
    isEnemy = false;
    gameLoop = setInterval(updater,30);
    enemySpawnLoop = setInterval(enemySpawn,5000);
}


let renderEnemies = setInterval(function(){
    moveEnemies();
    updateEnemy()
},30)
let enemySpawnLoop = setInterval(function(){
    enemySpawn(speed)
    speed++;
    if (enemies.length > 5){
        enemies.unshift();
    }
},5000);
let gameLoop = setInterval(updater, 30);
let speed = 1;
    function enemySpawn(speed){
       let enemyDiv = document.createElement('div');
       enemyDiv.classList.add('enemy');
       enemyDiv.id = "enemy";
       let enemy = {
           div: enemyDiv,
           x:Math.round(Math.random()*windowWidth-(border+radius)),
           y: Math.round(Math.random()*windowHeight-(border+radius)),
           speed : speed
       }
       
       enemies.push(enemy);
    }
    function updateEnemy(){
        enemies.forEach(enemy => {
            
            enemy.div.style.left = `${enemy.x}px`;
            enemy.div.style.top = `${enemy.y}px`;
            playZone.appendChild(enemy.div);
            isEnemy = true;
        });
    }
    function moveEnemies(){
        enemies.forEach(enemy => {
            if(mouse.x > enemy.x){
                enemy.x += enemy.speed
            }
            else{
                enemy.x -= enemy.speed
            }
            if(mouse.y > enemy.y){
                enemy.y += enemy.speed
            }else{
                enemy.y -= enemy.speed
            }
        });
    }

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
        clearInterval(enemySpawnLoop);
        if (isEnemy === true){
            playZone.removeChild(enemyDiv);
        }
        startButton.addEventListener('click',function(){
            init()
            playZone.removeChild(startButton);
            
            
        })
    }
}