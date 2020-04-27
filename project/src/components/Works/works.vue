<template>
    <div id="works">
        <Baseheader></Baseheader>
        <LeftFrame></LeftFrame>
    </div>
</template>
<script>
import Basebanner from '../Common/Basebanner.vue'
import Baseheader from '../Common/Baseheader.vue'
import LeftFrame from '../TextFrame/leftFrame.vue'
export default {
    components: {
        Basebanner,
        Baseheader,
        LeftFrame,
    }
}
</script>
<style scoped>
#works {
    height: 100%;
    background-image: url(/assets/img/bg.png);
}

#header {
    height: 7%;
    background-color: black;
}

#LeftFrame {
    font-size: 20pt;
    color: white;
}


</style>