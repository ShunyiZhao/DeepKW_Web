<template>
    <div id="contact">
        <ContactNavi></ContactNavi>
        <div id="text1">
            <p>Contact Us</p>
        </div>
        <Map :seenMap="seenMapCont"></Map>
        <button id="button1" v-if="seenButton1" v-on:click="reverse">button1</button>
        <button id="button2" v-if="seenButton2" v-on:click="reverse2">button2</button>
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
            seenMapCont: false,
            seenButton1: true,
            seenButton2: false
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
            this.seenMapCont = false,
            this.seenButton1 = false,
            this.seenButton2 = true
        },
        reverse2: function(){
            this.seenMapCont = true,
            this.seenButton1 = true,
            this.seenButton2 = false
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

#button2 {
    position:absolute;
    top:89%;
    left:95%;
}
</style>