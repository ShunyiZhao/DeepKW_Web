<template id="banner">
    <div>
        <router-link to="/home">Home</router-link>
        <router-link to="/news">News</router-link>
        <router-link to="/works">Works</router-link>
        <router-link to="/contact">Contact Us</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>
<script>
var banner = {
    template:'#banner',
    data:function(){
        return{
            msg:'ok!'
        }
    },
    methods:{
    }
}
export default {
    banner
}
</script>