<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';


export default{
    components: {ProjectCard},
    data() {
        return {
            projects: [],
            BASE_URL: 'http://localhost:8000/api'
        };
    },
    methods: {
        FetchProjects() {
            axios.get(`${this.BASE_URL}/projects`)
                .then((res) => {
                console.log(res);
                this.projects = res.data.results.data;
            });
        }
    },
    created() {
        this.FetchProjects();
    },
    
}


</script>

<template>

  <!-- <div v-for="project in projects" :key="project.id">
    {{ project.name }}
  </div> -->
  <div class="container">
    <h1>I progetti :</h1>
    <div class="grid">

      <ProjectCard v-for="project in projects" :project="project" :key="project.id"/>

    </div>
  </div>
  
 
</template>

<style lang="scss" scoped>




</style>