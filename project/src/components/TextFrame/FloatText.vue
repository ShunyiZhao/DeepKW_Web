<template>
    <div class="FloatingText">
        this is son---{{message}}
        <div class="titleDiv">
            <p>{{ message }}</p>
        <span>222{{ message }}334</span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['message'],
    data:function(){
        return{
            msg:'ok!'
        }
    },
    methods:{
    }
}
</script>

<style>
.FloatingText{
    margin: 0.3rem;
    width: 33%;
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