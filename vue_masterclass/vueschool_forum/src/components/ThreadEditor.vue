<template>
	<form @submit.prevent="save">
		<div class="form-group">
			<label for="thread_title">Title:</label>
			<input
				type="text"
				class="form-input"
				id="thread_title"
				autocomplete="off"
				v-model="form.title"
			/>
		</div>

		<div class="form-group">
			<label for="thread_content">Content:</label>
			<textarea
				class="form-input"
				id="thread_content"
				rows="10"
				cols="140"
				v-model="form.text"
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
			form: {
				title: this.title,
				text: this.text
			},
		}
	},
	methods: {
		save() {
			this.$emit('save', { ...this.form })
		},
	},
	props: {
		title: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang=""></style>
