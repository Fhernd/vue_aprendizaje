<template>
    <form @submit.prevent="editProjectSubmit">
        <label>Title:</label>
        <br>
        <input type="text" v-model="title" required>
        <br>
        <label>Details:</label>
        <br>
        <textarea v-model="details" required></textarea>
        <br>
        <button>Update Project</button>
    </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            url: `http://localhost:3000/projects/${this.id}`
        }
    },
    mounted() {
        fetch(this.url)
            .then(res => res.json())
            .then(data => {
                this.title = data.title;
                this.details = data.details;
            })
            .catch(err => console.log(err.message))
            ;
    },
}
</script>
