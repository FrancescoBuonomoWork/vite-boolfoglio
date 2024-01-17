<script>
import axios from 'axios';
export default{
    props: {
        slug :String
    },
    data(){
        return{
            BASE_URL: 'http://localhost:8000/api',
            project: {}
        }
    },
    methods:{
        fetchProject(){
            // console.log('fetch')
            axios.get(`${this.BASE_URL}/projects/${this.slug}`)
            .then(res=>{
                console.log(res.data);
                this.project = res.data.project;
            }).catch((error)=> {
                console.log('post not found:',error)
                if(error.response.status === 404){
                    this.$router.push({name: 'not-found'})
                }
            })
        }
    },
    created(){
        this.fetchProject(),
    //    console.log(this.slug);
    console.log(this.$route.params.slug);
    }
}
</script>

<template>
<div class="container">
    <!-- {{ slug }} -->
    <div class="card">
        <h1>{{ project?.name }}</h1>
        <p v-if="project.type">{{ project?.type.name }}</p>

        <ul v-if="project.technologies">
            <li v-for="tech in project.technologies">{{ tech.name }}</li>
        </ul>
    </div>
</div>
</template>

<style lang="scss" scoped>

</style>