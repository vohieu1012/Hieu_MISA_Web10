import { createApp } from 'vue';
import App from './App.vue';
window.$ = window.jQuery = require('jquery');
createApp(App).mount('#app')
// import axios
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = createApp(App)
app.use(VueAxios, axios) // 👈
app.mount('#app')

