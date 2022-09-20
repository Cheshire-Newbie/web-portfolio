//importy z zewnetrznych bibliotek
import Vue from 'vue'
import { initializeApp } from "firebase/app";

//importy plikow konfiguracyjnych
import vuetify from './plugins/vuetify'
import router from './plugins/router'

//to osobno, bo jest to plik ktory bedzie ukryty
import firebaseConfig from '../Firebase-config'

//wewnetrzne pliki
import App from './components/App/App.vue'


Vue.config.productionTip = false

initializeApp(firebaseConfig)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')