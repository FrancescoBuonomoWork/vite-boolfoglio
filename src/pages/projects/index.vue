<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';


export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      BASE_URL: 'http://localhost:8000/api',
      next_page_url: null,
      prev_page_url: null,
      loadingProjects: false,
      inputSearchVal: '',
      technologies: []
    };
  },
  methods: {
    parseResult(res) {
      console.log(res);
      this.projects = res.data.results.projects.data;
      this.next_page_url = res.data.results.next_page_url;
      this.prev_page_url = res.data.results.prev_page_url;

    },
    fetchProjects() {

      this.loadingProjects = true;

      axios.get(`${this.BASE_URL}/projects?type_id=2&technoligies[]=1&technoligies[]=9`)
        .then((res) => {

          this.parseResult(res);
          this.loadingProjects = false;
          this.technologies = res.data.results.technologies;
        });
    },
    nextFetch() {
      this.loadingProjects = true;
      // console.log(this.next_page_url);
      axios.get(`${this.next_page_url}`)
        .then((res) => {
          this.parseResult(res);
          this.loadingProjects = false;
        });
    },
    prevFetch() {
      this.loadingProjects = true;
      axios.get(`${this.prev_page_url}`)
        .then((res) => {
          this.parseResult(res);
          this.loadingProjects = false;
        });
    },

  },
  created() {
    this.fetchProjects();
  },
  computed: {

    // searchProjects(){
    //   console.log(this.inputSearchVal)
    // }
    searchProjects() {
      return this.projects.filter((project) => {
        return project.name.toLowerCase().includes(this.inputSearchVal.toLowerCase());
      })
    }
  }

}


</script>

<template>
  <!-- <div v-for="project in projects" :key="project.id">
    {{ project.name }}
  </div> -->
  <div class="container">
    <h1>I progetti :</h1>
    <input type="text" placeholder="cerca per nome" v-model="inputSearchVal" @keyup.enter="searchProjects()">

      <!-- questa select potrebbe servire per filtrare in base alle tecnologie -->
      <!-- <div>
        <template v-for="tech in technologies">
          <input  type="checkbox" :id="tech.slug" :name="tech.slug" :value="tech.id">
          <label :for="tech.slug">{{ tech.name }}</label>


        </template>
       <button @click="">Cerca</button>
        

      </div> -->
    <div class="grid">

      <h1 v-show="loadingProjects">Caricamento...</h1>
      <ProjectCard v-show="!loadingProjects" v-for="project in searchProjects" :project="project" :key="project.id" />

    </div>
    <div class="arrow-wrapper">
      <span @click="prevFetch()" v-show="prev_page_url" class="arrow"><font-awesome-icon
          :icon="['fas', 'chevron-left']" /></span>
      <span @click="nextFetch()" v-show="next_page_url" class="arrow"><font-awesome-icon
          :icon="['fas', 'chevron-right']" /></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.arrow-wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  .arrow {
    cursor: pointer;
    padding: 20px;

  }
}</style>