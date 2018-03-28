# Random Color Generator
A random hex color code generator.  
Currently 3 modes available:  
- Default: range restricted colors to midtones to light tones -  \#404040 through \#DFDFDF
- Full: all possible hex colors - \#000000 - \#FFFFFF
- Light: only light/pastel colors - \#707070 - \#e0e0e0
- Saturated: colors with a high R, G, or B value and low values for other two, i.e. \#35FE28;

## Demo
[View Demo](https://zwelden.github.io/random-color-generator/)

## TODO
- [ ] Rework color selection to make default colors 'punchier' (more saturated)
- [ ] Rework color selection to reduce or eliminate probability of dark/murky colors from default and saturated options

## How to use
1. add the randomColorGen.js file to html page
2. in a js script:
  ```javascript
    var aRandomColor = app.randomColor();
  ```
3. to get full, light, or saturated colors:
  ```javascript
    var specialColor = app.randomColor('light');
  ```
4. apply color however you wish:
  ```javascript
    var bestColorEver = app.randomColor('saturated');
    someCachedElement.style.background = bestColorEver;
  ```
