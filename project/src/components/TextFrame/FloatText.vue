<template>
    <div id="FloatingText" class="FloatingDes">
    234
    {{message}}
    555
        <div class="titleDiv">
        <p>{{ message }}</p>
        <span>222{{ message }}334</span>
        </div>
    </div>
</template>

<script>
var FloatingText = {
    props: ['message'],
    template:'#FloatingText',
    data:function(){
        return{
            msg:'ok!'
        }
    },
    methods:{
    }
}
export default {
    FloatingText
}
</script>

<style>
.FloatingDes {
    width: 200px;
    height: 300px;
}

.titleDiv{
    font-size: 13px;
    color: white;
}

.descriptionDiv{
    font-size: 10px;
    color: white;
}

</style>