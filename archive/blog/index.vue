<template>
    <div class="page-content">
        <article-thumbnail 
        v-for="article in articles" 
        :key="article.id" 
        :date="article.date"
        :title="article.title"
        :slug="article.slug"
        :abstract="article.abstract"
        :author="article.author"
        :cover="article.cover"
        :tags="article.tags"
        />
    </div>
</template>

<script>
import article_thumbnail from '../../components/article-thumbnail.vue'

export default {
    data: function(){
        return {
            articles: [
                {
                    id: 1,
                    date: new Date(2019,1,5),
                    title: "Lorem ipsum doloris amet",
                    slug: "lorem-ipsum",
                    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
                    author: "Nicolas Brondin-Bernard",
                    cover: "https://images.unsplash.com/photo-1578422511109-d29c9df6772d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    tags: ["Nouveau"],
                    content: "Lorem Ipsum"
                },
                {
                    id: 2,
                    date: new Date(2019,1,5),
                    title: "Lorem ipsum doloris amet",
                    slug: "lorem-ipsum-2",
                    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
                    author: "Nicolas Brondin-Bernard",
                    cover: "https://images.unsplash.com/photo-1578422511109-d29c9df6772d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                    tags: ["Nouveau"],
                    content: "Lorem Ipsum"
                }
            ]
        }
    },
    components: {
        'article-thumbnail': article_thumbnail
    }
}
</script>