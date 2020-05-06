<template>
    <div class="flag">
        <div class="left-part">
            <div class="top-triangle"></div>
            <div class="bottom-triangle"></div>
        </div><div class="flag-content">{{text}}</div><div class="right-part">
            <div class="top-triangle"></div>
            <div class="bottom-triangle"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['text']
}
</script>
<style scoped>

/* FLAG */

    .flag {
        position: relative;
        margin-top: 40px;
        text-align: center;
        margin-bottom: 20px;
        white-space: nowrap;
    }

    .flag .left-part{
        position: relative;
        display: inline-block;
        margin-top: -10px;
        margin-right: -10px;
        height: 48px;
        width:40px;
        vertical-align: top;
    }

    .flag .left-part::before{
        content: "";
        position: absolute;
        top:0;
        right: 0px;
        z-index: 2;
        height: 0;
        width:0;
        border-top:10px solid transparent;
        border-bottom: 0px solid transparent;
        border-right:10px solid #f02f2f;
    }

    .flag .left-part .top-triangle{
        position: absolute;
        width: 0;
        height: 0;
        right:0;
        border-top:0px solid transparent;
        border-bottom: 40px solid transparent;
        border-right:40px solid #ff4343;
    }

    .flag .left-part .bottom-triangle{
        position: absolute;
        top: 10px;
        right:0;
        width: 0;
        height: 0;
        border-top: 40px solid transparent;
        border-bottom: 0px solid transparent;

        border-right: 40px solid #ff4343;
    }

    .flag .flag-content {
        background: #ff5a5a;
        position: relative;
        display: inline-block;
        height: 48px;
        line-height: 48px;
        color: white;
        font-family: Roboto;
        font-size: 20px;
        padding-left: 20px;
        padding-right: 20px;
        z-index: 2;
    }

    .flag .right-part{
        margin-top: -10px;
        margin-left: -10px;
        height: 48px;
        width:40px;
        vertical-align: top;
        display: inline-block;
        position: relative;
    }

    .flag .right-part::before{
        content: "";
        position: absolute;
        top:0;
        left: 0px;
        z-index: 2;
        height: 0;
        width:0;
        border-top:10px solid transparent;
        border-bottom: 0px solid transparent;
        border-left:10px solid #f02f2f;
    }

    .flag .right-part .top-triangle{
        position: absolute;
        width: 0;
        height: 0;
        left:0;
        border-top: 0px solid transparent;
        border-bottom: 40px solid transparent;

        border-left:40px solid #ff4343;
    }

    .flag .right-part .bottom-triangle{
        position: absolute;
        top: 10px;
        left:0;
        width: 0;
        height: 0;
        border-top: 40px solid transparent;
        border-bottom: 0px solid transparent;

        border-left:40px solid #ff4343;
    }
</style>