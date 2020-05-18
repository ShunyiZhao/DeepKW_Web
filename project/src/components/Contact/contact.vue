<template>
    <div id="contact">
        <ContactNavi></ContactNavi>
    </div>
</template>

<script>
import Basebanner from '../Common/Basebanner.vue'
import ContactNavi from '../TextFrame/ContactNavi.vue'
export default {
    components: {
        Basebanner,
        ContactNavi
    }
}
</script>

<style scoped>
#contact {
    height: 100%;
    width: 100%;
    background-image:url(/assets/img/Contact/contact_background_little.jpg);
}

#navigation {
    font-size: 20pt;
    font-weight: 700;
    color: black;
    background-color: white;
    width: 20%;
    height: 100%;
    line-height: 150%;
}
</style>