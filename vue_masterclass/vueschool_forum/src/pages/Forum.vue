<template>
	<div class="col-full push-top">
		<div class="forum-header">
			<div class="forum-details">
				<h1>{{ forum.name }}</h1>
				<p class="text-lead">{{ forum.description }}</p>
			</div>
			<router-link
				:to="{ name: 'ThreadCreate', params: { forumId: forum.id} }"
				class="btn-green btn-small"
				>Start a thread</router-link
			>
		</div>
	</div>

	<div class="col-full">
		<ThreadList :threads="threads" />
	</div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue'

export default {
	components: {
		ThreadList,
	},
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	computed: {
		forum() {
			return this.$store.state.forums.find((f) => f.id == this.id)
		},
		threads() {
			return this.$store.state.threads.filter((t) => t.forumId == this.id)
		},
	},
}
</script>

<style lang=""></style>
