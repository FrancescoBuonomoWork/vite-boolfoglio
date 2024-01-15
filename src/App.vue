<script>
import axios from 'axios';

export default{
  data(){
    return{
      projects: [],
      BASE_URL :'http://localhost:8000/api'
    }
  },
  methods:{

    FetchProjects(){

      axios.get(`${this.BASE_URL}/projects`)
      .then((res)=>{
        console.log(res)
        this.projects = res.data.results
      })
     
    }
  },
  created(){
    this.FetchProjects()
  }
}


</script>

<template>

  <div v-for="project in projects" :key="project.id">
    {{ project.name }}
  </div>
 
</template>

<style lang="scss">
@use 'style/general.scss';

</style>
