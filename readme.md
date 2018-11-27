## Johnny-Five LCD Holiday project: J5-LEDS

##### by Ron Craig (ron.craig@comcast.net ∙ https://github.com/r-craig73 ∙ https://linkedin.com/in/craigronald)

#### GitHub repository: https://github.com/r-craig73/j5-leds

### Description
#### Scripts using JavaScript, johnny-five webpack, and an Arduino UNO microcontroller with different sensors (LED or RGB LED sensors).

### Home Page Screenshot
<kbd><img src="" alt="Home Page Screenshot later?"></kbd>

###  Minimum Viable Product (MVP) User and Administrator Stories
- [x] As a user, I want to turn on a sensor.
- [x] As a user, I want to turn off a sensor.
- [x] As a user, I want to a sensor to quickly turn on and off (blinking/winking).

### Post MVP User and Administrator stories
- [ ] As a user, I want to control different sensors.
- [ ] As a user, I want to CURD-L sensor capabilities.
- [ ] User Authentication between Administrator and Users (email and password)
- [ ] As a user, I want to turn on multiple sensors (new interface).
- [ ] As a user, I want to customize a sensor's action (on/off, blinking/sensor, etc.).
- [ ] As a user, I want to to know when a sensor is either working or not working.
- [ ] As a user, I want to record and store time and the LED light voltage's value into a database.
- [ ] As a user, I want to record and store time and the LED light color into a database.
- [ ] As a user, I want to select and visualize my sensor results within the application, using a linear chart (voltage vs. time, line graph, etc.).
- [ ] As a user, I want to sensor to alert about a certain event (Portland news, a special alert, earthquake warning, etc.).
- [ ] As a admin, I want CURD-L capabilities for ALL users.
- [ ] As a admin, I want users to have '--R--L' (out of CRUD-L) capabilities on other user's sensors.

### Instructions (assuming Mac OS)
* Clone repository and move to the home repository folder `j5-lec`.
* Install Xcode.
* Install Node.js https://nodejs.org/en/.
* Install node-gyp `$ npm install -g node-gyp`.
* Run: `$ npm install johnny-five`
* Verify the Arduino UNO is connected via USB to your computer.
* Run `$ node blink.js` to flash a RED LED every 750ms.
* Run `$ node led-rgb-blink.js` to flash a REG LED to blue every second.
* Run `$ node led-rainbow.js` to flash a REG LED to seven different color every second.

## Bugs
* None at the moment

## Technologies Used
```
Applications: JavaScript, Node.js, Xcode, node-gyp
Webpacks: johnny-five, node-gyp
```

#### Sources and inspiration
* _Getting Started with Arduino_ 2nd Edition by Massimo Banzi
* johnny-five's GitHub: https://github.com/rwaldron/johnny-five/wiki/Getting-Started#trouble-shooting 
* johnny-five's Homepage & sample scripts: http://johnny-five.io/

Copyright (c) 2018 **_RC productions_**

## MIT License
-----------
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
