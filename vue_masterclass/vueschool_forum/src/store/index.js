import { createStore } from 'vuex'

import sourceData from '@/data.json'

export default createStore({
    state: {
        ...sourceData,
        authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
    },
    getters: state => {
        const user = state.users.find(user => user.id === state.authId)

        if (!user) return null

        return {
            ...user,
            posts() {
                return state.posts.filter(post => post.userId === user.id)
            },
            postsCount() {
                return this.posts.length
            },
            threads() {
                return state.threads.filter(thread => thread.userId === user.id)
            },
            threadsCount() {
                return this.threads.length
            }
        }
    },
    actions: {
        createPost(context, post) {
            post.id = 'greatPost' + Math.random();

            context.commit('setPost', { post });
            context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId });
        }
    },
    mutations: {
        setPost(state, { post }) {
            state.posts.push(post);
        },
        appendPostToThread(state, { postId, threadId}) {
            const thread = state.threads.find(thread => thread.id === threadId)
            thread.posts.push(postId);
        }
    }
});
