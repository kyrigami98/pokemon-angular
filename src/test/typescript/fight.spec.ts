import {Pokemon} from "../../main/typescript/pokemon";
import {Fight} from "../../main/typescript/fight";

describe('Test fight.ts', () => {

    test('Compare speed', () => {
        const ratata = new Pokemon(1, "ratata",100);
        const slowpoke = new Pokemon(2,"slowpoke",2);
        const fight = new Fight(ratata, slowpoke);
        expect(fight.compareSpeed()).toBe('ratata');

    })

});
