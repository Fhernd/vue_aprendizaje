<template>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>

        <post-list :posts="threadPosts" />

        <div class="col-full">
            <form>
                <div class="form-group">
                    <textarea :value="newPostText" @input="newPostText = $event.target.value" class="form-input" rows="10" cols="30"></textarea>
                </div>
                <div class="form-actions">
                    <button class="btn-blue">Submit post</button>
                </div>
            </form>
        </div>
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
            newPostText: ''
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