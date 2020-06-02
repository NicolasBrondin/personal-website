<template>
    <div class="page-content">
        <section>
            <h1>Fortnite a-t-il transformé nos enfants en zombies ?</h1>
            <h2>Le guide complet pour parents démunis</h2>
            
            <div>
                <a @click="captureOutboundLink('https://www.amazon.fr/dp/B08929ZCPK');" href="https://www.amazon.fr/dp/B08929ZCPK" target="_blank">
                    <img id="book-cover" src="@/assets/img/books/fortnite.png"/>
                </a>
            </div>
            
            <p><strong>Vous n'en pouvez plus d'entendre parler de Fortnite</strong> toute la journée ?</p> 
            <p>Vous avez l'impression que votre enfant est devenu <strong>accroc aux jeux vidéo</strong> ? </p>
            <p><strong>Vous ne savez plus quoi faire</strong> pour retrouver le calme et la sérénité à la maison ? </p>
            <img src="@/assets/img/teenager.svg" class="illustration-teenager"/>
            <img src="@/assets/img/random.svg" class="illustration-arrow"/>
            <img src="@/assets/img/teenager-2.svg" class="illustration-teenager"/>
            <h1>Rejoignez le club des parents apaisés !</h1>
            
            <p>Grâce à ce livre, vous retrouverez <strong>une relation stable avec votre enfant</strong>.</p>
            <p>Vous comprendrez les mécaniques derrière <strong>le phénomène de Fortnite</strong>.</p>
            <p>Vous découvrirez <strong>des solutions simples</strong> à mettre en place à la maison !</p>
            <!--<p style="text-align: justify;">Nous allons découvrir ensemble quelles sont <strong>les raisons et les mécaniques qui poussent les enfants à jouer autant</strong>, tout en explorant les nombreuses <strong>solutions</strong> que vous pourrez mettre en place facilement pour <strong>calmer les tensions familiales</strong>.</p>-->
            <!--<p style="text-align: justify;">Ce livre est un ouvrage de vulgarisation du marché du jeu vidéo, de game design et de psychologie <strong>accessible à tous</strong> afin de mieux comprendre le monde vidéo-ludique qui nous entoure.</p>-->
            
            <flag text="Dans le top #50" />
            <p class="newsletter-price">des livres les plus vendus dans la catégorie Livres (Jeux PC) sur Amazon !</p>
            <div class="arrow-container" id="arrow-top">
                <img src="@/assets/img/icons/upload.svg"/>
            </div>
             <a class="btn" id="amazon-button" @click="captureOutboundLink('https://www.amazon.fr/dp/B08929ZCPK');" href="https://www.amazon.fr/dp/B08929ZCPK" target="_blank">
                <img src="@/assets/img/amazon.png" width="150"/>
            </a>
            <div class="arrow-container" id="arrow-bottom">
                <img src="@/assets/img/icons/upload.svg"/>
            </div>
            <!--p class="newsletter-price" style="margin-bottom: 0px;">à seulement 9,99€</p>-->
            
            <div style="margin-top: 20px;margin-bottom: 50px">
                <img src="@/assets/img/ssl.png" height="30">
                <img src="@/assets/img/credit-cards.jpg" height="30">
            </div>
        </section>
        <hr>
        <section>
           <h1>A propos de l'auteur</h1>
           <h2>Nicolas Brondin-Bernard</h2>
           <img src="~/assets/img/me-3.png" style="border-radius: 50%;margin-top: 20px;" width="100"/>
           <p style="text-align: center;">Ingénieur en informatique et développeur de jeux vidéo passionné par la psychologie ainsi que l'éducation, j'ai décidé d'écrire ce livre pour aider un maximum de parents à comprendre le monde vidéo-ludique qui nous entoure.</p>
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

<style>

h1 {
    font-weight: bold;
}
h2 {
    font-weight: 400;
    color: rgba(0,0,0,0.6);
}
p {
    font-size: 18px;
    text-align: center;
}
    #book-cover {
        width: 300px;
    }
    .illustration-teenager {
        height: 100px;
    }
    .illustration-arrow {
        height: 50px;
    }
    .btn {
        box-shadow: 0px 3px 0px 2px rgba(0,0,0,0.3);
    }

    .btn:hover {
        box-shadow: none;
        margin-top:5px;
        margin-bottom: -5px;
    }
    p.newsletter-price {
        font-size: 14px;
        margin: 5px 0px;
        margin-top: -10px;
        margin-bottom: 20px;
        color: rgba(0,0,0,0.5);
        text-align: center;
    }

    @keyframes giggle{
        0% { transform: scale(1.0)}
        10% { transform: scale(1.05)}
        20% { transform: scale(0.95)}
        30% { transform: scale(1.0)}
        99% { transform: scale(1.0)}
    }
    #amazon-button {
        /*animation: giggle 2s ease-in-out 1s infinite;*/
    }
    .arrow-container {
            display: inline-block;
            vertical-align: middle;
        }
        .arrow-container img {
            height:50px;
            opacity: 0.8;
            margin-top: 20px;
        }
        #arrow-top {
            transform:rotate(90deg);
            margin-right: 0px;
        }
        #arrow-bottom {
            
            transform:rotate(-90deg);
            margin-left: 0px;
        }
    @media screen and (min-width: 401px){
        .card {
            padding: 80px;
            padding-top: 40px;
        }
        
        
    }
    @media screen and (max-width: 550px){
        .arrow-container {
            display: block;
        }
        .arrow-container img {
            height:50px;
            opacity: 0.8;
            margin-top: 0px;
        }
        #arrow-top {
            transform:rotate(180deg);
            margin-bottom: 20px;
        }
        #arrow-bottom {
            display: none;
        }
    }
    @media screen and (max-width: 500px){
        
        .illustration-teenager {
            height: 75px;
        }
        .illustration-arrow {
            height: 30px;
        }
        .card {
            padding:20px ;
        }
        h1 {
            font-size: 20px;
        }
        h2 {
            font-size: 16px;
        }
        p {
    font-size: 14px;
    text-align: left;
}
        #book-cover {
            width: 200px;
        }
        
    }
</style>
