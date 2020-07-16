<template>
    <div class="page-content">
        <section>
            <flag text="Newsletter"/>
            <h1>Pour ne jamais rater le meilleur article de la semaine</h1>
            <p>Deviens membre de la <strong>newsletter</strong> et reçois un à deux emails <strong>par semaine</strong>. Je te partage <strong>mes articles</strong>, des news de mes projets mais aussi des <strong>offres spéciales</strong> sur mes formations !</p>
            <p>Je te parlerai de tout, en toute transparence, <strong>sans bullshit</strong> !</p>
            <div id="gift-container">
                <img src="@/assets/img/icons/gift.svg" id="gift" @click="show_love" v-if="!love" height="50"/>
                <img src="@/assets/img/icons/love.svg" id="heart" v-if="love" height="50"/>
            </div>
            <a class="btn primary" href="https://brondin-bernard.us10.list-manage.com/subscribe?u=d7cceffbbbbee6e35dbba982f&id=1f2bfa9dc9" target="_blank">Devenir membre<!--<img src="@/assets/img/icons/crown.svg" height="20"/>--></a>
            <p class="newsletter-price">pour <strong>0€/mois</strong>, c'est gratuit !</p>
        </section>
        
        
        
    </div>
</template>

<script>


    import flag from "../components/flag.vue"
    
    export default {
        head: function(){
            return {
                title: this.$t("META_NEWSLETTER_TITLE"),
                meta: [
                    { hid: "twitter:title", name: "twitter:title", content: this.$t("META_NEWSLETTER_TITLE")},
                    { hid: "twitter:text:title", name: "twitter:text:title", content: this.$t("META_NEWSLETTER_TITLE")},
                    { hid: "og:title", name: "og:title", content: this.$t("META_NEWSLETTER_TITLE")},
                    { hid: "description", name: "description", content: this.$t("META_NEWSLETTER_DESCRIPTION")},
                    { hid: "og:description", name: "og:description", content: this.$t("META_NEWSLETTER_DESCRIPTION")},
                    { hid: "twitter:description", name: "twitter:description", content: this.$t("META_NEWSLETTER_DESCRIPTION")},
                    { hid: "keywords", name: "keywords", content: this.$t("META_NEWSLETTER_KEYWORDS")},
                    { hid: "twitter:image", name: "twitter:image", content: "https://nicolas.brondin-bernard.com/cover-newsletter.jpg?t=3" },
                    { hid: "og:image", property: "og:image", name: "og:image", content: "https://nicolas.brondin-bernard.com/cover-newsletter.jpg?t=3" }
                ]
            };
        },
        data: function(){
            return {
                love: false
            };
        },
        components: {
            "flag": flag
        },
        methods: {
            show_love: function(){
                this.love = true;
            }
        }
    }
</script>

<style scoped>
@keyframes giggle{
        0% { transform: rotate(0deg)}
        10% { transform: rotate(5deg)}
        20% { transform: rotate(-5deg)}
        30% { transform: rotate(0deg)}
        99% { transform: rotate(0deg)}
    }
@keyframes beat{
        0% { transform: scale(1.0)}
        10% { transform: scale(0.9)}
        20% { transform: scale(1.1)}
        30% { transform: scale(1.0)}
        99% { transform: scale(1.0)}
    }
    #gift-container {
        margin-bottom: 10px;
    }
    #gift {
        cursor: pointer;
        animation: giggle 2s ease-in-out 1s infinite;
    }
    #heart {
        animation: beat 1s ease-in-out 1s infinite;
    }
    p.newsletter-price {
        font-size: 14px;
        margin: 5px 0px;
        margin-bottom: 20px;
        color: rgba(0,0,0,0.5);
    }
</style>
