# MottoJS
Show your motto in an amazing way!

# Installation
npm
```
npm install motto
```
or

```
git clone git@github.com:jrainlau/motto.git
```


# Usage
create a html tag such as `<h1></h1>` etc
```
<h1 class="motto"></h1>
```
then include `MottoJS` 

```
<script src="motto.min.js"></script>
```
> `MottoJS` also support `AMD`, `CommonJS` and `ES2015`.

then use `new` to create a MottoJS instance
```
var motto = new Motto(el, config)
```
> if you want to add the *shake* effect, you should link the `motto.css` to your  HTML:
> ```
<link rel="stylesheet" href="motto.css">
```
> and add a class `.motto-shake` to the element
> ```
<h1 class="title motto-shake"></h1>
```

# Params
`MottoJS` receive two params.
- ### el {String / HTML element} `required`
use CSS selector to select a html element for showing the motto.

- ### config {Object} `required`
it's an object with five optional properties.

# Config
the base config object is
```
{
    lyric: 'To be or not to be, that\'s a question.',
    showUpSpeed: 1000,
    flashSpeed: 100,
    flashTimeout: 1000,
    callback: function() { ... }
}
```
- #### lyric {String} `optional`  `default: ''`
the text of your motto.


- #### showUpSpeed {Number} `optional` `default: 0`
your motto will be a letter by letter on display, it's an option to control the speed.

- #### flashSpeed {Number} `optional` `default: 0`
to control how fast will the messy code translate into meaningful motto.

- #### flashTimeout {Number} `optional` `default: 0`
set the timeout between the messy code showed up and translated into meaningful motto.

- #### callback {Function} `optional` `default: {}`
a callback function after translation.

# Update
- v1.0.1: added *shake* css effect.

# License
MIT

