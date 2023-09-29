<template>
    <form @submi.prevent="projectSubmit">
        <label>Title:</label>
        <br>
        <input type="text" v-model="title" required>
        <br>
        <label>Details:</label>
        <br>
        <textarea v-model="details" required></textarea>
        <br>
        <button>Add Project</button>
    </form>
</template>


