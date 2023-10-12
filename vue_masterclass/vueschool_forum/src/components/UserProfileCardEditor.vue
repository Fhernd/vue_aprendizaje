<template>
    <div class="profile-card">
        <p class="text-center">
            <img :src="user.avatar" :alt="`{user.name} profile picture`" class="avatar-xlarge img-update">
        </p>

        <div class="form-group">
            <input type="text" class="form-input text-lead text-bold" placeholder="Username">
        </div>
        <div class="form-group">
            <input type="text" class="form-input text-lead" placeholder="Full Name">
        </div>
        <div class="form-group">
            <label for="user_bio">Bio</label>
            <textarea class="form-input" placeholder="Write a few words about yourself" id="user_bio"></textarea>
        </div>
        <div class="stats">
            <span>{{ user.postsCount }} posts</span>
            <span>{{ user.threadsCount }} threads</span>
        </div>

        <hr />

        <div class="form-group">
            <label for="user_website" class="form-label">Website</label>
            <input type="text" class="form-input" placeholder="https://example.com" id="user_website" autocomplete="off">
        </div>

        <div class="btn-group space-between">
            <button class="btn-ghost">Cancel</button>
            <button type="submit" class="submit">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="">
    
</style>
