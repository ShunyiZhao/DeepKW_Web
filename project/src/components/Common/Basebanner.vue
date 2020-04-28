<template>
    <div id="Basebanner">
        <router-link to="/home">Home</router-link><br />
        <router-link to="/news">News</router-link><br />
        <router-link to="/works">Works</router-link><br />
        <router-link to="/contact">Contact Us</router-link><br />
        <router-link to="/about">About</router-link><br />
    </div>
</template>
<script>
var Basebanner = {
    template:'#Basebanner',
    data:function(){
        return{
            msg:'ok!'
        }
    },
    methods:{
    }
}
export default {
    Basebanner
}
</script>
<style scoped>
</style>