var data = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];
document.body.onload = addElement;
var my_div = newDiv = null;

function addElement() {
    var separator = 2;
    var max = 500;
    var newDiv = document.createElement("wrapper");
    newDiv.innerHTML = "<span>" + Math.max.apply(Math, data) + "</span>";
    my_div = document.getElementById("test");
    document.body.insertBefore(newDiv, my_div);
    for (var i = 0; i < data.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<div id=l" + i + "><p id=number" + i + ">" + i +
            "</p><span id=yTest" + i + "></span></div > ";
        document.body.insertBefore(newDiv, my_div);
        var element = document.getElementById('l' + i);
        var numberElement = document.getElementById('number' + i);
        var heigthElement = (data[i] * max) / Math.max.apply(Math, data) + 'px';
        element.style.height = heigthElement;
        numberElement.style.marginTop = heigthElement;
        element.style.width = '30px';
        element.style.position = 'absolute';
        element.style.bottom = "0";
        element.style.left = separator + 'px';
        if (data[i] >= 0 && data[i] <= 5) {
            element.style.backgroundColor = "green";
        } else if (data[i] > 5 && data[i] <= 10) {
            element.style.backgroundColor = "yellow";
        } else if (data[i] > 10) {
            element.style.backgroundColor = "red";
        }
        separator += 33;
    }
}