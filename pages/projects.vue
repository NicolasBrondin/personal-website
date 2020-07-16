<template>
    <div class="page-content">
        <section>
            <flag :text="$t('SIDE_PROJECTS')"/>
            <ul class="projects-list">
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.projects.thumbnails" :key="index"/>
            </ul>
        </section>
        <section>
            <flag :text="$t('CUSTOMERS_PROJECTS')"/>
            <ul class="projects-list">
                <p>{{$t('PUBLIC_PROJECTS')}}</p>
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.customers_projects.thumbnails" :key="index"/>
            </ul>
        </section>
        <section>
            <flag :text="$t('DEAD_PROJECTS')"/>
            <ul class="projects-list">
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.dead_projects.thumbnails" :key="index"/>
            </ul>
        </section>
    </div>
</template>

<script>
    import cover_resume from "@/assets/img/projects/master.jpg"
    import cover_kalico from "@/assets/img/projects/kalico.jpg"
    import cover_candy from "@/assets/img/projects/candy-candy-candy.jpg"
    import cover_mais_combien from "@/assets/img/projects/mais-combien.jpg"
    import cover_beer_bucket from "@/assets/img/projects/beer-bucket.jpg"
    import cover_klassroom from "@/assets/img/projects/klassroom.jpg"
    import cover_klassroom_web from "@/assets/img/projects/klassroom-web.jpg"
    import cover_chdr from "@/assets/img/projects/chdr.jpg"
    import cover_winesee from "@/assets/img/projects/winesee.jpg"
    import cover_winesee_pro from "@/assets/img/projects/winesee-pro.jpg"
    import cover_flower_player from "@/assets/img/projects/flower-player.jpg"
    import cover_scribee from "@/assets/img/projects/scribee.jpg"
    import cover_peetch from "@/assets/img/projects/peetch.jpg"
    import cover_book_pie from "@/assets/img/projects/book-pie.jpg"
    import cover_cocaine_video from "@/assets/img/projects/cocaine-video.jpg"
    import cover_eurekube from "@/assets/img/projects/eurekube.jpg"
    import cover_technical_ninja from "@/assets/img/projects/technical-ninja.jpg"

    import flag from "../components/flag.vue"
    import chess from "../components/chess.vue"
    import thumbnail from "../components/thumbnail.vue"
    
    export default {
        head: function(){
            return {
                title: this.$t("META_PROJECTS_TITLE"),
                meta: [
                    { hid: "twitter:title", name: "twitter:title", content: this.$t("META_PROJECTS_TITLE")},
                    { hid: "twitter:text:title", name: "twitter:text:title", content: this.$t("META_PROJECTS_TITLE")},
                    { hid: "og:title", name: "og:title", content: this.$t("META_PROJECTS_TITLE")},
                    { hid: "description", name: "description", content: this.$t("META_PROJECTS_DESCRIPTION")},
                    { hid: "og:description", name: "og:description", content: this.$t("META_PROJECTS_DESCRIPTION")},
                    { hid: "twitter:description", name: "twitter:description", content: this.$t("META_PROJECTS_DESCRIPTION")},
                    { hid: "keywords", name: "keywords", content: this.$t("META_PROJECTS_KEYWORDS")}
                ]
            };
        },
        data: function(){
            return {
                sections: {
                    projects: {
                        thumbnails: [
                            {
                                title: this.$t("TECHNICAL_NINJA"),
                                is_featured: false,
                                subtitle: this.$t("TECHNICAL_NINJA_DESCRIPTION"),
                                url: "https://technical-ninja.cleverapps.io/",
                                url_text: this.$t("TRY"),
                                cover: cover_technical_ninja,
                                type: "web"
                            },
                            {
                                cover: cover_candy,
                                url: "https://nicolas-brondin-bernard.itch.io/candy-candy-candy",
                                title: "Candy Candy Candy",
                                subtitle: this.$t("CANDY_DESCRIPTION"),
                                url_text: this.$t("PLAY"),
                                type: "game"
                            },
                            {
                                cover: cover_scribee,
                                url: "https://nicolasbrondin.github.io/scribee/",
                                title: "Scribee",
                                subtitle: this.$t("SCRIBEE_DESCRIPTION"),
                                url_text: this.$t("PLAY"),
                                type: "game"
                            },{
                                cover: cover_flower_player,
                                url: "https://blog.nicolas.brondin-bernard.com/building-an-open-source-mp3-player/",
                                title: "Flower Player",
                                subtitle: this.$t("FLOWER_PLAYER_DESCRIPTION"),
                                type: "electronics"
                            },
                            {
                                cover: cover_book_pie,
                                url: "https://github.com/NicolasBrondin/book-pie",
                                title: "Book Pie",
                                subtitle: this.$t("BOOK_PIE_DESCRIPTION"),
                                type: "electronics"
                            },
                            {
                                cover: cover_resume,
                                url: "/cv/index.html",
                                title: this.$t("ONLINE_RESUME"),
                                subtitle: this.$t("ONLINE_RESUME_DESCRIPTION"),
                                url_text: this.$t("TRY"),
                                type: "web"
                            }
                        ]
                    },
                    customers_projects: {
                        thumbnails: [
                            {
                                cover: cover_winesee,
                                url: "https://winesee.fr",
                                title: this.$t("WINESEE"),
                                subtitle: this.$t("WINESEE_DESCRIPTION"),
                                url_text: this.$t("OPEN"),
                                type: "web"
                            },
                            {
                                cover: cover_winesee_pro,
                                url: "https://pro.winesee.fr",
                                title: this.$t("WINESEE_PRO"),
                                subtitle: this.$t("WINESEE_PRO_DESCRIPTION"),
                                url_text: this.$t("OPEN"),
                                type: "web"
                            },
                            {
                                cover: cover_klassroom,
                                url: "https://klassroom.fr/",
                                title: this.$t("KLASSROOM"),
                                subtitle: this.$t("KLASSROOM_DESCRIPTION"),
                                url_text: this.$t("OPEN"),
                                type: "web"
                            },
                            {
                                cover: cover_klassroom_web,
                                url: "https://app.klassroom.fr/",
                                title: this.$t("KLASSROOM_WEB_APP"),
                                subtitle: this.$t("KLASSROOM_WEB_APP_DESCRIPTION"),
                                url_text: this.$t("OPEN"),
                                type: "web"
                            },
                            {
                                cover: cover_chdr,
                                url: "https://chrome.google.com/webstore/detail/savings-radar-by-chdr/jpdgjenffbjdkdbgifemcdmomnnkjabk?hl=en-US",
                                title: "Savings radar",
                                subtitle: this.$t("CHDR_DESCRIPTION"),
                                url_text: this.$t("OPEN"),
                                type: "web"
                            }
                        ]
                    },
                    dead_projects: {
                        thumbnails: [
                            {   
                                cover: cover_kalico,
                                title: "Kalico",
                                subtitle: this.$t("KALICO_DESCRIPTION"),
                                type: "dead"
                            },
                            { 
                                cover: cover_mais_combien,
                                title: "Mais Combien ?!",
                                subtitle: this.$t("MAIS_COMBIEN_DESCRIPTION"),
                                type: "dead"
                            },
                            {
                                cover: cover_beer_bucket,
                                title: "Beer Bucket",
                                subtitle: this.$t("BEER_BUCKET_DESCRIPTION"),
                                type: "dead"
                            },
                            {
                                cover: cover_peetch,
                                title: "Peetch",
                                subtitle: this.$t("PEETCH_DESCRIPTION"),
                                type: "dead"
                            },
                            {
                                cover: cover_cocaine_video,
                                title: "Cocaine Video",
                                subtitle: this.$t("COCAINE_VIDEO_DESCRIPTION"),
                                type: "dead"
                            },
                            {
                                cover: cover_eurekube,
                                title: "Eurekube",
                                subtitle: this.$t("EUREKUBE_DESCRIPTION"),
                                type: "dead"
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
