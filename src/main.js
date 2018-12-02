var five = require("johnny-five");

five.Board().on("ready", function() {
  // Initialize the RGB LED
  var led = new five.Led.RGB({
    pins: {
      red: 3,
      green: 5,
      blue: 6
    }
  });

  led.on();
  led.color({red: 0, blue: 0, green: 0});

  // Place pubnub keys here

  // Turn LED on and set the initial color
  led.color("#0000FF"); // red FF0000, green 00FF00, blue 0000FF
  
});
