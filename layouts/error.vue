<template>
<section>
    <flag :text="$t('ERROR_404_FLAG')"/>
    <h1>{{$t('ERROR_404_TITLE')}}</h1>
    <img id="tnt" src="@/assets/img/icons/bomb.svg" width="200"/>
    <h3>{{$t('ERROR_404_TEXT')}}</h3>
</section>
</template>

<script>
import flag from "../components/flag.vue"
export default {
    mounted: function(){
        console.error(this.error);
    },
    components: {
        flag
    },
    props: ['error']
}
</script>

<style scoped>
    @keyframes vibrating {
        0% {transform: translate(0px,0px)}
        25% {transform: translate(3px,3px)}
        50% {transform: translate(0px,3px)}
        75% {transform: translate(-3px,-3px)}
        100% {transform: translate(3px,-3px)}
    }

    #tnt {
        margin-top: 20px;
        animation-name: vibrating;
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
    }
</style>