<template>
    <div id="about">
        <div class="top-section">
            <BaseNav></BaseNav>
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
    }
}
</script>
<style scoped>
#about {
    background-image: url(/assets/img/About/about_bg1.png);
    background-repeat:no-repeat;
    height: inherit;
}
</style>