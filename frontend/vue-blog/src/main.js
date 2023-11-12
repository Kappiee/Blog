import App from './App.vue'
import { createApp } from 'vue'
import router from './router';

createApp(App).use(router).mount('#app');

// new Vue({
//     router,
//     render: h => h(App),
// }).mount('#app');