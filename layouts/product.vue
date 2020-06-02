<template>
    <main>
        <popup-manager/>
        <div class="page">
            <div class="card">
                <nuxt/>
                
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