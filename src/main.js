import Vue from 'vue'
import App from './App.vue'

// import style
// import 'swiper/css/swiper.css'
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')