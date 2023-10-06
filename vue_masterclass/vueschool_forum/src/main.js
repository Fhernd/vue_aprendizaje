import { createApp } from 'vue'

import App from './App.vue'
import router from '@/router'

import store from '@/store'

const forumApp = createApp(App);
forumApp.use(router);

forumApp.use(store);

const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/);
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName
        .replace(/^.+\//, '')
        .replace(/\.\w+$/, '');

    forumApp.component(componentName, componentConfig.default || componentConfig);
});

forumApp.mount('#app');
