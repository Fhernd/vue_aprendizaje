<template>
    <div class="homePage">
        <FilterNav @filterChange="current = $event" :current="current"></FilterNav>
        <div v-if="projects.length">
            <div v-for="project in filteredProjects" :key="project.id">
                <SingleProject 
                    :project="project"
                    @delete="deleteMethod"
                    @complete="completeMethod"
                ></SingleProject>
                <NavBar />
            </div>
        </div>
    </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue';
import FilterNav from '../components/FilterNav.vue';

export default {
    name: 'HomePage',
    components: {
        SingleProject,
        FilterNav
    },
    data: function() {
        return {
            projects: [],
            current: 'all'
        }
    },
    mounted() {
        fetch('http://localhost:3000/projects')
            .then(res => res.json())
            .then(data => this.projects = data)
            .catch(err => console.log(err.message))
            ;
    },
}
</script>
