<template>
    <div class="page-content">
        
        <section>
            <div class="flag">
                <div class="left-part">
                    <div class="top-triangle"></div>
                    <div class="bottom-triangle"></div>
                </div><div class="flag-content">{{$t('ACCREDITATIONS')}}</div><div class="right-part">
                    <div class="top-triangle"></div>
                    <div class="bottom-triangle"></div>
                </div>
            </div>
            <ul class="projects-list">
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.accreditations.thumbnails" :key="index"/>
            </ul>
        </section>
        <section>
            <div class="flag">
                <div class="left-part">
                    <div class="top-triangle"></div>
                    <div class="bottom-triangle"></div>
                </div><div class="flag-content">{{$t('CERTIFICATIONS')}}</div><div class="right-part">
                    <div class="top-triangle"></div>
                    <div class="bottom-triangle"></div>
                </div>
            </div>
            <ul class="projects-list">
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.certifications.thumbnails" :key="index"/>
            </ul>
        </section>
        <section>
            <div class="flag">
                <div class="left-part">
                    <div class="top-triangle"></div>
                    <div class="bottom-triangle"></div>
                </div><div class="flag-content">{{$t('DIPLOMAS')}}</div><div class="right-part">
                    <div class="top-triangle"></div>
                    <div class="bottom-triangle"></div>
                </div>
            </div>
            <ul class="projects-list">
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.diplomas.thumbnails" :key="index"/>
            </ul>
        </section>
        
        
        
    </div>
</template>

<script>

    import cover_wmd from "@/assets/img/projects/wmd.jpg"
    import cover_cda from "@/assets/img/projects/cda.jpg"
    import cover_master from "@/assets/img/projects/master.jpg"
    import cover_bitcoin from "@/assets/img/projects/bitcoin.jpg"
    import cover_bachelor from "@/assets/img/projects/bachelor.jpg"
    import cover_entrepreneurship from "@/assets/img/projects/entrepreneurship.jpg"
    import cover_computer from "@/assets/img/projects/computer.jpg"
    import cover_social_networks from "@/assets/img/projects/social-networks.jpg"
    import cover_psychology from "@/assets/img/projects/psychology.jpg"
    import cover_design from "@/assets/img/projects/design.jpg"

    import logo_nantes from "@/assets/img/icons/nantes.png"
    import logo_lr from "@/assets/img/icons/la-rochelle.png"
    import logo_oc from "@/assets/img/icons/oc.png"

    import chess from "../components/chess.vue"
    import thumbnail from "../components/thumbnail.vue"
    
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
                    accreditations: {
                        thumbnails: [
                            {
                                cover: cover_wmd,
                                url:"https://openclassrooms.com",
                                title: this.$t('PROFESSIONAL_TITLE_ASSESSOR'),
                                subtitle: [
                                    this.$t('WEB_MOBILE_DEVELOPER'),
                                    this.$t('LEVEL')+' III'
                                ],
                                type: 'accreditation'
                            },
                            {
                                cover: cover_cda,
                                url:"https://openclassrooms.com",
                                title: this.$t('PROFESSIONAL_TITLE_ASSESSOR'),
                                subtitle: [
                                    this.$t('APPLICATION_DESIGNER_DEVELOPER'),
                                    this.$t('LEVEL')+' IV'
                                ],
                                type: 'accreditation'
                            }
                        ]
                    },
                    certifications: {
                        thumbnails: [
                            {
                                cover: cover_psychology,
                                url: "https://openclassrooms.com",
                                title: this.$t('OC_CERTIFICATION'),
                                subtitle: this.$t('OC_CERTIFICATION_PSYCHOLOGY'),
                                logo: logo_oc
                            },
                            {
                                cover: cover_design,
                                url: "https://openclassrooms.com",
                                title: this.$t('OC_CERTIFICATION'),
                                subtitle: this.$t('OC_CERTIFICATION_DESIGN_THINKING'),
                                logo: logo_oc
                            },
                            {
                                cover: cover_social_networks,
                                url: "https://openclassrooms.com",
                                title: this.$t('OC_CERTIFICATION'),
                                subtitle: this.$t('OC_CERTIFICATION_SOCIAL_NETWORKS'),
                                logo: logo_oc
                            },
                            {
                                cover: cover_bitcoin,
                                url: "https://openclassrooms.com/fr/course-certificates/5823847131",
                                title: this.$t('OC_CERTIFICATION'),
                                subtitle: this.$t('OC_CERTIFICATION_BITCOIN'),
                                logo: logo_oc
                            }
                        ]
                    },
                    diplomas: {
                        thumbnails: [
                            {
                                cover: cover_master,
                                url:"https://www.univ-nantes.fr/",
                                title: this.$t('DEGREE_MASTER'),
                                subtitle: this.$t('SOFTWARE_ARCHITECTURE'),
                                logo: logo_nantes,
                            },
                            {
                                cover: cover_entrepreneurship,
                                url: "https://www.univ-nantes.fr/",
                                title: this.$t('DEGREE_UNIVERSITY_DIPLOMA'),
                                subtitle: this.$t('ENTREPRENEURSHIP'),
                                logo: logo_nantes
                            },
                            {
                                cover: cover_bachelor,
                                url: "https://www.univ-larochelle.fr",
                                title: this.$t('DEGREE_BACHELOR'),
                                subtitle: this.$t('SOFTWARE_ENGINEERING'),
                                logo: logo_lr
                            },
                            {
                                cover: cover_computer,
                                url: "https://www.univ-larochelle.fr",
                                title: this.$t('DEGREE_UNIVERSITY_DIPLOMA'),
                                subtitle: this.$t('COMPUTER_SCIENCE'),
                                logo: logo_lr
                            }
                        ]
                    }
                }
            };
        },
        components: {
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
