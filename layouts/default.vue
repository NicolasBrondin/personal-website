<template>
    <main>
        <popup-manager/>
        <div class="page">
            <img class="plane" src="~/assets/img/plane.svg" @click="show_next_enigma(0)"/>
            <img class="balloon" v-if="$route.path === '/'" src="~/assets/img/hot-air-balloon.svg"/>
            <div class="card">
                <div class="bookmark-container">
                    <nuxt-link to="/" class="bookmark">
                        <fa icon="home"/>
                        <span>home</span>
                    </nuxt-link>
                    <nuxt-link to="/projects" class="bookmark">
                        <fa icon="monument"/>
                        <span>projets</span>
                    </nuxt-link>
                    <nuxt-link to="/studies" class="bookmark">
                        <fa icon="graduation-cap"/>
                        <span>etudes</span>
                    </nuxt-link>
                    <a href="https://blog.nicolas.brondin-bernard.com" target="_blank" class="bookmark">
                        <fa icon="newspaper"/>
                        <span>blog</span>
                    </a>
                    <a href="https://shop.brondin-bernard.com" target="_blank" class="bookmark">
                        <fa icon="shopping-basket"/>
                        <span>shop</span>
                    </a>
                </div>
                <img class="card-bubble" src="~/assets/img/me-3.png"/>
                <nuxt-link class="flag-lang lang-fr" :class="{'is-current': $i18n.locale =='fr'}" to="/">
                    <img src="~/assets/img/flags/fr.png"/>
                </nuxt-link>
                <nuxt-link class="flag-lang lang-en" :class="{'is-current': $i18n.locale =='en'}" to="/en">
                    <img src="~/assets/img/flags/en.png"/>
                </nuxt-link>
                <section>
                    <h1>
                        <span>Nicolas</span> 
                        <span>Brondin-Bernard</span>
                    </h1>
                    <h2>{{$t('TITLE')}}</h2>
                    <h3>
                        <span>{{$t('CITY')}}</span> 
                        <span>{{$t('CO_FOUNDER')}}</span> 
                        <span>{{$t('AUTHOR')}}</span> 
                        <span>{{$t('STREAMER')}}</span> 
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
                <section>
                    <h2 v-show="enigma_step >= 0">"{{$t("QUOTE_1")}}<span style="cursor: pointer;font-weight: 500;" @click="show_next_enigma(1)">{{$t("QUOTE_2")}}</span>{{$t("QUOTE_3")}}"</h2>
                    <p class="hint">{{$t("ENIGMA")}}</p>
                </section>
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
                        <li><a target="_blank" href="https://www.facebook.com/nicolasbrondinbernard/"><img src="~/assets/img/social/facebook.svg"/></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/nicolas_brondin_bernard/"><img src="~/assets/img/social/instagram.png"/></a></li>
                        <li><a target="_blank" href="https://www.twitter.com/NicolasBrondin"><img src="~/assets/img/social/twitter.svg"/></a></li>
                        <li><a target="_blank" href="https://www.twitch.tv/nicolasbrondinbernard"><img src="~/assets/img/social/twitch.png"/></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/nicolas-brondin"><img src="~/assets/img/social/linkedin.svg"/></a></li>
                        <li><a target="_blank" href="https://blog.nicolas.brondin-bernard.com"><img src="~/assets/img/social/medium.svg"/></a></li>
                        <li><a target="_blank" href="https://dribbble.com/NicolasBrondin"><img src="~/assets/img/social/dribbble.svg"/></a></li>
                        <li><a target="_blank" href="https://www.producthunt.com/@nicolasbrondin"><img src="~/assets/img/social/product-hunt.png"/></a></li>
                        <li><a target="_blank" href="https://github.com/NicolasBrondin"><img src="~/assets/img/social/github.svg"/></a></li>
                        <li>
                            <a target="_blank" href="https://www.malt.fr/profile/nicolasbrondin"><img src="~/assets/img/social/malt.png"/></a>
                            <div class="arrow-tip">
                                <div class="arrow-tip--container">
                                    <p class="arrow-tip--text">{{$t("HOW_MUCH")}}</p>
                                    <img src="~/assets/img/icons/semicircular-up-arrow.svg" class="arrow-tip--icon"/>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                    <a class="btn" href="mailto:nicolas@brondin.com">{{$t('SHOOT_EMAIL')}}<img src="~/assets/img/icons/paper-plane.svg" height="20"/></a>
                </section>
                <p>{{$t('FUN_FACT')}}</p>
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
        components: {
            "popup-manager": PopupManager
        }
    }
</script>