import {Pokemon} from "../../main/typescript/pokemon";

describe('Test pokemon.ts', () => {

    test('say hello', () => {
        const pokemon = new Pokemon(1,"pika",2, 100);
        expect(pokemon.sayHello()).toBe('Hello' + pokemon.name + ', I have speed: ' + pokemon.speed);
    })

    test('attack', () => {
        const pokemon1 = new Pokemon(1,"pika",2, 100);
        const pokemon2 = new Pokemon(1,"Carapute",5, 200);
        expect(pokemon1.attack(pokemon2)).toBe(pokemon1.name + ' attack ' + pokemon2.name +  ' with 20 points');
    })

});
