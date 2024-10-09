import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'; // Make sure this path is correct
import BootstrapVue from 'bootstrap-vue-3'; // For Vue 3


const app = createApp(App);

app.use(router);
app.use(BootstrapVue);
app.mount('#app');
