#   Material Ripple Effect

Material Ripple Effect as Vue Directive.

This directive it's meant to be used in any element in which you like to achieve such ripple effect.

##  Installation

```
npm install vue-ripple-directive --save
```

##  Options

Optional parameter to pass to the directive.

| Parameter      | Type      | Values     |
| :--------------- | :-------  | :--------- |
|  `color-value`      | String    |  <b>Default: 'rgba(0, 0, 0, 0.35)'</b>. <br> Accepts either HEX, RGB & RGBA values. For optimal look use RGBA with low opacity. |


##  Sample & Usage

First you need to import the directive and add it to Vue.

```
import Ripple from 'vue-ripple-effect'

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
