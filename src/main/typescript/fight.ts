import {Pokemon} from "./pokemon";

export class Fight{

    pokemon1;
    pokemon2;

    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }

    compareSpeed(){
        if(this.pokemon1.speed > this.pokemon2.speed){
            return this.pokemon1.name;
        }
        else{
            return this.pokemon2.name;
        }
    }

}
