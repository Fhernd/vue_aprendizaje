<template>
    <div v-if="thread" class="col-large push-top">
        <h1>{{ thread.title }}</h1>

        <div class="post" v-for="postId in thread.posts" :key="postId">
            <div class="user-info">
                <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>

                <a href="#">
                    <img :src="userById(postById(postId).userId).avatar" alt="Avatar" class="avatar-large">
                </a>

                <p class="desktop-only text-small">100 posts</p>
            </div>

            <div class="post-content">
                <div>
                    <p>
                        {{ postById(postId).text }}
                    </p>
                </div>
            </div>

            <div class="post-date text-faded">
                <p>Posted on {{ postById(postId).publishedAt }}</p>
            </div>
        </div>
    </div>
    <div v-else class="col-full text-center">
        <h1>This thread does not exit</h1>
        <router-link :to="{name: 'Home'}">Read other threads</router-link>
    </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            threads: sourceData.threads,
            posts: sourceData.posts,
            users: sourceData.users
        }
    },
    computed: {
        thread() {
            return this.threads.find(t => t.id == this.id)
        }
    },
    methods: {
        postById(id) {
            return this.posts.find(p => p.id == id)
        },
        userById(id) {
            return this.users.find(u => u.id == id)
        }
    }
}
</script>

<style scoped>
    
</style>