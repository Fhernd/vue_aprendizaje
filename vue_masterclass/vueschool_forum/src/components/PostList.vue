<template>
    <div class="post" v-for="post in posts" :key="post.id">
        <div class="user-info">
            <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

            <a href="#">
                <img :src="userById(post.userId).avatar" alt="Avatar" class="avatar-large">
            </a>

            <p class="desktop-only text-small">100 posts</p>
        </div>

        <div class="post-content">
            <div>
                <p>
                    {{ post.text }}
                </p>
            </div>
        </div>

        <div class="post-date text-faded">
            <p>Posted on <app-date :timestamp="post.publishedAt" /></p>
        </div>
    </div>
</template>

<script>
import AppDate from '@/components/AppDate.vue'

import sourceData from '@/data.json'

export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: {
        AppDate
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
