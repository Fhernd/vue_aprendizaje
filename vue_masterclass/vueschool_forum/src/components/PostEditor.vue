<template>
    <div class="col-full">
        <form @submit.prevent="addPost" class="form">
            <div class="form-group">
                <textarea v-model="newPostText" class="form-input" rows="10" cols="30"></textarea>
            </div>
            <div class="form-actions">
                <button class="btn-blue">Submit post</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newPostText: ''
        }
    },
    methods: {
        addPost() {
            const postId = '#' + Math.random().toString(36).substr(2, 9)

            const post = {
                id: postId,
                text: this.newPostText,
                publishedAt: Math.floor(Date.now() / 1000),
                userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
            }

            this.$emit('save-post', { post })

            this.newPostText = ''
        }
    }
}
</script>

<style lang="">
    
</style>
