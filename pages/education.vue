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
                <li>
                    <div class="project-cover accreditation-wmd"></div>
                    <div class="project-content">
                        <a href="https://openclassrooms.com" target="_blank">{{$t('PROFESSIONAL_TITLE_ASSESSOR')}}</a>
                        <p>{{$t('WEB_MOBILE_DEVELOPER')}}</p>
                        <p>{{$t('LEVEL')}} III</p>
                        <img src="~/assets/img/icons/id-card.svg"/>
                    </div>
                </li>
                <li>
                    <div class="project-cover accreditation-cda"></div>
                    <div class="project-content">
                        <a href="https://openclassrooms.com" target="_blank">{{$t('PROFESSIONAL_TITLE_ASSESSOR')}}</a>
                        <p>{{$t('APPLICATION_DESIGNER_DEVELOPER')}}</p>
                        <p>{{$t('LEVEL')}} IV</p>
                        <img src="~/assets/img/icons/id-card.svg"/>
                    </div>
                </li>
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
                <li>
                    <div class="project-cover study-psychology"></div>
                    <div class="project-content">
                        <a href="https://openclassrooms.com" target="_blank">{{$t('OC_CERTIFICATION')}}</a>
                        <p>{{$t('OC_CERTIFICATION_PSYCHOLOGY')}}</p>
                        <img src="~/assets/img/icons/oc.png"/>
                    </div>
                </li>
                <li>
                    <div class="project-cover study-design"></div>
                    <div class="project-content">
                        <a href="https://openclassrooms.com" target="_blank">{{$t('OC_CERTIFICATION')}}</a>
                        <p>{{$t('OC_CERTIFICATION_DESIGN_THINKING')}}</p>
                        <img src="~/assets/img/icons/oc.png"/>
                    </div>
                </li>
                <li>
                    <div class="project-cover study-social-networks"></div>
                    <div class="project-content">
                        <a href="https://openclassrooms.com" target="_blank">{{$t('OC_CERTIFICATION')}}</a>
                        <p>{{$t('OC_CERTIFICATION_SOCIAL_NETWORKS')}}</p>
                        <img src="~/assets/img/icons/oc.png"/>
                    </div>
                </li>
                <li>
                    <div class="project-cover study-bitcoin"></div>
                    <div class="project-content">
                        <a href="https://openclassrooms.com/fr/course-certificates/5823847131" target="_blank">{{$t('OC_CERTIFICATION')}}</a>
                        <p>{{$t('OC_CERTIFICATION_BITCOIN')}}</p>
                        <img src="~/assets/img/icons/oc.png"/>
                    </div>
                </li>
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
                <li>
                    <div class="project-cover study-master"></div>
                    <div class="project-content">
                        <a href="https://www.univ-nantes.fr/" target="_blank">{{$t('DEGREE_MASTER')}}</a>
                        <p>{{$t('SOFTWARE_ARCHITECTURE')}}</p>
                        <img src="~/assets/img/icons/nantes.png"/>
                    </div>
                </li>
                <li>
                    <div class="project-cover study-entrepreneurship"></div>
                    <div class="project-content">
                        <a href="https://www.univ-nantes.fr/" target="_blank">{{$t('DEGREE_UNIVERSITY_DIPLOMA')}}</a>
                        <p>{{$t('ENTREPRENEURSHIP')}}</p>
                        <img src="~/assets/img/icons/nantes.png"/>
                    </div>
                </li>
                <li>
                    <div class="project-cover study-bachelor"></div>
                    <div class="project-content">
                        <a href="https://www.univ-larochelle.fr" target="_blank">{{$t('DEGREE_BACHELOR')}}</a>
                        <p>{{$t('SOFTWARE_ENGINEERING')}}</p>
                        <img src="~/assets/img/icons/la-rochelle.png"/>
                    </div>
                </li>
                <li>
                    <div class="project-cover study-computer"></div>
                    <div class="project-content">
                        <a href="https://www.univ-larochelle.fr" target="_blank">{{$t('DEGREE_UNIVERSITY_DIPLOMA')}}</a>
                        <p>{{$t('COMPUTER_SCIENCE')}}</p>
                        <img src="~/assets/img/icons/la-rochelle.png"/>
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
