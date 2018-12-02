var five = require("johnny-five");

five.Board().on("ready", function() {
  // Create an LED on pin 9
  var led = new five.Led(9);

  // Strobe the LED on/off, defaults to 100ms phases
  led.blink(750);
});
