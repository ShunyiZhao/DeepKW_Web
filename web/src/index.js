//export
import Vue from 'Vue'
import Child from '../src/components/a.vue'
import '../src/assets/css/style.css'

new Vue({
    el: '#app',
    components: {
        'my-component': Child
    }
});