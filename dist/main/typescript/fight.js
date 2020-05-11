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
    Fight.prototype.fighting = function () {
        while (this.pokemon1.lifepoints <= 0 || this.pokemon2.lifepoints <= 0) {
            this.pokemon1.attack(this.pokemon2);
            this.pokemon2.attack(this.pokemon1);
        }
        return 'fighting';
    };
    Fight.prototype.fightWinner = function () {
        if (this.pokemon1.lifepoints <= 0) {
            return this.pokemon2.name;
        }
        else if (this.pokemon2.lifepoints <= 0) {
            return this.pokemon1.name;
        }
        else {
            return 'egalité';
        }
    };
    return Fight;
}());
exports.Fight = Fight;
