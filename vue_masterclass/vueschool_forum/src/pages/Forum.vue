<template>
    <div class="col-full push-top">
        <div class="forum-header">
            <div class="forum-details">
                <h1>Cooking</h1>
                <p class="text-lead">Discuss your passion for food and cooking</p>
            </div>
            <a href="#" class="btn-green btn-small">Start a thread</a>
        </div>
    </div>
    
    <div class="col-full">
        <ThreadList />
    </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue'

export default {
    components: {
        ThreadList
    }
}
</script>

<style lang="">
    
</style>
