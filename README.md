# Jauntyslider
The quick way to slide a HTML list http://jauntyslider.luizgustavoweb.com

## Requirements
- jQuery
- HTML5

If you're using Bower, jQuery is already included in the json file as a component of the project.

## Configuration
Jauntyslide is a powerful slider with a simple configuration. All you need to do is attach the attibute <em>data-jauntyslider</em> on a html list and if you want, set some options within it to customize.

In order to be able to use Jauntyslider, include the javascript file in the Head section of your page:

```javascript
<script src="css/jauntyslider.min.css"></script>
<script src="js/jauntyslider.min.js"></script>
```

Now you can start to use it like the example below:

```javascript
<ul data-jauntyslider>
```

And there you go! The Jauntyslider is up and running in your html list.

You also can set some options to customize the slider:

```javascript
<ul data-jauntyslider="loop:false; speed:fast;">
```

Jauntyslider supports multiple sliders on the same page:

```javascript
<ul id="slider-1" data-jauntyslider="loop:false; speed:fast;">
<ul id="slider-2" data-jauntyslider="slideshow:true; duration:4s;">
```

## Parameters

- Speed
[slow|normal|fast|easein|easeout]
[default: normal]
Define the speed of the transitions.

- Loop
[boleean]
[default: true]
When reaching the end of the slider, it'll come back to the beginning.

- Start
[integer]
[Default: 1]


- Width
[pixels] 
[Default: inheritance]
 Lembre-se de que ele herdará dinamicamente o tamanho do contêiner pai.

- Height
[pixels] 
[Default: inheritance]
 Lembre-se de que ele herdará dinamicamente o tamanho do contêiner pai.

- Slideshow
[boleean]
[default: true]
The transition of the slides will occur automatically.
The navigation is allowed even so.

- Interval
[s] (seconds)
[default: 5s]
Define the interval between the transitions of the slideshow.

- Navigation
[boolean]
[Default: true]


- Step
[integer]
[Default: 1]
It allows change the number of the slides by every transition.

## Final Words
Thanks for using!
I'm working on it, and future versions with more settings are to come.
