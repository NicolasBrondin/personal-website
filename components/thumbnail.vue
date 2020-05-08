<template>
    <li class="thumbnail" :class="{'disabled': data.is_finished}">
        <div class="project-cover" :style="'background-image: url('+data.cover+')'"></div>
        <div class="project-content">
            <span class="badge" v-if="data.is_finished">{{$t('FINISHED')}}</span>
            <a :href="data.url" target="_blank">{{data.title}} </a>
            <p v-for="subtitle in subtitles" :key="subtitle">{{subtitle}}</p>
            <img :src="data.logo" v-if="data.logo"/>
            <img v-if="data.type === 'book'" src="~/assets/img/icons/book.svg"/>
            <img v-if="data.type === 'talk'" src="~/assets/img/icons/microphone.svg"/>
            <img v-if="data.type === 'dead'" src="~/assets/img/icons/grave.svg"/>
            <img v-if="data.type === 'game'" src="~/assets/img/icons/gamepad.svg"/>
            <img v-if="data.type === 'web'" src="~/assets/img/icons/web.svg"/>
            <img v-if="data.type === 'accreditation'" src="~/assets/img/icons/id-card.svg"/>
            <img v-if="data.type === 'electronics'" src="~/assets/img/icons/chip.svg"/>
        </div>
    </li>
</template>

<script>
export default {
    computed: {
        subtitles: function(){
            return Array.isArray(this.data.subtitle) ? this.data.subtitle : [this.data.subtitle]
        }
    },
    props: ['data']
}
</script>

<style scoped>

    .thumbnail {
        margin-bottom: 15px;
        width: 100%;
        margin-left: 0;
        box-sizing: border-box;
        border-radius: 5px;
        color: white;
        text-shadow: 0px  0px 5px black;
        font-size: 20px;
        text-align: left;
        position: relative;
        background: black;
    }

    .thumbnail a {
        font-weight: bold;
    }

    .thumbnail .project-cover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        opacity: 0.8;
        border-radius: 5px;
    }
    .thumbnail .project-content {
        position: relative;
        z-index: 2;
        padding: 20px 20px;
        padding-right: 75px;
    }

    .thumbnail .badge {
        position: absolute;
        background: #f39c12;
        border-radius: 20px;
        color: white;
        top:-10px;
        left: 10px;
        font-size: 12px;
        height: 20px;
        padding: 0px 20px;
        line-height: 20px;
    }



    .thumbnail a {
        text-decoration: none;
        //background: rgba(0,0,0,0.5);
        //border-radius: 5px;
        padding: 0px 5px;
        background: rgba(255,255,255,0.8);
        color: rgba(0,0,0,0.7);
        text-shadow: none;
        //border-radius: 5px;
        margin-bottom: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .thumbnail p {
        margin:0;
        color: white;
        font-size: 14px;
        margin-top: 3px;
    }

    .thumbnail img {
        top:calc(50% - 25px);
        height: 50px;
        position: absolute;
        right: 20px;
        
        border-radius: 5px;
    }

    @media screen and (max-width: 350px){

    .thumbnail {
        font-size: 15px;
    }
}
</style>