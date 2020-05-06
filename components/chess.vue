<template>
    <div class="chessboard">
        <div class="chessboard-line" v-for="(line, y) in chessboard" :key="y">
            <div class="chessboard-square" v-for="(square, x) in line" :key="x" @click="select_square(square,x,y)" :class="{'is-selected': square.is_selected}">
                <img v-if="square.piece === 'pawn' && square.color === 'black'" src="~/assets/img/chess/pawn-black.svg"/>
                <img v-if="square.piece === 'pawn' && square.color === 'white'" src="~/assets/img/chess/pawn-white.svg"/>
                <img v-if="square.piece === 'rook' && square.color === 'black'" src="~/assets/img/chess/rook-black.svg"/>
                <img v-if="square.piece === 'rook' && square.color === 'white'" src="~/assets/img/chess/rook-white.svg"/>
                <img v-if="square.piece === 'knight' && square.color === 'black'" src="~/assets/img/chess/knight-black.svg"/>
                <img v-if="square.piece === 'knight' && square.color === 'white'" src="~/assets/img/chess/knight-white.svg"/>
                <img v-if="square.piece === 'bishop' && square.color === 'black'" src="~/assets/img/chess/bishop-black.svg"/>
                <img v-if="square.piece === 'bishop' && square.color === 'white'" src="~/assets/img/chess/bishop-white.svg"/>
                <img v-if="square.piece === 'queen' && square.color === 'black'" src="~/assets/img/chess/queen-black.svg"/>
                <img v-if="square.piece === 'queen' && square.color === 'white'" src="~/assets/img/chess/queen-white.svg"/>
                <img v-if="square.piece === 'king' && square.color === 'black'" src="~/assets/img/chess/king-black.svg"/>
                <img v-if="square.piece === 'king' && square.color === 'white'" src="~/assets/img/chess/king-white.svg"/>
            </div>
        </div>
    </div>
</template>

<script>

import Vue from "vue"
export default {
    data: function(){
        return {
            turn: "white",
            from: null,
            chessboard: [
                [ {piece: "rook", color: "black"},{piece: "knight", color: "black"},{piece: "bishop", color: "black"},{piece: "king", color: "black"},{piece: "queen", color: "black"},{piece: "bishop", color: "black"},{piece: "knight", color: "black"},{piece: "rook", color: "black"} ],
                [ {piece: "pawn", color: "black"},{piece: "pawn", color: "black"},{piece: "pawn", color: "black"},{piece: "pawn", color: "black"},{piece: "pawn", color: "black"},{piece: "pawn", color: "black"},{piece: "pawn", color: "black"},{piece: "pawn", color: "black"} ],
                [ {},{},{},{},{},{},{},{} ],
                [ {},{},{},{},{},{},{},{} ],
                [ {},{},{},{},{},{},{},{} ],
                [ {},{},{},{},{},{},{},{} ],
                [ {piece: "pawn", color: "white"},{piece: "pawn", color: "white"},{piece: "pawn", color: "white"},{piece: "pawn", color: "white"},{piece: "pawn", color: "white"},{piece: "pawn", color: "white"},{piece: "pawn", color: "white"},{piece: "pawn", color: "white"} ],
                [ {piece: "rook", color: "white"},{piece: "knight", color: "white"},{piece: "bishop", color: "white"},{piece: "king", color: "white"},{piece: "queen", color: "white"},{piece: "bishop", color: "white"},{piece: "knight", color: "white"},{piece: "rook", color: "white"} ]
            ]
        };
    },
    methods: {
        select_square: function(square, x, y){
            if(!this.from){
                if(square.piece){
                    if(this.turn === square.color){
                        this.from = {x:x,y:y,square: square};      
                        Vue.set(this.from.square,"is_selected", true);
                    }
                }
            } else {
                if(x===this.from.x && y === this.from.y){
                    Vue.set(this.from.square,"is_selected", false);
                    this.from = null;
                } else if(this.move_piece(this.from,{square:square,x:x,y:y})){
                    if(square.piece === "queen"){
                        this.show_next_enigma();
                    }
                    Vue.set(square,"piece",this.from.square.piece);
                    Vue.set(square,"color",this.from.square.color);
                    this.from.square.is_selected = false;
                    this.from.square.piece = null;
                    this.from.square.color = null;
                    this.from = null;
                    this.turn = this.turn === "white" ? "black" : "white"
                }
            }
            
        },
        move_piece: function(from, to){

            var check_trajectory = function(type, from, to){
                if(type === "line"){
                    var y = from.y;
                    var x_start = Math.min(from.x,to.x);
                    var x_end = Math.max(from.x,to.x);
                    return !this.chessboard[y].some(function(square, index){
                        return index > x_start && index < x_end && square.piece;
                    });
                } else if( type === "column"){
                    var x = from.x;
                    var y_start = Math.min(from.y,to.y);
                    var y_end = Math.max(from.y,to.y);
                    return !this.chessboard.some(function(line, index){
                        var square = line[x];
                        return index > y_start && index < y_end && square.piece;
                    });
                } else if( type === "diagonal"){
                    var x_direction = to.x - from.x > 0 ? 1 : -1
                    var y_direction = to.y - from.y > 0 ? -1 : 1
                    for(let i = 1; from.x+(i*x_direction) != to.x && from.y+(i*y_direction) != to.y;i++){
                        var square = this.chessboard[from.y-(i*y_direction)][from.x+(i*x_direction)];
                        if(square.piece){
                            return false;
                        } 
                    }
                    return true;
                    
                }
            }.bind(this)

            if(from.square.color === to.square.color){
                return false;
            } else {
                switch(from.square.piece){
                    case "pawn": {return ((to.x === from.x && !to.square.piece) || (Math.sqrt(Math.pow(to.x-from.x,2)) === 1 && to.square.piece)) && ((from.y === (from.square.color === "white" ? 6 : 1) && to.y - from.y === (from.square.color == "white" ? -2 : 2)) || ( to.y - from.y === (from.square.color == "white" ? -1 : 1)));break;}
                    case "rook": {return (to.x === from.x && check_trajectory("column",from,to)) || (to.y === from.y && check_trajectory("line",from,to));break;}
                    case "bishop": {return Math.sqrt(Math.pow(to.x - from.x,2)) == Math.sqrt(Math.pow(to.y - from.y,2)) && check_trajectory("diagonal",from,to) ;break;}
                    case "knight": {return (Math.sqrt(Math.pow(to.x - from.x,2)) == 2 && Math.sqrt(Math.pow(to.y - from.y,2)) == 1) || (Math.sqrt(Math.pow(to.x - from.x,2)) == 1 && Math.sqrt(Math.pow(to.y - from.y,2)) == 2);break;}
                    case "queen": {return (to.x === from.x && check_trajectory("column",from,to)) || (to.y === from.y && check_trajectory("line",from,to)) || (Math.sqrt(Math.pow(to.x - from.x,2)) == Math.sqrt(Math.pow(to.y - from.y,2)) && check_trajectory("diagonal",from,to));break;}
                    case "king": {return Math.sqrt(Math.pow(to.x - from.x,2)) <= 1 && Math.sqrt(Math.pow(to.y - from.y,2)) <= 1;break;}
                    //Need to check menace against king
                }
            }
        }
    },
    props: ["show_next_enigma"]
}
</script>

<style scoped>

.chessboard {
    box-shadow: 3px 3px 0px 2px #918765;
    display: inline-block;
    border-radius: 10px;
    overflow: hidden;
    background: url(~assets/img/chess/chessboard.png);
    background-size: cover;
}

.chessboard-line {
    height: 40px;
    white-space: nowrap;
}
.chessboard-square {
    width: 40px;
    height: 40px;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
}

@media screen and (max-width: 500px){
    .chessboard-line {
        height: 30px;
    }
    .chessboard-square {
    width: 30px;
    height: 30px;
    }
}

.chessboard-square.is-selected {
    background: rgba(52, 152, 219,0.5)
}

.chessboard-line:nth-child(even) .chessboard-square:nth-child(even):not(.is-selected) {
    background: rgba(0,0,0,0.2);
}
.chessboard-line:nth-child(odd) .chessboard-square:nth-child(odd):not(.is-selected) {
    background: rgba(0,0,0,0.2);
}

.chessboard-square img{
    height: 100%;
    opacity: 0.8;
}
</style>