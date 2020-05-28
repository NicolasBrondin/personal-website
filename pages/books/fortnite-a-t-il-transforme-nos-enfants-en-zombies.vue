<template>
    <div class="page-content">
        <section>
            <flag text="Livre"/>
            <h1>Fortnite a-t-il transformé nos enfants en zombies ?</h1>
            <h2>Le guide complet pour parents démunis</h2>
            <a class="btn primary" @click="captureOutboundLink('https://www.amazon.fr/dp/B08929ZCPK');" href="https://www.amazon.fr/dp/B08929ZCPK" target="_blank">Acheter le livre <img src="@/assets/img/icons/shopping-cart.svg" height="20"/></a>
            <p class="newsletter-price" style="margin-bottom: 0px;">version papier à 9,99€</p>
            <div><img src="@/assets/img/books/fortnite.png" width="300"/></div>
            <p><strong>Vous n'en pouvez plus d'entendre parler de Fortnite</strong> toute la journée depuis des mois ?</p>
            <p>Vous avez l'impression que votre enfant est un zombie <strong>accroc aux jeux vidéo</strong> ? </p>
            <p>Nous allons découvrir ensemble quelles sont <strong>les raisons et les mécaniques qui poussent les enfants à jouer autant</strong>, tout en explorant les nombreuses <strong>solutions</strong> que vous pourrez mettre en place facilement pour <strong>calmer les tensions familiales</strong>.</p>
            <p>Ce livre est un ouvrage de vulgarisation du marché du jeu vidéo, de game design et de psychologie <strong>accessible à tous</strong> afin de mieux comprendre le monde vidéo-ludique qui nous entoure.</p>
            <a class="btn primary" @click="captureOutboundLink('https://www.amazon.fr/dp/B08929ZCPK');" href="https://www.amazon.fr/dp/B08929ZCPK" target="_blank">Acheter le livre <img src="@/assets/img/icons/shopping-cart.svg" height="20"/></a>
            <p class="newsletter-price">disponible sur Amazon</p>
            
            <img src="@/assets/img/ssl.png" height="30">
            <img src="@/assets/img/credit-cards.jpg" height="30">
        </section>
    </div>
</template>

<script>


    import flag from "../../components/flag.vue"
    
    export default {
        head: function(){
            return {
                title: this.$t("META_FORTNITE_TITLE"),
                meta: [
                    { hid: "twitter:title", name: "twitter:title", content: this.$t("META_FORTNITE_TITLE")},
                    { hid: "twitter:text:title", name: "twitter:text:title", content: this.$t("META_FORTNITE_TITLE")},
                    { hid: "og:title", name: "og:title", content: this.$t("META_FORTNITE_TITLE")},
                    { hid: "description", name: "description", content: this.$t("META_FORTNITE_DESCRIPTION")},
                    { hid: "og:description", name: "og:description", content: this.$t("META_FORTNITE_DESCRIPTION")},
                    { hid: "twitter:description", name: "twitter:description", content: this.$t("META_FORTNITE_DESCRIPTION")},
                    { hid: "keywords", name: "keywords", content: this.$t("META_FORTNITE_KEYWORDS")},
                    { hid: "twitter:image", name: "twitter:image", content: "https://nicolas.brondin-bernard.com/cover-fortnite.jpg?t=3" },
                    { hid: "og:image", property: "og:image", name: "og:image", content: "https://nicolas.brondin-bernard.com/cover-fortnite.jpg?t=3" }
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
            captureOutboundLink: function(url) {
                this.$ga.event({
                    eventCategory: 'outbound',
                    eventAction: 'click',
                    eventLabel: url
                });
            },
            show_love: function(){
                this.love = true;
            }
        }
    }
</script>

<style scoped>   
    .btn.primary {
        margin-top: 20px;
    }
    p.newsletter-price {
        font-size: 14px;
        margin: 5px 0px;
        margin-bottom: 20px;
        color: rgba(0,0,0,0.5);
    }
</style>
