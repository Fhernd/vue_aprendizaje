<template>
    <div class="post" v-for="post in posts" :key="post.id">
        <div class="user-info">
            <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

            <a href="#">
                <img :src="userById(post.userId).userId).avatar" alt="Avatar" class="avatar-large">
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
</template>

<script>
import sourceData from '@/data.json'

export default {
    props: {
        thread: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            users: sourceData.users
        }
    },
    methods: {
        userById(id) {
            return this.users.find(u => u.id == id)
        }
    }
}
</script>

<style lang="">
    
</style>
