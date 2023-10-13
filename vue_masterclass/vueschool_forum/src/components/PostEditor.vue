<template>
    <div class="col-full">
        <form @submit.prevent="save" class="form">
            <div class="form-group">
                <textarea v-model="text" class="form-input" rows="10" cols="30"></textarea>
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
            text: ''
        }
    },
    methods: {
        save() {
            const post = {
                text: this.text
            }

            this.$emit('save', { post })

            this.text = ''
        }
    }
}
</script>

<style lang="">
    
</style>
