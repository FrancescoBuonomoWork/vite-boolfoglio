<script>

export default{
    // name: ProjectCard,
    props:{
        project :{
            typeof : Object,
            required : true
        }
    },
    data(){
        return{

        }
    }
}



</script>

<template>
    <div class="card">
        
        <h2 class="card-title">{{ project.name }}</h2>
        
        <router-link v-if="project.type" :to="{ name : 'type.archive', params:{ slug:project.type.slug}}">{{ project.type.name }}</router-link>
        <p v-else>-</p>
        <!-- <p v-if="project.type">{{ project.type.name  }}</p> -->
        <ul v-if="project.technologies">
            <li v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</li>
        </ul>
        
        <router-link class="link" :to="{ name: 'projects.show', params: { slug: project.slug} }">
            vedi altro...
        </router-link>
    </div>

</template>

<style lang="scss" scoped>
.card{
    padding: 20px;
    border: 2px solid gray;
    border-radius: 10px;
    .link{
        color: cornflowerblue;
        font-size: 18px;
    }
}
</style>