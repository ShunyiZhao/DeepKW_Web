<template>
    <div id="footer">
        <div id="translation"></div>
        <div id="content">/>
        </div>
        <div id="copyright">copyright</div>
    </div>
</template>
<style scoped>
#footer{
    padding: 1rem 0;
    background-color: black;
    display: flex;
    flex-direction: row;
}
</style>
<script>
var footer = {
    template:'#footer',
    data:function(){
        return{
            msg:'ok!'
        }
    },
    methods:{
    }
}
export default {
    footer
}
</script>