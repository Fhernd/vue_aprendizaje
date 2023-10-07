import { createStore } from 'vuex'

import sourceData from '@/data.json'

export default createStore({
    state: sourceData,
    actions: {
        createPost(context, post) {
            context.commit('setPost', { post });
            context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId });
        }
    },
    mutations: {
        setPosts(state, post) {
            state.posts.push(post);
        },
        appendPostToThread(state, { postId, threadId}) {
            const thread = state.threads.find(thread => thread.id === threadId)
            thread.posts.push(postId)
        }
    }
});
