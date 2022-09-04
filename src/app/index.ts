import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './index.vue';
import { router } from './providers';

const app = createApp(App);

app.use(router);
app.use(createPinia())

export { app }