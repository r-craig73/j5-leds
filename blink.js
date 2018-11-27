var five = require("johnny-five");

five.Board().on("ready", function() {
  // Create an Led on pin 9
  var led = new five.Led(9);

  // Strobe the pin on/off, defaults to 100ms phases
  led.strobe(750);
});