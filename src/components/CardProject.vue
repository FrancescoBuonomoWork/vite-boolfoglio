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

    </div>

</template>

<style lang="scss" scoped>
.card{
    padding: 20px;
    border: 2px solid gray;
    border-radius: 10px;

}
</style>