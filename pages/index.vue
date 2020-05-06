<template>
    <div class="page-content">
        <section>
            <flag :text="$t('BOOKS')"/>
            <ul class="projects-list">
                <thumbnail :data="card_data" v-for="(card_data, index) in sections.books.thumbnails" :key="index"/>
            </ul>
        </section>
    </div>
</template>

<script>

    import flag from "../components/flag.vue"
    import chess from "../components/chess.vue"
    import thumbnail from "../components/thumbnail.vue"
    import cover_fortnite from "@/assets/img/projects/fortnite.jpg"
    
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
                    books: {
                        thumbnails: [
                            {
                                title: "Fortnite",
                                subtitle: this.$t("FORTNITE_DESCRIPTION"),
                                url: "https://shop.brondin-bernard.com/produit/ebook-fortnite-a-t-il-transforme-nos-enfants-en-zombies/",
                                cover: cover_fortnite,
                                type: "book"
                            }
                        ]
                    }
                }
            };
        },
        components: {
            "chess": chess,
            "flag": flag,
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
