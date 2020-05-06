<template>
    <div class="popup-overlay"  v-if="is_displayed">
        <div class="popup-trigger" @click="close_popup()"></div>
        <div class="popup">
            <h1>Nouvel indice</h1>
            <h3 v-show="step === 0">Vous avez démarré l'énigme, une citation est apparue, peut-être qu'un mot a un double sens !</h3>
            <h3 v-show="step === 1">Bravo, vous avez fait apparaitre un jeu d'échecs ! La suite de l'énigme est: "Je ne sais pas pourquoi mais en terme de pizza, la plupart des gens préfèrent manger une reine"</h3>
            <h3 v-show="step === 2">Bravo, je n'ai pas été plus loin dans l'énigme</h3>
            <button @click="close_popup()">Close</button>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            is_displayed: false,
            step: -1
        };
    },
    mounted: function(){
        document.addEventListener("show_popup", function(e){
            this.is_displayed = true;
            this.step = e.detail;
            console.log(e);
        }.bind(this));
    },
    methods: {
        close_popup: function(){
            this.is_displayed = false;
        }
    }
}
</script>

<style scoped>
    .popup-overlay {
        display: flex;
        align-content: center;
        align-self: center;
        width: 100%;
        height: 100vh;
        position: fixed;
        z-index: 3;
        box-sizing: border-box;
        padding: 20px;
    }
    .popup-trigger {
        background: rgba(0,0,0,0.5);
        align-content: center;
        align-self: center;
        width: 100%;
        height: 100vh;
        position: absolute;
        top:0;
        left: 0;
        z-index: 3;
        box-sizing: border-box;
        padding: 20px;
    }

    .popup {
        z-index: 4;
        margin: auto;
        display: inline-block;
        width: 100%;
        max-width: 600px;
        padding: 20px;
        box-sizing: border-box;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.1);
        text-align: center;
    }
</style>