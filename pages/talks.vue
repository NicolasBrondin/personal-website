<template>
    <div class="page-content">
        <section>
            <flag :text="$t('EVENTS')"/>
            <ul class="projects-list">
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.talks.thumbnails" :key="index"/>
            </ul>
        </section>
        
        
        
    </div>
</template>

<script>

    import fortnite_cover from "@/assets/img/projects/conference.jpg";
    import seo_cover from "@/assets/img/projects/seo.jpg";
    import colorblind_cover from "@/assets/img/projects/colorblind.jpg";
    import design_cover from "@/assets/img/projects/design.jpg";

    import flag from "../components/flag.vue"
    import chess from "../components/chess.vue"
    import thumbnail from "../components/thumbnail.vue"
    
    export default {
        head: function(){
            return {
                title: this.$t("META_TALKS_TITLE"),
                meta: [
                    { hid: "twitter:title", name: "twitter:title", content: this.$t("META_TALKS_TITLE")},
                    { hid: "twitter:text:title", name: "twitter:text:title", content: this.$t("META_TALKS_TITLE")},
                    { hid: "og:title", name: "og:title", content: this.$t("META_TALKS_TITLE")},
                    { hid: "description", name: "description", content: this.$t("META_TALKS_DESCRIPTION")},
                    { hid: "og:description", name: "og:description", content: this.$t("META_TALKS_DESCRIPTION")},
                    { hid: "twitter:description", name: "twitter:description", content: this.$t("META_TALKS_DESCRIPTION")},
                    { hid: "keywords", name: "keywords", content: this.$t("META_TALKS_KEYWORDS")}
                ]
            };
        },
        data: function(){
            return {
                sections: {
                    talks: {
                        thumbnails: [
                            {
                                is_finished: true,
                                url:"https://www.eventbrite.com/e/billets-conference-fortnite-a-t-il-transforme-mes-enfants-en-zombies-61984131205",
                                title: this.$t('EDUCATION_CONFERENCE'),
                                subtitle: this.$t('EDUCATION_CONFERENCE_TEXT'),
                                type:"talk",
                                url_text: this.$t("WATCH_EVENT"),
                                cover: fortnite_cover
                            },
                            {
                                type:"talk",
                                is_finished: true,
                                url: "",
                                title: this.$t('DESIGN_TALK'),
                                subtitle: this.$t('DESIGN_TALK_TEXT'),
                                cover: seo_cover
                            },
                            {
                                type:"talk",
                                is_finished: true,
                                url: "",
                                title: this.$t('GAME_DESIGN_TALK'),
                                subtitle: this.$t('GAME_DESIGN_TALK_TEXT'),
                                cover: colorblind_cover
                            },
                            {
                                type:"talk",
                                is_finished: true,
                                url: "",
                                title: this.$t('COMPUTER_SCIENCE_TALK'),
                                subtitle: this.$t('COMPUTER_SCIENCE_TALK_TEXT'),
                                cover: design_cover
                            }
                        ]
                    }
                },
                enigma_step: -1
            };
        },
        components: {
            "flag": flag,
            "chess": chess,
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
