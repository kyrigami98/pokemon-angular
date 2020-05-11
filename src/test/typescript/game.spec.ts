import {Pokemon} from "../../main/typescript/pokemon";
import {Fight} from "../../main/typescript/fight";
import {Game} from "../../main/typescript/game";

describe('Test game.ts', () => {

    test('Game winner', () => {
        const ratata = new Pokemon(1, "ratata",100,100);
        const slowpoke = new Pokemon(2,"slowpoke",2,20);
        //rounds
        const fight1 = new Fight(ratata, slowpoke);
        const fight2 = new Fight(ratata, slowpoke);
        const fight3 = new Fight(ratata, slowpoke);
        //game
        const game = new Game(fight1, fight2 ,fight3);
        expect(game.gameWinner()).toBe('ratata');

    })

});
