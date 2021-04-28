var data = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];
var canvas = document.getElementById('canvas');

var c = canvas.getContext('2d');

c.fillStyle = "white";
c.fillRect(0, 0, 500, 500);

c.fillStyle = "black";
c.lineWidth = 2.0;
c.beginPath();
c.moveTo(30, 10);
c.lineTo(30, 460);
c.lineTo(2000, 460);
c.stroke();

c.fillStyle = "black";
for (var i = 0; i < 6; i++) {
    c.fillText((5 - i) * (Math.max.apply(Math, data) / 5) + "", 4, i * 80 + 60);
    c.beginPath();
    c.moveTo(25, i * 80 + 60);
    c.lineTo(30, i * 80 + 60);
    c.stroke();
}

for (var i = 0; i < data.length; i++) {
    c.fillText(i, 60 + i * 100, 475);
}

for (var i = 0; i < data.length; i++) {
    var max = 405;
    var temp = (data[i] * max) / Math.max.apply(Math, data);
    if (data[i] >= 0 && data[i] <= 5) {
        c.fillStyle = "green";
    } else if (data[i] > 5 && data[i] <= 10) {
        c.fillStyle = "yellow";
    } else {
        c.fillStyle = "red";
    }
    c.fillRect(40 + i * 100, 460 - temp, 50, temp);
}