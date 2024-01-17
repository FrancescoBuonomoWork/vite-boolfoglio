<script>
import axios from 'axios';

export default{
    props:{
        slug :String
    },
    data(){
        return{
            type: null,
            projects: [],
            BASE_URL: 'http://localhost:8000/api',
        }
    },
    methods:{
        fetchTypeProjects(){
            axios.get(`${this.BASE_URL}/types/${this.slug}`)
            .then(res =>{
                console.log(res)
            })
            
        }
    },
    created() {
        console.log(this.slug);
        this.fetchTypeProjects()
    }
}

</script>

<template>
    <div class="container">
        Type
        
    </div>


</template>

<style lang="scss">

</style>