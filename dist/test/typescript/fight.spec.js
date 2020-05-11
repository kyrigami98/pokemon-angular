"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("../../main/typescript/pokemon");
var fight_1 = require("../../main/typescript/fight");
describe('Test fight.ts', function () {
    test('Compare speed', function () {
        var ratata = new pokemon_1.Pokemon(1, "ratata", 100);
        var slowpoke = new pokemon_1.Pokemon(2, "slowpoke", 2);
        var fight = new fight_1.Fight(ratata, slowpoke);
        expect(fight.compareSpeed()).toBe('ratata');
    });
});
