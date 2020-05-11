var Pokemon = /** @class */ (function () {
    function Pokemon() {
        this.id = 'id_1';
        this.name = 'Pikemon';
    }
    Object.defineProperty(Pokemon.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name.charAt(0).toUpperCase() + name.slice(1);
        },
        enumerable: true,
        configurable: true
    });
    Pokemon.prototype.sayHello = function () {
        console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
    };
    Pokemon.prototype.attack = function () {
        console.log(this.name + ' make Attack tonnerre!');
    };
    return Pokemon;
}());
var pikachu = new Pokemon();
pikachu.name = 'pikachu';
pikachu.attack();
