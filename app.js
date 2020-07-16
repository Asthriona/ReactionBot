const robot = require('robotjs');

setInterval(function(){
    var mousePos = robot.getMousePos();
    var hex = robot.getPixelColor(mousePos.x, mousePos.y);
    console.log(`The color at ${mousePos.x}, ${mousePos.y} is ${hex}`);
    if(hex === "ce2636") return;
    if(hex === "4bdb6a") {
        console.log("Green pixel detected!");
        robot.mouseClick();
        console.log("Green clicked!");
        process.exit(1);
        
    }
}, 1);