<template>
    <div id="contact">
        <ContactNavi></ContactNavi>
        <div id="text1">
            <p>Contact Us</p>
        </div>
        <Map :seenMap="seenMatCont"></Map>
        <button id="button1" v-on:click="reverse">button1</button>
        <Basefooter class="fixed-bottom"></Basefooter>
    </div>
</template>

<script>
import Basebanner from '../Common/Basebanner.vue'
import Basefooter from '../Common/Basefooter.vue'
import ContactNavi from '../TextFrame/ContactNavi.vue'
import Map from "../ContactModules/Map.vue"


export default {
    data: function(){
        return {
            seenMatCont: true
        }
    },
    components: {
        Basebanner,
        Basefooter,
        ContactNavi,
        Map,
    },
    methods:{
        reverse: function(){
            this.seenMatCont = !this.seenMatCont
        }
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

#text1 {
    position: absolute;
    top: 5%;
    left: 22%;
    color: black;
    font-size: 50pt;
    font-weight:400;
}

#map {
    position:absolute;
    top: 20%;
    left: 30%;
}

#button1 {
    position:absolute;
    top:50%;
    left:80%;
}
</style>