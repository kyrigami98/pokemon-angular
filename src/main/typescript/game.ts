import {Pokemon} from "./pokemon";
import {Fight} from "./fight";

export class Game{
    fight1;
    fight2;
    fight3;
    constructor(fight1: Fight, fight2: Fight, fight3: Fight) {
        this.fight1 = fight1;
        this.fight2 = fight2;
        this.fight3 = fight3;
    }

    gameWinner(){
        if(this.fight1.gameWinner() === this.fight1.pokemon1.name){
            return this.fight1.gameWinner();
        }else if (this.fight1.gameWinner() === this.fight2.pokemon1.name) {
            return this.fight1.gameWinner();
        }else{
            return "continous...";
        }
    }

}
