<template>
	<div class="col-full push-top">
		<h1>
			Editing <i>{{ thread.title }}</i>
		</h1>

		<ThreadEditor :title="thread.title" :text ="text" @save="save" @cancel="cancel" />
	</div>
</template>

<script>
import ThreadEditor from '@/components/ThreadEditor.vue'

export default {
	components: {
		ThreadEditor,
	},
	computed: {
		thread() {
			return this.$store.thread.forums.find((f) => f.id == this.threadId)
		},
	},
	props: {
		threadId: {
			type: String,
			required: true,
		},
	},
	methods: {
		async save({ title, text }) {
			const thread = await this.$store.dispatch('createThread', {
				forumId: this.forum.id,
				title,
				text
			})

			this.$router.push({ name: 'ThreadShow', params: { id: thread.id } })
		},
		cancel() {
			this.$router.push({ name: 'Forum', params: { id: this.forum.id } })
		},
	},
}
</script>

<style></style>
