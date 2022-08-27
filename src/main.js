import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/scss/reset.scss"
import "./assets/scss/basic.scss"
import "./assets/scss/application.scss"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import store from './store'
import ScrollAnimation from './directives/scrollanimation'

/*
 Register the object here globally as directive, 
 similar if you register a component. 
 But now with Vue.directive, instead of component.
 With this you can use v-scrollanimation 
 in your whole application on each element.
*/
Vue.directive('scrollanimation', ScrollAnimation);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
