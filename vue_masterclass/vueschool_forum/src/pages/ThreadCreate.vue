<template>
	<div class="col-full push-top">
		<h1>
			Create new thread in <i>{{ forum.name }}</i>
		</h1>

		<form @submit.prevent="save">
			<div class="form-group">
				<label for="thread_title">Title:</label>
				<input
					type="text"
					class="form-input"
					id="thread_title"
					autocomplete="off"
					v-model="title"
				/>
			</div>

			<div class="form-group">
				<label for="thread_content">Content:</label>
				<textarea
					class="form-input"
					id="thread_content"
					rows="10"
					cols="140"
					v-model="content"
				></textarea>
			</div>

			<div class="btn-group">
				<button @click="cancel" class="btn btn-ghost">Cancel</button>
				<button class="btn btn-blue" type="submit" name="Publish">
					Publish
				</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	computed: {
		forum() {
			return this.$store.state.forums.find((f) => f.id == this.forumId)
		},
	},
	props: {
		forumId: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			title: '',
			content: '',
		}
	},
	methods: {
		async save() {
			const thread = await this.$store.dispatch('createThread', {
				forumId: this.forum.id,
				title: this.title,
				content: this.content,
			})

			this.$router.push({ name: 'ThreadShow', params: { id: thread.id } })
		},
		cancel() {
			this.$router.push({ name: 'Forum', params: { id: this.forum.id } })
		}
	},
}
</script>

<style lang=""></style>
