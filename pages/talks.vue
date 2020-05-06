<template>
    <div class="page-content">
        <section>
            <div class="flag">
                <div class="left-part">
                    <div class="top-triangle"></div>
                    <div class="bottom-triangle"></div>
                </div><div class="flag-content">{{$t('EVENTS')}}</div><div class="right-part">
                    <div class="top-triangle"></div>
                    <div class="bottom-triangle"></div>
                </div>
            </div>
            <ul class="projects-list">
                <li class="disabled">
                    <div class="project-cover event-fortnite"></div>
                    <div class="project-content">
                        <span class="badge">{{$t('FINISHED')}}</span>
                        <a href="https://www.eventbrite.com/e/billets-conference-fortnite-a-t-il-transforme-mes-enfants-en-zombies-61984131205" target="_blank">{{$t('EDUCATION_CONFERENCE')}}</a>
                        <p>{{$t('EDUCATION_CONFERENCE_TEXT')}}</p>
                        <img src="~/assets/img/icons/microphone.svg"/>
                    </div>
                </li>
                <li class="disabled">
                    <div class="project-cover event-colorblind"></div>
                    <div class="project-content">
                        <span class="badge">{{$t('FINISHED')}}</span>
                        <a>{{$t('DESIGN_TALK')}}</a>
                        <p>{{$t('DESIGN_TALK_TEXT')}}</p>
                        <img src="~/assets/img/icons/microphone.svg"/>
                    </div>
                </li>
                <li class="disabled">
                    <div class="project-cover event-game-design"></div>
                    <div class="project-content">
                        <span class="badge">{{$t('FINISHED')}}</span>
                        <a>{{$t('GAME_DESIGN_TALK')}}</a>
                        <p>{{$t('GAME_DESIGN_TALK_TEXT')}}</p>
                        <img src="~/assets/img/icons/microphone.svg"/>
                    </div>
                </li>
                <li class="disabled">
                    <div class="project-cover event-seo"></div>
                    <div class="project-content">
                        <span class="badge">{{$t('FINISHED')}}</span>
                        <a>{{$t('COMPUTER_SCIENCE_TALK')}}</a>
                        <p>{{$t('COMPUTER_SCIENCE_TALK_TEXT')}}</p>
                        <img src="~/assets/img/icons/microphone.svg"/>
                    </div>
                </li>
            </ul>
        </section>
        
        
        
    </div>
</template>

<script>

    import chess from "../components/chess.vue"
    
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
                enigma_step: -1
            };
        },
        components: {
            "chess": chess
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
