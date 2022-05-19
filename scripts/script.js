var mousePosDisplay = document.getElementById('mousePos');
var player = document.getElementById('player');
document.addEventListener('mousemove',function(mouse){
    mousePosDisplay.innerText = `x: ${mouse.x} y: ${mouse.y}`;
    player.style.transform = 'translateY('+(mouse.y)+'px)';
    player.style.transform += 'translateX('+(mouse.x)+'px)';
    
    
})
