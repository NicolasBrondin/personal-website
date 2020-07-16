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
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.books.thumbnails" v-if="card_data" :key="index"/>
            </ul>
            <p>
                <nuxt-link class="btn" :to="localePath('projects')">{{$t('MORE_PROJECTS')}}</nuxt-link>
            </p>  
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
            <div class="feedbacks">
                <transition-group name="slide" mode="out-in">
                    <feedback :data="feedback" v-for="(feedback, index) in sections.customers.feedbacks" v-show="index === sections.customers.feedback_index" :key="feedback.name"/>
                </transition-group>
            </div>
        </section>
    </div>
</template>

<script>

    import flag from "../components/flag.vue"
    import chess from "../components/chess.vue"
    import feedback from "../components/feedback.vue"
    import thumbnail from "../components/thumbnail.vue"
    import cover_jaw from "@/assets/img/projects/jaw.jpg"
    import cover_fortnite from "@/assets/img/projects/conference.jpg"
    import cover_technical_ninja from "@/assets/img/projects/technical-ninja.jpg"
    import cover_blog from "@/assets/img/projects/blog.jpg"
    import photo_pierre_tostain from "@/assets/img/feedbacks/pierre-tostain.png"
    import photo_mina_tostain from "@/assets/img/feedbacks/mina-tostain.jpg"
    import photo_slyvain_guiheneuc from "@/assets/img/feedbacks/sylvain-guiheneuc.jpg"
    import photo_antoine_perigne from "@/assets/img/feedbacks/antoine-perigne.png"
    import photo_olympe_deroubaix from "@/assets/img/feedbacks/olympe-deroubaix.jpg"

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
                                title: this.$t("TECHNICAL_NINJA"),
                                is_featured: true,
                                subtitle: this.$t("TECHNICAL_NINJA_DESCRIPTION"),
                                url: "https://technical-ninja.cleverapps.io/",
                                url_text: this.$t("TRY"),
                                cover: cover_technical_ninja,
                                type: "web"
                            },
                            this.$i18n.locale === 'fr' ? {
                                title: "Ma newsletter",
                                is_featured: true,
                                subtitle: "Newsletter pour les développeurs web",
                                url: "/newsletter/",
                                cover: cover_jaw,
                                type: "book"
                            } : null,
                            
                            {
                                title: this.$t("FORTNITE"),
                                is_featured: false,
                                subtitle: this.$t("FORTNITE_DESCRIPTION"),
                                url: "/project/fortnite",
                                url_text: this.$t("BUY"),
                                cover: cover_fortnite,
                                type: "book"
                            },
                            {
                                title: "Blog",
                                subtitle: this.$t("LAST_BLOG_POST"),
                                url: this.$i18n.locale === 'fr' ? "https://blog.nicolas.brondin-bernard.com/tag/francais/" : "https://blog.nicolas.brondin-bernard.com/tag/english/",
                                url_text: this.$t("READ"),
                                cover: cover_blog,
                                type: "web"
                            }
                        ]
                    },
                    customers: {
                        feedback_index:0,
                        feedbacks: [
                            {
                                name: "Pierre Tostain",
                                position: "Ex-Directeur commercial chez My-Serious-Game",
                                text: "Ambassadeur de l'amélioration continue, véritable entrepreneur efficient et innovant, Nicolas est un vrai atout et une ressource de confiance sur laquelle miser.",
                                photo: photo_pierre_tostain
                            },
                            {
                                name: "Antoine Périgne",
                                position: "Fondateur de la Social Media Family",
                                text: "Pour avoir travaillé avec Nicolas sur plusieurs projets et avec des collègues qui ont fait la même chose, j'ai toujours eu des retours positifs sur son travail, tant sur la rapidité d'exécution que le prix et le produit final ! ",
                                photo: photo_antoine_perigne
                            },
                            {
                                name: "Olympe Deroubaix",
                                position: "Ex-campus manager chez Wild Code School",
                                text: "Nicolas a toujours su se rendre disponible et à l'écoute à chaque fois que nous avons collaboré ! Son expertise également fait de lui quelqu'un avec qui on a confiance de travailler.",
                                photo: photo_olympe_deroubaix
                            },{
                                name: "Mina Tostain-Mihailovic",
                                position: "Chargée de recrutement et mobilité chez Domitys",
                                text: "Nicolas a aidé notre service RH à mettre en place un outils innovant pour accompagner nos managers dans les entretiens de recrutement. Le support est fonctionnel, facile d'utilisation et surtout, Nicolas a été très à l'écoute et patient pour adapter le support à nos besoins. Merci à toi pour ton professionnalisme et ta grande réactivité !",
                                photo: photo_mina_tostain
                            },{
                                name: "Sylvain Guiheneuc",
                                position: "Illustrateur freelance",
                                text: "Nicolas est une personne avec qui il est extrêmement agréable de travailler. Une vision global et ludique des projets et toujours de très bon conseil.",
                                photo: photo_slyvain_guiheneuc
                            },
                        ]
                    }
                }
            };
        },
        mounted: function(){
            setInterval(function(){
                this.sections.customers.feedback_index = (this.sections.customers.feedback_index + 1) % this.sections.customers.feedbacks.length;
            }.bind(this),7000);
        },
        components: {
            "chess": chess,
            "flag": flag,
            "thumbnail": thumbnail,
            "feedback": feedback
        },
        methods: {
            
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

    .feedbacks {
        margin: 20px 0px;
        overflow: hidden;
        padding: 20px;
        box-sizing: border-box;
    }
    .slide-enter-active, .slide-leave-active {
        transition: opacity 1s, transform 1s;
    }

    .slide-leave-active {
        display: none;
    }

    .slide-enter-to {
        transform: translateY(0px);
        opacity: 1.0;
    }

    .slide-enter {
        transform: translateY(-100%);
        opacity: 0;
    }
</style>
