"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("../../main/typescript/pokemon");
var fight_1 = require("../../main/typescript/fight");
var game_1 = require("../../main/typescript/game");
describe('Test game.ts', function () {
    test('Game winner', function () {
        var ratata = new pokemon_1.Pokemon(1, "ratata", 100, 100);
        var slowpoke = new pokemon_1.Pokemon(2, "slowpoke", 2, 20);
        //rounds
        var fight1 = new fight_1.Fight(ratata, slowpoke);
        var fight2 = new fight_1.Fight(ratata, slowpoke);
        var fight3 = new fight_1.Fight(ratata, slowpoke);
        //game
        var game = new game_1.Game(fight1, fight2, fight3);
        expect(game.gameWinner()).toBe('slowpoke');
    });
});
