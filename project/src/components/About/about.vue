<template>
    <div>
        <BaseNav></BaseNav>
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