<template>
    <div v-for="thread in threads" :key="thread.id" class="col-large push-top">
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
</template>

<script>
import sourceData from '@/data.json'

export default {
    data() {
        return {
            threads: sourceData.threads,
            posts: sourceData.posts,
            users: sourceData.users
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

<style scoped></style>
