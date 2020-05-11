import {Pokemon} from "../../main/typescript/pokemon";

describe('Test pokemon.ts', () => {

    test('say hello', () => {
        const pokemon = new Pokemon(1,"pika",2);
        expect(pokemon.sayHello()).toBe('Hello' + pokemon.name + pokemon.speed +  ', I have ID: ' + pokemon.id);
    })
});
