import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBrMSBGhIA8E9rTR7ClNz9nm7trcPf5MTE",
  authDomain: "mundoajedrez-a1c46.firebaseapp.com",
  projectId: "mundoajedrez-a1c46",
  storageBucket: "mundoajedrez-a1c46.appspot.com",
  messagingSenderId: "844207206325",
  appId: "1:844207206325:web:f13dacccd90cfc33e9f3fc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
