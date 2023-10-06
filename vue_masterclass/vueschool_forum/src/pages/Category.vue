<template>
    <h1>{{ category.name }}</h1>
    <ForumList :title="category.name" :forums="getForumsForCategory(category)" />
</template>

<script>
import ForumList from '@/components/ForumList.vue'

import sourceData from '../data.json'

export default {
    components: {
        ForumList
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    computed: {
        category() {
            console.log(sourceData.categories.find(category => category.id === this.id));
            return sourceData.categories.find(category => category.id === this.id)
        }
    },
    methods: {
        getForumsForCategory(category) {
            return sourceData.forums.filter(forum => forum.categoryId === category.id)
        }
    }
}
</script>

<style lang="">
    
</style>
