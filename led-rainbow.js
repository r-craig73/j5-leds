var five = require("johnny-five");
// var board = new five.Board();

five.Board().on("ready", function() {
  var rgb = new five.Led.RGB([3, 5, 6]);
  var index = 0;

  // rainbow colors: red, orange, yellow, light-green, blue, purple, and light-purple
  var rainbow = ["FF0000", "FF9D00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];

  this.loop(1000, function() {
    rgb.color(rainbow[index++]);
    if (index === rainbow.length) {
      index = 0;
    }
  });
});