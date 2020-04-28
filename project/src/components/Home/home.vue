<template>
    <div id="home" class="d-flex flex-column">
        <Baseheader></Baseheader>
        <div id="mainHome" class="row">
            <div class="col-3 border border-warning">
                <Basebanner class="flex-basis"></Basebanner>
            </div>
            <div id="title" class="col-9 border border-warning">
                <img src="/assets/img/title.png" alt="titile">
            </div>
        </div>
        <Basefooter class="fixed-bottom"></Basefooter>
    </div>
</template>
<script>
import Baseheader from '../Common/Baseheader.vue'
import Basebanner from '../Common/Basebanner.vue'
import Basefooter from '../Common/Basefooter.vue'
export default {
    components: {
        Baseheader,
        Basebanner,
        Basefooter
    }
}
</script>
<style scoped>
img {
    width: 100%;
    height: 100%;
}
/*test cite in CSS*/
#home {
    background-image: url(/assets/img/bg.png);
    background-repeat:no-repeat;
    height: 100%;
    display: flex;
}
#header{
    height: 7%;
}
#mainHome{
    height: 85%;
}
#footer{
    height: 8%;
}
#title{
    height: 100%;
}
#title_img{
    height: 100%;
}
#Basebanner {
    font-size: 40px;
    color: white;
}
</style>