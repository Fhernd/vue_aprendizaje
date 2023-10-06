<template>
    <div class="forum-list">
        <h2 class="list-title">
            <a href="#">Forums</a>
        </h2>

        <div class="forum-listing" v-for="forum in   forums  " :key="forum.id">
            <div class="forum-details">
                <router-link :to="{ name: " Forum", params: {id: forum.id}}" class="text-large">
                    {{ form.name }}
                </router-link>
                <p>{{ forum.description }}</p>
            </div>
            <div class="threads-count">
                <p><span class="count">{{ forum.threads.length }}</span> {{ forum.threads.length > 1 ? 'threads' : 'thread'
                    }}</p>
            </div>

            <div class="last-thread">
                <img src="#" alt="" class="avatar">
                <div class="thread-details">
                    <a href="#">A##</a>
                    <p class="text-xsmall">By <a href="#">A###</a>, a month ago</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        forums: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="">
    
</style>
