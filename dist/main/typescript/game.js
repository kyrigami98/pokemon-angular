"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game(fight1, fight2, fight3) {
        this.fight1 = fight1;
        this.fight2 = fight2;
        this.fight3 = fight3;
    }
    Game.prototype.gameWinner = function () {
        if (this.fight1.fightWinner() === this.fight2.fightWinner() || this.fight2.fightWinner() === this.fight3.fightWinner()
            || this.fight1.fightWinner() === this.fight3.fightWinner()) {
            return this.fight1.fightWinner();
        }
        else {
            return this.fight2.fightWinner();
        }
    };
    return Game;
}());
exports.Game = Game;
