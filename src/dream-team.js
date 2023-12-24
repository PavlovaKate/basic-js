const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  
  let name = '';

  if(!Array.isArray(members)) {
    return false;
  }

  members.forEach(function (e) {
    if (typeof(e) == 'string') {
      for (let i = 0; i < e.length; i++) {
        if (e[i] >= 'A' && e[i] <= 'Z') {;
          name += e[i];
          break
        }
      }
      if (e[0] >= 'a' && e[0] <= 'z') {
        name += e[0].toUpperCase();
      }
    }
  })

  return name == '' ? false : name.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
