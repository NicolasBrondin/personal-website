<template>
    <main>
        <popup-manager/>
        <div class="page">
            <img alt="Avion volant" class="plane" src="~/assets/img/plane.svg" @click="show_enigma()"/>
            <img alt="Ballon dirigeable qui vole" class="balloon" v-if="$route.path === '/'" src="~/assets/img/hot-air-balloon.svg"/>
            <div class="card">
                <div class="bookmark-container">
                    <nuxt-link :to="localePath('index')" exact class="bookmark">
                        <fa icon="home"/>
                        <span>{{$t('MENU_HOME')}}</span>
                    </nuxt-link>
                    <nuxt-link :to="localePath('projects')" exact class="bookmark">
                        <fa icon="monument"/>
                        <span>{{$t('MENU_PROJECTS')}}</span>
                    </nuxt-link>
                    <nuxt-link :to="localePath('talks')" exact class="bookmark">
                        <fa icon="bullhorn"/>
                        <span>{{$t('MENU_TALKS')}}</span>
                    </nuxt-link>
                    <nuxt-link :to="localePath('education')" exact class="bookmark">
                        <fa icon="award"/>
                        <span>{{$t('MENU_EDUCATION')}}</span>
                    </nuxt-link>
                    <nuxt-link to="/newsletter" v-if="$i18n.locale === 'fr'" class="bookmark">
                        <fa icon="envelope"/>
                        <span>Newsletter</span>
                    </nuxt-link>
                    <a href="https://blog.nicolas.brondin-bernard.com" v-if="$i18n.locale === 'fr'" target="_blank" class="bookmark">
                        <fa icon="newspaper"/>
                        <span>{{$t('MENU_BLOG')}}</span>
                    </a>
                    <a href="https://blog.nicolas.brondin-bernard.com/en/" v-if="$i18n.locale === 'en'" target="_blank" class="bookmark">
                        <fa icon="newspaper"/>
                        <span>{{$t('MENU_BLOG')}}</span>
                    </a>
                    <a href="https://masterclass.nicolas.brondin-bernard.com" v-if="$i18n.locale === 'fr'" target="_blank" class="bookmark is-featured">
                        <fa icon="graduation-cap"/>
                        <span>{{$t('MENU_MASTERCLASS')}}</span>
                    </a>
                    <a href="https://shop.brondin-bernard.com" v-if="$i18n.locale === 'fr'" target="_blank" class="bookmark">
                        <fa icon="shopping-basket"/>
                        <span>{{$t('MENU_SHOP')}}</span>
                    </a>
                    
                </div>
                <img alt="Photo Nicolas" class="card-bubble" src="~/assets/img/me-3.png"/>
                <div id="thoughts">
                    <span>{{$t("ENIGMA")}}</span>
                </div>
                <nuxt-link class="flag-lang lang-fr" :class="{'is-current': $i18n.locale =='fr'}" :to="switchLocalePath('fr')">
                    <img alt="Drapeau français" src="~/assets/img/flags/fr.png"/>
                </nuxt-link>
                <nuxt-link class="flag-lang lang-en" :class="{'is-current': $i18n.locale =='en'}" :to="switchLocalePath('en')">
                    <img alt="English flag" src="~/assets/img/flags/en.png"/>
                </nuxt-link>
                <section>
                    <h1>
                        <span>Nicolas</span> 
                        <span>Brondin-Bernard</span>
                    </h1>
                    <h2>{{$t('TITLE')}}</h2>
                    <h3>
                        <span>{{$t('WEB_DEVELOPER')}}</span> 
                        <span>{{$t('CITY')}}</span> 
                        <!--<span>{{$t('CO_FOUNDER')}}</span> -->
                        <span>{{$t('AUTHOR')}}</span> 
                        <span>{{$t('BLOGGER')}}</span> 
                        <span>{{$t('STREAMER')}}</span> 
                        <span>{{$t('SPEAKER')}}</span> 
                        <span>{{$t('HUSBAND')}}</span> 
                        <span>{{$t('FATHER')}}</span>
                    </h3>
                </section>
                <!--<nav>
                    <ul>
                        <li>
                            <nuxt-link to="/">Accueil</nuxt-link>
                        </li>
                        <li>
                            <a href="https://blog.nicolas.brondin-bernard.com" target="_blank">Blog</a>
                        </li>
                        <li>
                            <a href="https://shop.brondin-bernard.com" target="_blank">Shop</a>
                        </li>
                    </ul>
                </nav>-->
                <section v-if="enigma_step >= 1">
                    <div class="flag">
                        <div class="left-part">
                            <div class="top-triangle"></div>
                            <div class="bottom-triangle"></div>
                        </div><div class="flag-content">{{$t('CHESS')}}</div><div class="right-part">
                            <div class="top-triangle"></div>
                            <div class="bottom-triangle"></div>
                        </div>
                    </div>
                    <chess :show_next_enigma="show_next_enigma"/>
                </section>
                <hr>
                <nuxt/>
                <hr>
                <section>
                    <ul class="list-links">
                        <li><a target="_blank" href="https://www.facebook.com/nicolasbrondinbernard/"><img alt="Facebook" src="~/assets/img/social/facebook.svg"/></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/nicolas_brondin_bernard/"><img alt="Instagram" src="~/assets/img/social/instagram.png"/></a></li>
                        <li><a target="_blank" href="https://www.twitter.com/NicolasBrondin"><img alt="Twitter" src="~/assets/img/social/twitter.svg"/></a></li>
                        <li><a target="_blank" href="https://www.twitch.tv/nicolasbrondinbernard"><img alt="Twitch" src="~/assets/img/social/twitch.png"/></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/nicolas-brondin"><img alt="Linkedin" src="~/assets/img/social/linkedin.svg"/></a></li>
                        <li><a target="_blank" href="https://blog.nicolas.brondin-bernard.com"><img alt="Medium" src="~/assets/img/social/medium.svg"/></a></li>
                        <li><a target="_blank" href="https://dribbble.com/NicolasBrondin"><img alt="Dribbble" src="~/assets/img/social/dribbble.svg"/></a></li>
                        <li><a target="_blank" href="https://www.producthunt.com/@nicolasbrondin"><img alt="Product Hunt" src="~/assets/img/social/product-hunt.png"/></a></li>
                        <li><a target="_blank" href="https://github.com/NicolasBrondin"><img alt="Github" src="~/assets/img/social/github.svg"/></a></li>
                        <li>
                            <a target="_blank" href="https://www.malt.fr/profile/nicolasbrondin"><img alt="Malt" src="~/assets/img/social/malt.png"/></a>
                            <div class="arrow-tip">
                                <div class="arrow-tip--container">
                                    <p class="arrow-tip--text">{{$t("HOW_MUCH")}}</p>
                                    <img alt="Flèche" src="~/assets/img/icons/semicircular-up-arrow.svg" class="arrow-tip--icon"/>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                    <a class="btn" href="mailto:nicolas@brondin.com">{{$t('SHOOT_EMAIL')}}<img alt="Icône d'avion en papier" src="~/assets/img/icons/paper-plane.svg" height="20"/></a>
                </section>
                <footer>
                    <p>{{$t('FUN_FACT')}}</p>
                </footer>
            </div>
        </div>
    </main>
</template>

<script>
    import PopupManager from '~/components/PopupManager.vue';
    import css from '~/assets/css/main.css';
    import bookmark_css from '~/assets/css/bookmark.css';
    import nav_css from '~/assets/css/nav.css';
    import font_ink from '~/assets/css/font-ink.css';
    export default {
        data: function(){
            return {
                enigma_step: -1
            }
        },
        mounted: function(){
            new CookieConsent(function(){
                this.$ga.enable()
            }.bind(this),
            function(){
                this.$ga.disable();
            }.bind(this));
        },
        methods: {
            show_enigma: function(){
                        var event = new CustomEvent('show_popup',{});
                        document.dispatchEvent(event);
                        
                
            }
        },
        components: {
            "popup-manager": PopupManager
        }
    }
</script>

<style scoped>

    .page { 
        padding-top: 150px;
    }

    .card {
        padding-top: 75px;
    }

    @media screen and (max-width: 800px){
        .card {
            padding: 20px;   
            padding-top: 75px; 
        }
    }

    @media screen and (max-width: 720px){
        .card{ 
            margin-left: 20px;
        }
    }

    @media screen and (max-width: 350px){
    .card{
        padding: 20px;
        padding-top: 75px;
    }
}
</style>