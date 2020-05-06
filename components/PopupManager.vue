<template>
    <div class="popup-overlay"  v-if="is_displayed">
        <div class="popup-trigger" @click="close_popup()"></div>
        <div class="popup">
            <h1>Enigme</h1>
            <p v-show="enigma_step === 0">Parfois les mots sont comme les routes... à double sens !</p>
            <h2 v-show="enigma_step === 0">"{{$t("QUOTE_1")}}<span style="cursor: pointer;font-weight: 500;" @click="show_next_enigma">{{$t("QUOTE_2")}}</span>{{$t("QUOTE_3")}}"</h2>
            <p v-show="enigma_step === 1">Bravo, en même temps elle était facile celle-là !</p>
            <p v-show="enigma_step === 1">La suite de l'énigme est: "Je ne sais pas pourquoi mais en terme de pizza, la plupart des gens préfèrent manger une reine"</p>
            <div>
                <chess v-if="enigma_step === 1" :show_next_enigma="show_next_enigma"/>
            </div>
            <p v-show="enigma_step === 2">Bravo, vous avez remporté les énigmes ! Revenez plus tard pour découvrir si il y en a de nouvelles de disponibles !</p>
            <br>
            <br>
            <button class="btn" @click="close_popup()">Abandonner</button>
        </div>
    </div>
</template>

<script>
import chess from './chess.vue'

export default {
    data: function(){
        return {
            is_displayed: false,
            enigma_step: 0
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
        show_next_enigma: function(step){
                this.enigma_step++;
                
            },
        close_popup: function(){
            this.is_displayed = false;
        }
    },
    components: {
        "chess": chess
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