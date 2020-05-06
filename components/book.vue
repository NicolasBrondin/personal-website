<template>
    <div class="book">
        <div class="book-cover"></div>
        <div class="book-pages"></div>
        Accueil
    </div>
</template>

<style scoped>
    .book {
        display: inline-block;
        background: maroon;
        border-radius: 3px;
        padding: 3px 20px;
        padding-right: 30px;
        color: white;
        position: relative;
    }
    .book::before {
        position: absolute;
        content: "";
        height: 100%;
        width: 3px;
        background: rgba(255,255,225,0.3);
        top: 0;
        left: 10px;
    }
    .book::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 5px;
        border-left: 3px solid rgba(255,255,225,0.3);
        border-right: 3px solid rgba(255,255,225,0.3);
        top: 0;
        right: 10px;
    }

    .book-cover {
        position: absolute;
        width: 100%;
        height: 30px;
        background: maroon;
        top:-30px;
        left: 10px;
        transform: skew(-30deg);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        opacity: 0.9;
    }
    .book-pages {
        position: absolute;
        width: 18px;
        height: 100%;
        background: grey;
        top:-17px;
        right: -18px;
        transform: skewY(-60deg);
        opacity: 0.9;
    }
</style>