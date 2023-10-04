<template>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>

        <post-list :posts="threadPosts" />
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue'

import sourceData from '@/data.json'

export default {
    name: 'ThreadShow',
    components: {
        PostList
    },
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
        }
    },
    computed: {
        thread() {
            return this.threads.find(t => t.id == this.id)
        },
        threadPosts() {
            return this.posts.filter(p => p.threadId == this.id)
        }
    }
}
</script>

<style scoped>
    
</style>