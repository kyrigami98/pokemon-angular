"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("../../main/typescript/pokemon");
describe('Test pokemon.ts', function () {
    test('say hello', function () {
        var pokemon = new pokemon_1.Pokemon(1, "pika", 2);
        expect(pokemon.sayHello()).toBe('Hello' + pokemon.name + ', I have speed: ' + pokemon.speed);
    });
});
