<template>
    <div id="news">
        <div id="mainHome" class="d-flex">
            <div class="px-5 border flex-grow-1">
                <BaseNav ref="nav"></BaseNav>
            </div>
            <div id="main" class="p-2 border d-flex justify-content-center align-items-center">
                111
            </div>
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
            name : 1
        }
    },
    methods:{
        getNav(){
            console.log(this.$refs.nav)
        }
    }
}
</script>