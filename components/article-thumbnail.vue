<template>
    <article>
        <div class="cover" :style="'background-image: url('+cover+')'"></div>
        <div class="content">
            <p class="title"><nuxt-link :to="'/blog/'+slug">{{title}}</nuxt-link></p>
            <p class="author">Ecrit par {{author}} <span class="date">{{from_now(date)}}</span></p>
            <p class="abstract">{{abstract}}</p>
            <ul class="tags">
                <li class="tag" v-for="tag in tags" :key="tag">{{tag}}</li>
            </ul>
            <div class="footer">
                <nuxt-link :to="'/blog/'+slug">Lire l'article</nuxt-link>
            </div>
        </div>
        
    </article>
</template>

<script>
import moment from 'moment';

export default {
    methods: {
        from_now: function(d){
            moment.locale('fr');
            return moment(d).fromNow();
        }
    },
    props: ["cover", "title", "abstract", "author", "date", "tags", "slug"]
}
</script>

<style scoped>

    p {
        margin: 0;
    }

    article {
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
        border-radius: 10px;
        overflow: hidden;
        text-align: left;
        margin-bottom: 20px;
    }

    .cover {
        height: 100px;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .content {
        padding: 20px;
        box-sizing: border-box;
    }

    .title {
        font-size: 20px;
        color: rgba(0,0,0,0.8);
    }

    .title a {
        text-decoration: none;
        font-weight: normal;
    }

    .author {
        margin-bottom: 10px;
    }

    .abstract {
        margin-bottom: 10px;
        font-size: 14px;
        color: rgba(0,0,0,0.5);
    }

    ul.tags {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .tag {
        display: inline-block;
        font-size: 12px;
        color: white;
        //background: #3498db;
        background: rgba(0,0,0,0.2);
        border-radius: 100px;
        padding: 5px 10px;
    }

    .footer {
        text-align: right;

    }

    .footer a {
        display: inline-block;
        color: white;
        background: #3498db;
        border-radius: 100px;
        padding: 5px 20px;
        text-decoration: none;
        font-size: 16px;
        font-weight: normal;
    }
</style>