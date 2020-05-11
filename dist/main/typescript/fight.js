"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fight = /** @class */ (function () {
    function Fight(pokemon1, pokemon2) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }
    Fight.prototype.compareSpeed = function () {
        if (this.pokemon1.speed > this.pokemon2.speed) {
            return this.pokemon1.name;
        }
        else {
            return this.pokemon2.name;
        }
    };
    return Fight;
}());
exports.Fight = Fight;
