export class Pokemon{
    id;
    _name;
    speed;
    constructor(id, name, speed) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    set name(name) {
        this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    get name() {
        return this._name;
    }

    sayHello() {
        return 'Hello' + this.name + this.speed +  ', I have ID: ' + this.id;
    }

    attack() {
        return this.name +' make Attack tonnerre!';
    }

}
