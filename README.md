<img src="https://media.giphy.com/media/mCb6AyWahvL1bPUiXX/giphy-downsized.gif">

# Birdnet

Have you ever wondered were birds can find and buy new homes? Probably not, but if you have - here is the solution. Welcome to my website made with the purpose to give birds a platform to find their new homes. Enjoy! 

# Installation

No installation needed. Visit my website here: https://useless-web.netlify.app/

# Code Review

Code review written by Neo Lejondahl.

1. `index.html:55-60` - On email submit does a get request, maybe prevent defualt?
2. `functions.js:27&29` - you use both document and window for event listeners, you could use only document for this app.
3. `functions.js:47` - V A R is forbidden by Elina. FIXED
4. `functions.js:48` - Sort of fixes the above but write your for loops with `let i = 0;` in the loop instead of defining 'i' before. DONE
5. `funtions.js` - you could place the functions below the appropriate even listener so it would be easier to know what does what, maybe use anonymous functions in the event listeners instead of defining them?
6. `css/html` - the div_styling class is a little unclear what it is, sound like it is all the divs in the app.

# Testers

Tested by the following people:

1. Agnes Skönvall
2. Alice Nyberg
