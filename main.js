var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

c.fillStyle = 'rgba(250, 0, 0, 0.5)';
c.fillRect(100, 100, 100,100);
c.fillStyle = 'rgba(0, 0, 250, 0.5)';
c.fillRect(400, 100, 100,100);
c.fillStyle = 'rgba(0, 250, 0, 0.5)';
c.fillRect(300, 300, 100,100);

console.log('canvas');

//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3";
c.stroke();

//Arc/Circle
// c.beginPath();
// c.arc(300,  300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

for(var i = 0; i<10; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
c.arc(x,  y, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
}