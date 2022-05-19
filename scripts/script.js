var mousePosDisplay = document.getElementById('mousePos');
var player = document.getElementById('player');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
const border =15;
const radius = 15;
document.addEventListener('mousemove',function(mouse){
    mousePosDisplay.innerText = `x: ${mouse.x} y: ${mouse.y}`;
    player.style.transform = 'translateY('+(mouse.y)+'px)';
    player.style.transform += 'translateX('+(mouse.x)+'px)';
    //border x + half player width
    if (mouse.x <= radius+border || mouse.x>=(windowWidth-border)-radius){
        alert('you loose');
    }
    else if(mouse.y <= radius+border || mouse.y >= (windowHeight -border)-radius){
        alert('you loose');
    }
    
    
    
})
