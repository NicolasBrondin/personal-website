<template>
    <div class="page-content">
        <h1>{{article.title}}</h1>
        <p>Ecrit par {{article.author}} {{from_now(article.date)}}
        <article v-html="html">
        </article>
    </div>
</template>

<script>
import showdown from 'showdown';
import moment from 'moment';
import article_1 from '../../data/articles/personal-notes-1.json';
const converter = new showdown.Converter();

export default {
    data: function() {
        return {
            article: article_1,
            html: converter.makeHtml(article_1.content)
        }
    },
    methods: {
        from_now: function(d){
            moment.locale('fr');
            return moment(d).fromNow();
        }
    }
}
</script>

<style>

p {
    margin-top: 5px;
}
article {
    text-align: left;
    margin-top: 30px;
}

 article>p, article>blockquote>p {
     color: black;
     text-align: left;
     font-size: 16px;
 }

 article>blockquote {
     border-left: 2px solid black;
     padding-left: 20px;
     font-style: italic;
     margin:0;
 }
</style>