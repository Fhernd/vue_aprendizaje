<template>
    <span :title="humanFriendlyDate()">
        {{ diffForHumans() }}
    </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)

export default {
    props: {
        timestamp: {
            type: Number,
            required: true
        }
    },
    methods: {
        diffForHumans() {
            return dayjs(this.timestamp * 1000).fromNow()
        },
        humanFriendlyDate() {
            return dayjs(this.timestamp * 1000).format('MMMM D, YYYY h:mm A')
        }
    }
}
</script>

<style lang="">
    
</style>
