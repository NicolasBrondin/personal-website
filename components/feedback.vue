<template>
    <div class="feedback">
        <img alt="photo" :src="data.photo"/>
        <div class="feedback-content">
            
            <p class="feedback-author-name">{{data.name}}</p>
            <p class="feedback-author-position">{{data.position}}</p>
            <p class="feedback-text">{{data.text}}</p>
            <div class="feedback-author">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"]
}
</script>

<style scoped>

    .feedback {
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    img {
        top:calc(50% - 35px);
        left:0;
        position: absolute;
        width: 70px;
        border-radius: 50%;
    }

    .feedback-content{
        position: relative;
        margin-left: 85px;
        
        border-radius: 10px;
        box-sizing: border-box;
    }

    .feedback-text {
        margin: 0;
        font-size: 14px;
        text-align: left;
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
        
        border-radius: 10px;
        padding: 10px;
    }

    .feedback-author-name,.feedback-author-position {
        text-align: left;
        font-size: 12px;
        font-weight: 600;
        margin: 0;
        margin-bottom: 3px;
        opacity: 0.3;
    }

    .feedback-author-position {
        top: -30px;
        opacity: 1.0;
    }

    @media screen and (max-width: 500px){
        .feedback-author-name,.feedback-author-position {
            text-align: center;
            margin-bottom: 5px;
        }
        img {
        top:-40px;
        left:calc(50% - 20px);
        position: absolute;
        width: 35px;
        border-radius: 50%;
    }
        .feedback-content{
            margin-left: 0px;
        }
    }

</style>