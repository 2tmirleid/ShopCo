import '@/assets/main.css';
import { createApp } from 'vue'
import App from './App.vue'

import components from "@/components/index.js";
import banners from "@/components/banners/index.js";
import UIComponents from '@/components/UI/index.js';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

banners.forEach(banner => {
    app.component(banner.name, banner);
});

UIComponents.forEach(component => {
    app.component(component.name, component);
});

app.mount('#app')
