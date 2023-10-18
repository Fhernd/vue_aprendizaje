import { createStore } from 'vuex'

import sourceData from '@/data.json'

export default createStore({
	state: {
		...sourceData,
		authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3',
	},
	getters: {
		authUser: (state) => {
			const user = state.users.find((user) => user.id === state.authId)

			if (!user) return null

			return {
				...user,
				get posts() {
					return state.posts.filter((post) => post.userId === user.id)
				},
				get postsCount() {
					return this.posts.length
				},
				get threads() {
					return state.threads.filter(
						(thread) => thread.userId === user.id
					)
				},
				get threadsCount() {
					return this.threads.length
				},
			}
		},
	},
	actions: {
		createPost({ commit, state }, post) {
			post.id = 'greatPost' + Math.random()
			post.publishedAt = Math.floor(Date.now() / 1000)
			post.userId = state.authId
			commit('setPost', { post })
			commit('appendPostToThread', {
				postId: post.id,
				threadId: post.threadId,
			})
		},
		async createThread(
			{ commit, state, dispatch },
			{ text, title, forumId }
		) {
			const id = 'greatPost' + Math.random()
			const userId = state.authId
			const publishedAt = Math.floor(Date.now() / 1000)
			const thread = { forumId, title, publishedAt, userId, id }

			commit('setThread', { thread })

			dispatch('createPost', { text, threadId: thread.id })
			commit('appendThreadToForum', { forumId, threadId: thread.id })
			commit('appendThreadToUser', { userId, threadId: thread.id })

			return state.threads.find((thread) => thread.id === id)
		},
		updateUser({ commit }, user) {
			commit('setUser', { user, userId: user.id })
		},
		async updateThread({ commit, state }, { title, text, id }) {
			const thread = state.threads.find((thread) => thread.id === id)
			const post = state.posts.find((post) => post.id === thread.posts[0])

			const newThread = { ...thread, title }
			const newPost = { ...post, text }

			commit('setThread', { thread: newThread })
			commit('setPost', { post: newPost })

			return newThread
		},
	},
	mutations: {
		setPost(state, { post }) {
			const index = state.posts.findIndex((item) => item.id === post.id)

			if (post.index && index !== -1) {
				state.posts[index] = post
			} else {
				state.posts.push(post)
			}
		},
		setThread(state, { thread }) {
			const index = state.threads.findIndex(
				(item) => item.id === thread.id
			)

			if (post.index && index !== -1) {
				state.threads[index] = post
			} else {
				state.threads.push(thread)
			}
		},
		setUser(state, { user, userId }) {
			const userIndex = state.users.findIndex(
				(user) => user.id === userId
			)

			state.users[userIndex] = user
		},
		appendPostToThread(state, { postId, threadId }) {
			const thread = state.threads.find(
				(thread) => thread.id === threadId
			)
			thread.posts = thread.posts || []
			thread.posts.push(postId)
		},
		appendThreadToForum(state, { forumId, threadId }) {
			const forum = state.forums.find((forum) => forum.id === forumId)
			forum.threads = forum.threads || []
			forum.threads.push(threadId)
		},
		appendThreadToUser(state, { userId, threadId }) {
			const user = state.users.find((user) => user.id === userId)
			user.threads = user.threads || []
			user.threads.push(threadId)
		},
	},
})
