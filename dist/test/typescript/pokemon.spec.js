"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("../../main/typescript/pokemon");
describe('Test pokemon.ts', function () {
    test('say hello', function () {
        var pokemon = new pokemon_1.Pokemon(1, "pika", 2, 100);
        expect(pokemon.sayHello()).toBe('Hello' + pokemon.name + ', I have speed: ' + pokemon.speed);
    });
    test('attack', function () {
        var pokemon1 = new pokemon_1.Pokemon(1, "pika", 2, 100);
        var pokemon2 = new pokemon_1.Pokemon(1, "Carapute", 5, 200);
        expect(pokemon1.attack(pokemon2)).toBe(pokemon1.name + ' attack ' + pokemon2.name + ' with 20 points');
    });
});
