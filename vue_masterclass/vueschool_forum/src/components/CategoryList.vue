<template>
    <ForumList v-for="category in categories" :key="category.id" :forums="getForumsForCategory(category)" :title="category.name" :category-id="category.id">

    </ForumList>
</template>

<script>
import ForumList from './ForumList.vue'

export default {
    components: {
        ForumList
    },
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    methods: {
        getForumsForCategory(category) {
            return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
        }
    }
}
</script>

<style lang="">
    
</style>
