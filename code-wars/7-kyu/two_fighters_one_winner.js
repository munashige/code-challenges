/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

*/


function declareWinner(fighter1, fighter2, firstAttacker) {
    let f1pot = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    let f2pot = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    return f1pot < f2pot ? fighter2.name :  f2pot < f1pot ? fighter1.name : firstAttacker
  }
