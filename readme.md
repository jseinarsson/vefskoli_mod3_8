# Javascript In The Browser - DOM Manipulation & Timing

[See the site live here](http://bovine-earthling.surge.sh/)

*Please view this site on desktop (it is not responsive). Has been tested in Chrome and Safari.*

1. This site has a pseudo loading screen using CSS animations & setTimeout() in JS to delay the reveal of the main section for 10.5 seconds. Ideally, the loading of the page would control the CSS animation, but I decided to fake it for the purpose of this project, especially since the loading time won't be very long.

2. The Dashboard is revealed once the setTimeout counter runs out. The first screen on the dashboard asks for a name input, which is then added as a text string on the next screen once the user has clicked the arrow.

3. The second screen of the dashboard allows the user to initiate a scanner (adding a class to initialize a CSS animation), to exit the program and shows the current date and time in the bottom right corner, which updates every 10 seconds using setInterval()