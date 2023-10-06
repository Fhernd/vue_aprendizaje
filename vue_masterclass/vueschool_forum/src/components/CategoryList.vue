<template>
    <ForumList v-for="category in categories" :key="category.id" :forums="geetForumsForCategory(category)" :category-name="category.name">

    </ForumList>
</template>

<script>
import ForumList from './ForumList.vue'

import sourceData from '../data.json'

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
        geetForumsForCategory(category) {
            return sourceData.forums.filter(forum => forum.categoryId === category.id)
        }
    }
}
</script>

<style lang="">
    
</style>
