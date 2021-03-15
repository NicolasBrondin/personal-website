<template>
    <li class="thumbnail" >
        <div class="thumbnail-cover" :style="'background-image: url('+data.cover+')'"></div>
        <div class="thumbnail-content">
            <span class="badge" v-if="data.is_finished">{{$t('FINISHED')}}</span>
            <span class="badge" v-if="data.is_featured">{{$t('FEATURED')}}</span>
            <span class="badge is-offer" v-if="data.is_offer">{{$t('OFFER')}}</span>
            <p class="thumbnail-title">{{data.title}} </p>
            <p class="thumbnail-description" v-for="subtitle in subtitles" :key="subtitle">{{subtitle}}</p>
            <img alt="logo" class="thumbnail-icon" :src="data.logo" v-if="data.logo"/>
            <img alt="course" class="thumbnail-icon" v-if="data.type === 'course'" src="~/assets/img/icons/cap.svg"/>
            <img alt="livre" class="thumbnail-icon" v-if="data.type === 'book'" src="~/assets/img/icons/book.svg"/>
            <img alt="microphone" class="thumbnail-icon" v-if="data.type === 'talk'" src="~/assets/img/icons/microphone.svg"/>
            <img alt="tombe" class="thumbnail-icon" v-if="data.type === 'dead'" src="~/assets/img/icons/grave.svg"/>
            <img alt="manette" class="thumbnail-icon" v-if="data.type === 'game'" src="~/assets/img/icons/gamepad.svg"/>
            <img alt="web" class="thumbnail-icon" v-if="data.type === 'web'" src="~/assets/img/icons/web.svg"/>
            <img alt="accreditation" class="thumbnail-icon" v-if="data.type === 'accreditation'" src="~/assets/img/icons/id-card.svg"/>
            <img alt="électronique" class="thumbnail-icon" v-if="data.type === 'electronics'" src="~/assets/img/icons/chip.svg"/>
            <div class="thumbnail-footer" v-if="data.url">
                <a :href="data.url" target="_blank" class="btn primary">{{data.url_text || $t('DISCOVER')}}</a>
            </div>
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
/*
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

    .thumbnail .thumbnail-cover {
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
    .thumbnail .thumbnail-content {
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
    }*/

    .thumbnail {
        display: inline-block;
        border-radius: 11px;
        width: 100%;
        max-width: 240px;
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
        text-align: left;
        vertical-align: top;
        margin: 10px;
        
        background: black;
    }

    .thumbnail-cover {
        width: 100%;
        height: 75px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        overflow: hidden;
        opacity: 0.75;
    }

    .thumbnail .thumbnail-content {
        position: relative;
        padding: 20px;
        background: white;
        min-height: 120px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-sizing: border-box;
        padding-bottom: 40px;
    }

    .thumbnail-icon {
        height: 40px;
        position: absolute;
        top:-60px;
        right: 0;
        left:0;
        margin: auto;
    }

    .thumbnail-footer {
        position: absolute;
        text-align: right;
        bottom: 10px;
        right: 10px;
    }

    .thumbnail .btn {
        padding: 5px 10px;
        font-size: 14px;
        border-radius: 20px;
        min-width: 50px;
        text-align: center;
    }

    .thumbnail-title {
        margin:0;
        margin-bottom:5px;
        font-weight: bold;
        font-size: 16px;
    }

    .thumbnail-description {
        margin:0;
        margin-bottom: 3px;
        font-size: 14px;
        color: rgba(0,0,0,0.5);
    }

    .thumbnail .badge {
        position: absolute;
        background: #f39c12;
        border-radius: 20px;
        color: white;
        top:-10px;
        left: 20px;
        font-size: 12px;
        height: 20px;
        padding: 0px 20px;
        line-height: 20px;
    }

    .thumbnail .badge.is-offer {
        background: #1abc9c;
    }
</style>