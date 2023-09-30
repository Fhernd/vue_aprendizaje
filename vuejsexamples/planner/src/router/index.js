import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AddProject from '../views/AddProject.vue';
import EditProject from '../views/EditProject.vue';

const routes = [
    {
        path: '/homePage',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/addProject',
        name: 'AddProject',
        component: AddProject
    },
    {
        path: '/editProject/:id',
        name: 'EditProject',
        component: EditProject,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
