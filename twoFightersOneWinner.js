////////////////////////////////////////////////////////////////////
// Date Completed 05-29-23
// KYU 7


////////////////////////////////////////////////////////////////////
// Prompt
// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
// Example:

//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }


///////////////////////////////////////////////////////////////////
// My Solution
function declareWinner(fighter1, fighter2, firstAttacker) {
    let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
    let defender = firstAttacker === fighter1.name ? fighter2 : fighter1;
    
    while (true) {
        defender.health -= attacker.damagePerAttack;
        if (defender.health <= 0) {
            return attacker.name;
        }

        let temp = attacker;
        attacker = defender;
        defender = temp;
    }
}

////////////////////////////////////////////////////////////////////
// Favorite Solution
// function declareWinner(fighter1, fighter2, firstAttacker) {
//     if (fighter1.name !== firstAttacker) return declareWinner(fighter2, fighter1, fighter2.name)
//     if (fighter1.health <= 0) return fighter2.name
//     if (fighter2.health <= 0) return fighter1.name
  
//     return declareWinner(new Fighter(fighter2.name, fighter2.health - fighter1.damagePerAttack, fighter2.damagePerAttack), fighter1, fighter2.name)
//   }

////////////////////////////////////////////////////////////////////
// What I learned
// This was mostly a logical exercise. The code wasn't that hard, but it was hard to figure out who would win.