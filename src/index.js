// criando uma classe chamada hero
class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    // criando um switch case para definir os tipos de persogens e tipos de ataques.
    attack() {
        let attacking

        switch (this.type) {
            case 'warrior':
                attacking = 'sword'
                break

            case 'mage':
                attacking = 'magic'
                break

            case 'monk':
                attacking = 'martial arts'
                break

            case 'ninja':
                attacking = 'shuriken'
                break

            default:
                attacking = 'attacked using'
        }

        console.log(`The ${this.type} attacked using ${attacking}`)
    }
}

let firstHero = new hero('LordMorvak', 44, 'warrior')
let secondHero = new hero('LordMorvak', 44, 'mage')
let thirdHero = new hero('LordMorvak', 44, 'monk')
let fourthHero = new hero('LordMorvak', 44, 'ninja')

firstHero.attack()
secondHero.attack()
thirdHero.attack()
fourthHero.attack()