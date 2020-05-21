<template>
    <div id="groups">
        <div class="border-side"></div>
            <div class="sub-block">
                <img id="a2" src="/assets/img/About/about2.png" alt="centerAbout">
                <img id="a4" src="/assets/img/About/about2.png" alt="centerAbout">
                <img id="a6" src="/assets/img/About/about2.png" alt="centerAbout">
            </div>
            <div class="block">
                <img id="a1" src="/assets/img/About/about2.png" alt="centerAbout">
            </div>
            <div class="sub-block">
                <img id="a3" src="/assets/img/About/about2.png" alt="centerAbout">
                <img id="a5" src="/assets/img/About/about2.png" alt="centerAbout">
                <img id="a7" src="/assets/img/About/about2.png" alt="centerAbout">
            </div>
        <div class="border-side"></div>            
    </div>
</template>

<script>
export default {
    template:'#groups',
    data:function(){
        return{
        }
    }
}
</script>

<style scoped>
#groups{
    height: 100%;
    display: flex;
}
.block{
    width: 33%;
    height: inherit;
    position: relative;
}
.sub-block{
    width: 25%;
    height: inherit;
    position: relative;
}
.border-side{
    width: 8.5%;
}
#a1 {
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#a2 {
    max-width: 50%;
    max-height: 50%;
    position: absolute;
    top: 20%;
    left: 70%;
    transform: translate(-20%,-70%);
}
#a3 {
    max-width: 65%;
    max-height: 65%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-20%,-50%);
}
#a4 {
    max-width: 80%;
    max-height: 80%;
    position: absolute;
    top: 95%;
    left: 120%;
    transform: translate(-90%,-90%);
}
#a5 {
    max-width: 75%;
    max-height: 75%;
    position: absolute;
    top: 95%;
    left: 80%;
    transform: translate(-55%,-75%);
}
#a6 {
    max-width: 85%;
    max-height: 85%;
    position: absolute;
    top: 45%;
    left: 40%;
    transform: translate(-45%,-40%);
}
#a7 {
    max-width: 87%;
    max-height: 97%;
    position: absolute;
    top: 65%;
    left: 65%;
    transform: translate(-95%,-65%);
}
</style>

