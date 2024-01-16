<script>

export default{
    props: {
        slug :String
    },
    data(){
        return{
            
        }
    },
    created(){
    //    console.log(this.slug);
    console.log(this.$route.params.slug);
    }
}
</script>

<template>
<div class="container">
    {{ slug }}
</div>
</template>

<style lang="scss" scoped>

</style>