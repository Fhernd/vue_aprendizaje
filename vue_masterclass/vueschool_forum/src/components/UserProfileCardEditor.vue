<template>
    <div class="profile-card">
        <form @submit.prevent="save">
            <p class="text-center">
                <img :src="user.avatar" :alt="`{user.name} profile picture`" class="avatar-xlarge img-update">
            </p>

            <div class="form-group">
                <input type="text" class="form-input text-lead text-bold" placeholder="Username"
                    v-model="activeUser.username">
            </div>
            <div class="form-group">
                <input type="text" class="form-input text-lead" placeholder="Full Name" v-model="activeUser.name">
            </div>
            <div class="form-group">
                <label for="user_bio">Bio</label>
                <textarea class="form-input" placeholder="Write a few words about yourself" id="user_bio"
                    v-model="activeUser.bio"></textarea>
            </div>
            <div class="stats">
                <span>{{ user.postsCount }} posts</span>
                <span>{{ user.threadsCount }} threads</span>
            </div>

            <hr />

            <div class="form-group">
                <label for="user_website" class="form-label">Website</label>
                <input type="text" class="form-input" placeholder="https://example.com" id="user_website" autocomplete="off"
                    v-model="activeUser.website">
            </div>

            <div class="form-group">
                <label for="user_location" class="form-label">Location</label>
                <input type="text" class="form-input" id="user_location" autocomplete="off" v-model="activeUser.location">
            </div>

            <div class="btn-group space-between">
                <button class="btn-ghost" @click="cancel">Cancel</button>
                <button type="submit" class="btn-blue">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            activeUser: { ...this.user }
        }
    },
    methods: {
        save() {
            this.$store.dispatch('updateUser', { ...this.activeUser })
            this.$router.push({ name: 'Profile' })
        },
        cancel() {
            this.$router.push({ name: 'Profile' })
        }
    }
}
</script>

<style lang="">
    
</style>
