<template>
    <div class="col-large push-top">
        <h1>{{ thread.title }}</h1>

        <router-link :to="{ name: 'ThreadEdit', params: { id: thread.id } }" class="btn-green btn-small">
            Edit Thread </router-link>

        <post-list :posts="threadPosts" />

        <post-editor @save="addPost" />
    </div>
</template>

<script>
import PostEditor from '@/components/PostEditor.vue'
import PostList from '@/components/PostList.vue'

export default {
    name: 'ThreadShow',
    components: {
        PostList,
        PostEditor
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        thread() {
            return this.threads.find(t => t.id == this.id)
        },
        threadPosts() {
            return this.posts.filter(p => p.threadId == this.id)
        },
        threads() {
            return this.$store.state.threads
        },
        posts() {
            return this.$store.state.posts
        }
    },
    methods: {
        addPost(eventData) {
            const post = {
                ...eventData.post,
                threadId: this.id
            }

            this.$store.dispatch('createPost', post)
        }
    },
}
</script>

<style scoped></style>