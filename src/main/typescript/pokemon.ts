export class Pokemon{
    id;
    name;
    speed;
    constructor(id, name, speed) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }

    sayHello() {
        return 'Hello' + this.name + ', I have speed: ' + this.speed;
    }

    attack(pokemon: Pokemon) {
        return '' + pokemon.name + pokemon.speed +  ', I have ID: ' + pokemon.id;
    }
    compareSpeed(a: Pokemon, b: Pokemon){
        console.log(a.speed);
        if(a.speed > b.speed){
            return a.name;
        }
        else{
            return b.name;
        }
    }

}
