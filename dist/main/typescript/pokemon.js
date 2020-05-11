"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(id, name, speed, lifepoints) {
        this.id = id;
        this.name = name;
        this.speed = speed;
        this.lifepoints = lifepoints;
    }
    Pokemon.prototype.sayHello = function () {
        return 'Hello' + this.name + ', I have speed: ' + this.speed;
    };
    Pokemon.prototype.attack = function (pokemon) {
        pokemon.lifepoints = pokemon.lifepoints - 20;
        return this.name + ' attack ' + pokemon.name + ' with 20 points';
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
