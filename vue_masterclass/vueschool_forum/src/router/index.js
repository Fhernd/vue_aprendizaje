import { createRouter, createWebHistory } from 'vue-router'

import Category from '@/pages/Category.vue'
import Forum from '@/pages/Forum.vue'
import Home from '@/pages/Home.vue'
import Profile from '@/pages/Profile.vue'
import ThreadShow from '@/pages/ThreadShow.vue'
import ThreadCreate from '@/pages/ThreadCreate.vue'
import NotFound from '@/pages/NotFound.vue'

import sourceData from '@/data.json'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/me/edit',
		name: 'ProfileEdit',
		component: Profile,
		props: { edit: true },
	},
	{
		path: '/me',
		name: 'Profile',
		component: Profile,
		meta: { toTop: true, smoothScroll: true },
	},
	{
		path: '/category/:id',
		name: 'Category',
		component: Category,
		props: true,
	},
	{
		path: '/forum/:id',
		name: 'Forum',
		component: Forum,
		props: true,
	},
    {
        path: '/thread/create',
        name: 'ThreadCreate',
        component: ThreadCreate,
        props: true,
    },
	{
		path: '/thread/show/:id',
		name: 'ThreadShow',
		component: ThreadShow,
		props: true,
		beforeEnter: (to, from, next) => {
			const threadExist = sourceData.threads.find(
				(thread) => thread.id === to.params.id
			)

			if (threadExist) {
				return next()
			} else {
				next({
					name: 'NotFound',
					params: { pathMatch: to.path.substring(1).split('/') },
					query: to.hash,
				})
			}
		},
	},
	{
		path: '/:patchMatch(.*)*',
		name: 'NotFound',
		component: NotFound,
	},
]

export default createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		const scroll = {}

		if (to.meta.toTop) {
			scroll.top = 0
		}

		if (to.meta.smoothScroll) {
			scroll.behavior = 'smooth'
		}

		return scroll
	},
})
