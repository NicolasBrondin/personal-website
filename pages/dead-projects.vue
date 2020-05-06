<template>
    <div class="page-content">
        
        <section>
            <div class="flag">
                <div class="left-part">
                    <div class="top-triangle"></div>
                    <div class="bottom-triangle"></div>
                </div><div class="flag-content">{{$t('DEAD_PROJECTS')}}</div><div class="right-part">
                    <div class="top-triangle"></div>
                    <div class="bottom-triangle"></div>
                </div>
            </div>
            <ul class="projects-list">
                <li>
                    <div class="project-cover project-kalico"></div>
                    <div class="project-content">
                        <a target="_blank">Kalico</a>
                        <p>{{$t("KALICO_DESCRIPTION")}}</p>
                        <img src="~/assets/img/icons/grave.svg"/>
                    </div>
                </li>
                <li>
                    <div class="project-cover project-mais-combien"></div>
                    <div class="project-content">
                        <a  target="_blank">Mais Combien ?!</a>
                        <p>{{$t("MAIS_COMBIEN_DESCRIPTION")}}</p>
                        <img src="~/assets/img/icons/grave.svg"/>
                    </div>
                </li>
                <li>
                    <div class="project-cover project-beer-bucket"></div>
                    <div class="project-content">
                        <a target="_blank">Beer Bucket</a>
                        <p>{{$t("BEER_BUCKET_DESCRIPTION")}}</p>
                        <img src="~/assets/img/icons/grave.svg"/>
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
