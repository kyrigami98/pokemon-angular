"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("../../main/typescript/pokemon");
var fight_1 = require("../../main/typescript/fight");
describe('Test fight.ts', function () {
    test('Compare speed', function () {
        //pokemon
        var ratata = new pokemon_1.Pokemon(1, "ratata", 100, 100);
        var slowpoke = new pokemon_1.Pokemon(2, "slowpoke", 2, 100);
        //round
        var fight = new fight_1.Fight(ratata, slowpoke);
        expect(fight.compareSpeed()).toBe('ratata');
    });
    test('Found winner', function () {
        //pokemons
        var ratata = new pokemon_1.Pokemon(1, "ratata", 100, 100);
        var slowpoke = new pokemon_1.Pokemon(2, "slowpoke", 2, 0);
        //round
        var fight = new fight_1.Fight(ratata, slowpoke);
        fight.fighting();
        expect(fight.fightWinner()).toBe('ratata');
    });
    test('fighting ', function () {
        //pokemons
        var ratata = new pokemon_1.Pokemon(1, "ratata", 100, 100);
        var slowpoke = new pokemon_1.Pokemon(2, "slowpoke", 2, 100);
        //round
        var fight = new fight_1.Fight(ratata, slowpoke);
        expect(fight.fighting()).toBe('fighting');
    });
});
