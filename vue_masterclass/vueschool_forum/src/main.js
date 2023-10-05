import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'

const forumApp = createApp(App);
forumApp.use(router);

const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/);
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName
        .replace(/^.+\//, '')
        .replace(/\.\w+$/, '');

    forumApp.component(componentName, componentConfig.default || componentConfig);
});

forumApp.mount('#app');
