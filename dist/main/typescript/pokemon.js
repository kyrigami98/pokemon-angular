"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(id, name, speed) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    Pokemon.prototype.sayHello = function () {
        return 'Hello' + this.name + ', I have speed: ' + this.speed;
    };
    Pokemon.prototype.attack = function (pokemon) {
        return '' + pokemon.name + pokemon.speed + ', I have ID: ' + pokemon.id;
    };
    Pokemon.prototype.compareSpeed = function (a, b) {
        console.log(a.speed);
        if (a.speed > b.speed) {
            return a.name;
        }
        else {
            return b.name;
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
