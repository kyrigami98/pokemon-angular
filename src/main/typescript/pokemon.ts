export class Pokemon{
    id;
    name;
    speed;
    lifepoints;
    constructor(id, name, speed, lifepoints) {
        this.id = id;
        this.name = name;
        this.speed = speed;
        this.lifepoints = lifepoints;
    }

    sayHello() {
        return 'Hello' + this.name + ', I have speed: ' + this.speed;
    }

    attack(pokemon: Pokemon) {
        pokemon.lifepoints = pokemon.lifepoints - 20;
        return  this.name + ' attack ' + pokemon.name +  ' with 20 points';
    }

}
