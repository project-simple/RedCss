# RedCss
Simple Css Manager


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/project-simple-red-css.png)](https://npmjs.org/package/project-simple-red-css)

github - [here](https://github.com/project-simple/RedCss)

# Install 
#### npm 
```npm
npm install project-simple-red-css --save-dev
```
```
import RedCss from 'project-simple-red-css';
```
#### browser
```html
<script src="https://project-simple.github.io/RedCss/dist/RedCss.min.js"></script>
<script>
    RedCss('body').S('background','red');
</script>
```

# API

## Css Search and make
- RedCss('query string')
```javascript
RedCss('body');
```
## Set Css 
- RedCss('body').S('targetKey','targetValue');
```javascript
RedCss('body').S( 'background','red' );
RedCss('body').S( 'color', 'pink', 'padding', 12 );
RedCss('div').S( 'marginLeft', '12em', 'margin-right', '12%' );  
```
equal
```css
body { 
    background: red; 
    color : pink;
    padding: 12px;
}
div {
    margin-left: 12em;
    margin-right: 12%;
}
```

## Get Css 
- RedCss('body').S( 'targetKey' );
```javascript
// set
RedCss('body').S('background','red');
// get
RedCss('body').S('background'); // return red
```
* Values declared in CSS are also controll by RedCss.
```css
html {
    background: blue;
}
```
```javascript
RedCss('html').S('background'); //return blue
```

## Remove Css 
- RedCss('targetKey').remove()
```javascript
RedCss('body').remove(); // remove body css
````

## TestCase
- testBDD : [here](https://project-simple.github.io/RedCss/testBDD.html)
