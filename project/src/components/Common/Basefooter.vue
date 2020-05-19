<template>
    <div id="footer">
        <div id="translation" class="mx-5">EN</div>
        <div id="content" class="mx-2">
            <font-awesome-icon :icon="['fab', 'weibo']" class="mx-2 icon alt"/>
            <font-awesome-icon :icon="['fab', 'weixin']" class="mx-2 icon alt"/>
            <font-awesome-icon :icon="['fab', 'github']" class="mx-2 icon alt"/>
        </div>
        <div id="copyright" class="mx-5">© DeepKW 2020. All Rights Reserved.</div>
    </div>
</template>
<style scoped>
#footer{
    padding: 1rem 0;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color:white;
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