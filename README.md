# RedCss
Simple Css Manager

#API

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
