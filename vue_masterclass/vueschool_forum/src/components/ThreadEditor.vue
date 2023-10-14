<template>
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
			<button @click.prevent="$emit('cancel')" class="btn btn-ghost">
				Cancel
			</button>
			<button class="btn btn-blue" type="submit" name="Publish">
				Publish
			</button>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			content: '',
		}
	},
	methods: {
		save() {
			this.$emit('save', { title: this.title, content: this.content })
		},
	},
}
</script>

<style lang=""></style>
