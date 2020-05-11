import {Pokemon} from "../../main/typescript/pokemon";
import {Fight} from "../../main/typescript/fight";

describe('Test fight.ts', () => {

    test('Compare speed', () => {
        //pokemon
        const ratata = new Pokemon(1, "ratata",100,100);
        const slowpoke = new Pokemon(2,"slowpoke",2,100);
        //round
        const fight = new Fight(ratata, slowpoke);
        expect(fight.compareSpeed()).toBe('ratata');

    });

    test('Found winner', () => {
        //pokemons
        const ratata = new Pokemon(1, "ratata",100,100);
        const slowpoke = new Pokemon(2,"slowpoke",2,0);
        //round
        const fight = new Fight(ratata, slowpoke);
        fight.fighting();
        expect(fight.fightWinner()).toBe('ratata');

    });

    test('fighting ', () => {
        //pokemons
        const ratata = new Pokemon(1, "ratata",100,100);
        const slowpoke = new Pokemon(2,"slowpoke",2,100);
        //round
        const fight = new Fight(ratata, slowpoke);
        expect(fight.fighting()).toBe('fighting');

    });

});
