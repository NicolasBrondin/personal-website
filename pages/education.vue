<template>
    <div class="page-content">
        
        <section>
            <flag :text="$t('ACCREDITATIONS')"/>
            <ul class="projects-list">
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.accreditations.thumbnails" :key="index"/>
            </ul>
        </section>
        <section>
            <flag :text="$t('CERTIFICATIONS')"/>
            <ul class="projects-list">
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.certifications.thumbnails" :key="index"/>
            </ul>
        </section>
        <section>
            <flag :text="$t('DIPLOMAS')"/>
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

    import flag from "../components/flag.vue"
    import thumbnail from "../components/thumbnail.vue"
    
    export default {
        head: function(){
            return {
                title: this.$t("META_EDUCATION_TITLE"),
                meta: [
                    { hid: "twitter:title", name: "twitter:title", content: this.$t("META_EDUCATION_TITLE")},
                    { hid: "twitter:text:title", name: "twitter:text:title", content: this.$t("META_EDUCATION_TITLE")},
                    { hid: "og:title", name: "og:title", content: this.$t("META_EDUCATION_TITLE")},
                    { hid: "description", name: "description", content: this.$t("META_EDUCATION_DESCRIPTION")},
                    { hid: "og:description", name: "og:description", content: this.$t("META_EDUCATION_DESCRIPTION")},
                    { hid: "twitter:description", name: "twitter:description", content: this.$t("META_EDUCATION_DESCRIPTION")},
                    { hid: "keywords", name: "keywords", content: this.$t("META_EDUCATION_KEYWORDS")}
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
                                title: this.$t('PROFESSIONAL_TITLE_ASSESSOR'),
                                subtitle: this.$t('WEB_MOBILE_DEVELOPER') + " - " + this.$t('LEVEL')+' III',
                                type: 'accreditation'
                            },
                            {
                                cover: cover_cda,
                                title: this.$t('PROFESSIONAL_TITLE_ASSESSOR'),
                                subtitle: this.$t('APPLICATION_DESIGNER_DEVELOPER')+" - "+this.$t('LEVEL')+' IV',
                                type: 'accreditation'
                            }
                        ]
                    },
                    certifications: {
                        thumbnails: [
                            {
                                cover: cover_psychology,
                                title: this.$t('OC_CERTIFICATION'),
                                subtitle: this.$t('OC_CERTIFICATION_PSYCHOLOGY'),
                                logo: logo_oc
                            },
                            {
                                cover: cover_design,
                                title: this.$t('OC_CERTIFICATION'),
                                subtitle: this.$t('OC_CERTIFICATION_DESIGN_THINKING'),
                                logo: logo_oc
                            },
                            {
                                cover: cover_social_networks,
                                title: this.$t('OC_CERTIFICATION'),
                                subtitle: this.$t('OC_CERTIFICATION_SOCIAL_NETWORKS'),
                                logo: logo_oc
                            },
                            {
                                cover: cover_bitcoin,
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
                                title: this.$t('DEGREE_MASTER'),
                                subtitle: this.$t('SOFTWARE_ARCHITECTURE'),
                                logo: logo_nantes,
                            },
                            {
                                cover: cover_entrepreneurship,
                                title: this.$t('DEGREE_UNIVERSITY_DIPLOMA'),
                                subtitle: this.$t('ENTREPRENEURSHIP'),
                                logo: logo_nantes
                            },
                            {
                                cover: cover_bachelor,
                                title: this.$t('DEGREE_BACHELOR'),
                                subtitle: this.$t('SOFTWARE_ENGINEERING'),
                                logo: logo_lr
                            },
                            {
                                cover: cover_computer,
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
            "flag": flag,
            "thumbnail": thumbnail
        },
        methods: {
        }
    }
</script>
