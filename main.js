console.log('salut');

class pokemon {
    constructor() {
        this.id = 'id_1';
        this.name = 'Pikemon';
    }
    set name(name) {
        this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    get name() {
        return this._name;
    }

    sayHello() {
        console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
    }

    attack() {
        console.log(this.name +' make Attack tonnerre!');
    }

}

var pikachu = new pokemon();
pikachu.name = 'pikachu';
pikachu.attack();
