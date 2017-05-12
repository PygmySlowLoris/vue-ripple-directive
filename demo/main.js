import Vue from 'vue'
import App from './App.vue'
import Ripple from '../src/ripple'

Vue.directive('ripple', Ripple);

new Vue({
el: '#app',
render: h => h(App)
});

