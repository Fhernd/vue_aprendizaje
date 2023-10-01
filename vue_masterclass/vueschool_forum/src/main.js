import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import PageHome from './components/PageHome.vue'
import PageThreadShow from './components/PageThreadShow.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread',
        name: 'ThreadShow',
        component: PageThreadShow
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

const forumApp = createApp(App);
forumApp.use(router);
forumApp.mount('#app');
