import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

const forumApp = createApp(App);
forumApp.use(router);
forumApp.mount('#app');
