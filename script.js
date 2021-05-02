let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

window.onkeydown = function(e){
  const keyName = e.key;
  if(keyName === 'w'){
    y -= 5;
  }else if(keyName === 'a'){
    x -= 5;
  }else if (keyName === 's') {
    y += 5;
  }else if(keyName === 'd'){
    x += 5;
  }
  drawCircle(x, y, size);
}
