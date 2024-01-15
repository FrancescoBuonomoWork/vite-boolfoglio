<script>

export default{
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
       <p v-if="project.type.name">{{ project.type.name }}</p>
       <ul v-if="project.technologies">
        <li v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</li>
       </ul>

    </div>

</template>

<style lang="scss" scoped>
.card{
    padding: 20px;
    border: 2px solid gray;
    border-radius: 10px;

}
</style>