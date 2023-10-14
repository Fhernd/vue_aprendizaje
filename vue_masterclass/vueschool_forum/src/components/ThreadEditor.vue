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
			<button @click.prevent="$email('cancel')" class="btn btn-ghost">Cancel</button>
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
    save() {
        const thread = {
            title: this.title,
            content: this.content,
        }

        this.$emit('save', { thread })

        this.title = ''
        this.content = ''
    },
}
</script>

<style lang=""></style>
