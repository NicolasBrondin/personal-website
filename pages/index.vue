<template>
    <div class="page-content">
        <section v-if="$i18n.locale === 'fr'">
            <p style="text-align: justify;">J'accompagne les <strong>entreprises de toutes tailles</strong> dans leurs projets numériques en apportant mon expertise sur le <strong>développement web</strong>, ou bien en pilotant le projet de <strong>A à Z</strong>.</p>
            <p style="text-align: justify;">De la phase d'idéation jusqu'au <strong>déploiement</strong>, en passant par la réalisation des maquettes graphiques et l'accompagnement sur <strong>l'expérience utilisateur</strong>, je prends soin de vos projets. </p>
        </section>
        <section v-if="$i18n.locale === 'en'">
            <p style="text-align: justify;">I help companies of <strong>any sizes</strong> with their digital projects by bringing a <strong>web development expertise</strong>, or by driving the project from <strong>A to Z</strong>.</p>
            <p style="text-align: justify;">From the ideation phase to <strong>deployment</strong>, also doing graphic design and working on <strong>user experience</strong>, I take care of your projects. </p>
        </section>
        <section>
            <flag :text="$t('NEWS')"/>
            <ul class="projects-list">
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.books.thumbnails" :key="index"/>
            </ul>
            <a class="btn" href="mailto:nicolas@brondin.com">{{$t('SHOOT_EMAIL')}}<img src="~/assets/img/icons/paper-plane.svg" height="20"/></a>
                
        </section>
        <section>
            <flag :text="$t('COLLABORATION')"/>
            <div class="well">
                <a class="customer"><img src="@/assets/img/customers/klassroom.png"/></a>
                <a class="customer"><img src="@/assets/img/customers/my-serious-game.png"/></a>
                <a class="customer"><img src="@/assets/img/customers/prototyper.png"/></a>
                <a class="customer"><img src="@/assets/img/customers/domitys.jpg"/></a>
                <a class="customer"><img src="@/assets/img/customers/winesee.png"/></a>
                <a class="customer"><img src="@/assets/img/customers/sanofi.jpg"/></a>
                <a class="customer"><img src="@/assets/img/customers/carrefour.jpg"/></a>
                <a class="customer"><img src="@/assets/img/customers/systeme-u.png"/></a>
                <a class="customer"><img src="@/assets/img/customers/bouygues-construction.png"/></a>
                <a class="customer"><img src="@/assets/img/customers/ministere-interieur.jpg"/></a>
            </div>
        </section>
    </div>
</template>

<script>

    import flag from "../components/flag.vue"
    import chess from "../components/chess.vue"
    import thumbnail from "../components/thumbnail.vue"
    import cover_fortnite from "@/assets/img/projects/fortnite.jpg"

    export default {
        head: function(){
            return {
                title: this.$t("META_INDEX_TITLE"),
                meta: [
                    { hid: "twitter:title", name: "twitter:title", content: this.$t("META_INDEX_TITLE")},
                    { hid: "twitter:text:title", name: "twitter:text:title", content: this.$t("META_INDEX_TITLE")},
                    { hid: "og:title", name: "og:title", content: this.$t("META_INDEX_TITLE")},
                    { hid: "description", name: "description", content: this.$t("META_INDEX_DESCRIPTION")},
                    { hid: "og:description", name: "og:description", content: this.$t("META_INDEX_DESCRIPTION")},
                    { hid: "twitter:description", name: "twitter:description", content: this.$t("META_INDEX_DESCRIPTION")},
                    { hid: "keywords", name: "keywords", content: this.$t("META_INDEX_KEYWORDS")}
                ]
            };
        },
        data: function(){
            return {
                enigma_step: -1,
                sections: {
                    books: {
                        thumbnails: [
                            {
                                title: "Fortnite",
                                subtitle: this.$t("FORTNITE_DESCRIPTION"),
                                url: "https://shop.brondin-bernard.com/produit/ebook-fortnite-a-t-il-transforme-nos-enfants-en-zombies/",
                                cover: cover_fortnite,
                                type: "book"
                            },
                            {
                                title: "Blog",
                                subtitle: this.$t("LAST_BLOG_POST"),
                                url: "https://blog.nicolas.brondin-bernard.com/last/fr/",
                                cover: cover_fortnite,
                                type: "web"
                            }
                        ]
                    }
                }
            };
        },
        components: {
            "chess": chess,
            "flag": flag,
            "thumbnail": thumbnail
        },
        methods: {
            show_next_enigma: function(step){
                console.log(this.enigma_step);
                if(this.enigma_step < step){
                    this.enigma_step = step;
                }
                switch(this.enigma_step){
                    case 0: {
                        var event = new CustomEvent('show_popup',{detail: this.enigma_step});
                        document.dispatchEvent(event);
                        break;
                    }
                    case 1: {
                        
                        var event = new CustomEvent('show_popup',{detail: this.enigma_step});
                        document.dispatchEvent(event);
                        break;
                    }
                    case 2: {
                        
                        var event = new CustomEvent('show_popup',{detail: this.enigma_step});
                        document.dispatchEvent(event);
                        break;
                    }
                    //Comme sur une pizza, on peut manger la reine
                }
                
            }
        }
    }
</script>

<style scoped>
    .well {
        border-radius: 10px;
        box-shadow: inset 0 0 10px 5px rgba(0,0,0,0.1);
        padding: 20px;
        box-sizing: border-box;
        background: #ecf0f1;
    }
    .customer {
        display: inline-block;
        background: white;
        border-radius: 200px;
        overflow: hidden;
        height: 50px;
    }
    @media screen and (max-width: 500px){
        .customer {
            width: 100%;
        }
    }
    .customer img{
        height:100%;
    }
</style>
