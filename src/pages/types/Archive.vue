<script>
import axios from 'axios';

export default{
    props:{
        slug :String
    },
    data(){
        return{
            type: '',
            projects: [],
            BASE_URL: 'http://localhost:8000/api',
        }
    },
    methods:{
        fetchTypeProjects(){
            axios.get(`${this.BASE_URL}/types/${this.slug}`)
            .then(res =>{
                console.log(res.data);
                this.type = res.data.type;
                this.projects = res.data.type.projects
            })
            
        }
    },
    created() {
        console.log(this.slug,this.type,this.projects);
        this.fetchTypeProjects()
    }
}

</script>

<template>
    <div class="container">
        <h2 class="title">{{ type.name }}</h2>

        <ul>
            <li class="title-project" v-for="project in projects" :key="project.id">{{ project.name }}</li>
        </ul>
        
    </div>


</template>

<style lang="scss">

</style>