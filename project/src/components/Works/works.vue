<template>
    <div id="works">
        <Baseheader></Baseheader>
        <LeftFrame id="navigation"></LeftFrame>

        <FloatingText class="float_1" message="data1"></FloatingText>
        <FloatingText class="float_2" message="897"></FloatingText>
    </div>
</template>
<script>
import Basebanner from '../Common/Basebanner.vue'
import Baseheader from '../Common/Baseheader.vue'
import LeftFrame from '../TextFrame/leftFrame.vue'
import FloatingText from '../TextFrame/FloatText.vue'

export default {
    data(){
        return {
            data1: "datafromother",
        };
    },
    components: {
        Basebanner,
        Baseheader,
        LeftFrame,
        FloatingText,
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

#navigation {
    font-size: 20pt;
    color: white;
    background-color: black;
    width: 20%;
    height: 93%;
}

.float_1 {
    position: absolute;
    left: 30%;
    top: 30%;
    color: white;
}

.float_2 {
    position: absolute;
    left: 50%;
    top: 30%;
    color: white;
}

</style>