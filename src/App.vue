<script>
import ProjectIndex from './pages/projects/index.vue';
import HeaderPage from './components/AppHeader.vue';


export default{
    components: {ProjectIndex,HeaderPage},
    data() {
        return {
       
        };
    },
    methods: {
    },
    created() {
     
    },
    
}


</script>

<template>

<!-- <ProjectIndex/> -->
<HeaderPage/>
<RouterView></RouterView>
  
 
</template>

<style lang="scss">
@use 'style/general.scss';


</style>
