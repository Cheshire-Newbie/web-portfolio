//importy z zewnetrznych bibliotek
import Vue from 'vue'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

//importy plikow konfiguracyjnych
import vuetify from './plugins/vuetify'
import router from './plugins/router'

//to osobno, bo jest to plik ktory bedzie ukryty
import firebaseConfig from '../Firebase-config'

//wewnetrzne pliki
import App from './components/App/App.vue'


Vue.config.productionTip = false

const app = initializeApp(firebaseConfig)
Vue.prototype.$db = getFirestore(app)

const v = new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

// tutaj ustawiam tryb dzienny i nocny zalezny od godziny
// jesli godzina jest mniejsza od 8 i wieksza od 19 
// to wtedy theme.dark jest true, jak nie, to false
const t = new Date().getHours();
if(t<8 || t>19) {
  v.$vuetify.theme.dark = true
}
else v.$vuetify.theme.dark = false