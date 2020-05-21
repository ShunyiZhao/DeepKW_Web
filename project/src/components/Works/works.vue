<template>
    <div id="works">
        <div class="container d-flex">
            <BaseNav :list="subList"></BaseNav>
            <div id="mainbody" class="d-flex flex-row justify-content-around flex-wrap">
                <FloatingText :message="data1" :title="title1"></FloatingText>
                <FloatingText :message="data2"></FloatingText>
                <FloatingText :message="data1"></FloatingText>
                <FloatingText :message="data2"></FloatingText>
                <FloatingText :message="data1"></FloatingText>
                <FloatingText :message="data2"></FloatingText>
            </div>
        </div>
        <Basefooter class="fixed-bottom"></Basefooter>
    </div>
</template>
<script>
import BaseNav from '../Common/BaseNav.vue'
import Basefooter from '../Common/Basefooter.vue'
import LeftFrame from '../TextFrame/leftFrame.vue'
import FloatingText from '../TextFrame/FloatText.vue'

export default {
    data(){
        return{
            title1:"title1",
            data1: "datafromother",
            data2: "datafrofather",
            subList: ['Our Works', 'Other Works']
        }
    },
    components: {
        BaseNav,
        Basefooter,
        LeftFrame,
        FloatingText
    }
}
</script>
<style scoped>
.container{
    padding: 0;
    margin: 0;
    height: 90%;
}
#works {
    height: 100%;
    /*test comments in CSS*/
    background-image: url(/assets/img/bg.png);
}
#header {
    height: 7%;
    background-color: black;
}
#navigation {
    font-size: 20pt;
    color: white;
    background-color: black;
    width: 25%;
    height: 100%;
}
#mainbody{
    width: 75%;
    height: 100%;
}
.float {
    color: white;
}
</style>