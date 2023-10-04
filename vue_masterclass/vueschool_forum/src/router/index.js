import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '@/components/PageHome.vue'
import PageThreadShow from '@/components/PageThreadShow.vue'
import NotFound from '@/components/NotFound.vue'

import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/show/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
        beforeEnter: (to, from, next) => {
            const threadExist = sourceData.threads.find(thread => thread.id === to.params.id);

            if (threadExist) {
                return next();
            } else {
                next({ 
                    name: 'NotFound',
                    params: { pathMatch: to.path.substring(1).split('/') },
                    query: to.hash
                });
            }
        }
    },
    {
        path: '/:patchMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
});
