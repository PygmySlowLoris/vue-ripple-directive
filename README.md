#   Material Ripple Effect

Material Ripple Effect as Vue Directive.

<p align="center">
<img src="https://media.giphy.com/media/MfW6n0zLw2k7K/giphy.gif" />
</p>

This directive it's meant to be used in any element in which you like to achieve such ripple effect.

<a href="https://pygmyslowloris.github.io/vue-ripple-directive/"> Live Demo</a>

##  Installation

```
npm install vue-ripple-directive --save
```

##  Options

Optional parameter to pass to the directive.

| Parameter      | Type      | Values     |
| :--------------- | :-------  | :--------- |
|  `color-value`      | String    |  <b>Default: 'rgba(0, 0, 0, 0.35)'</b>. <br> Accepts either HEX, RGB & RGBA values. For optimal look use RGBA with low opacity. |

##  Modifiers

By default this directive attaches a click handler to the element as well as the transition is set for 600ms.
For those who wants to modify the same, just pass modifiers to the directive:

```
v-ripple.mouseover.500
```

Can also modify only one

```
v-ripple.mouseover
```

##  Sample & Usage

First you need to import the directive and add it to Vue.

```
import Ripple from 'vue-ripple-directive'

Vue.directive('ripple', Ripple);
```

Then use on any element you want to achieve the effect.

```
<div v-ripple class="button is-primary">This is a button</div>
```

If you want a custom color just pass a color parameter as `string`. It's best if you use RGBA colors to achieve a greater effect.

```
<div v-ripple="'rgba(255, 255, 255, 0.35)'"  class="button">I have different color</div>
```

##  Global settings

You can set the default color and z-index for all your ripples as the following example

```
import Ripple from 'vue-ripple-directive'

Ripple.color = 'rgba(255, 255, 255, 0.35)';
Ripple.zIndex = 55;
Vue.directive('ripple', Ripple);
```