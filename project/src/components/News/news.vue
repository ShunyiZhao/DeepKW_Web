<template>
    <div id="news">
        <div class="top-section">
            <BaseNav ref="nav" :list="subList"></BaseNav>
            <div class="main">111</div>
        </div>
        <Basefooter class="fixed-bottom"></Basefooter>
    </div>
</template>
<script>
import BaseNav from '../Common/BaseNav.vue'
import Basefooter from '../Common/Basefooter.vue'
export default {
    components: {
        BaseNav,
        Basefooter
    },
    data:function(){
        return{
            name : 1,
            subList: ["Week", "Month"],
        }
    },
    methods:{
        getNav(){
            console.log(this.$refs.nav)
        }
    }
}
</script>
<style lang="css" scoped>
#news{
    height: inherit;
}
</style>