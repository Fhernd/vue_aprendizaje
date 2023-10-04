<template>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>

        <post-list @posts="threadPosts" />
    </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
    name: 'ThreadShow',
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
        },
        threadPosts() {
            return this.posts.filter(p => p.threadId == this.id)
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