const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],
  reversed: false,

  _reset() {
    this.chain = [];
    this.reversed = false;
  },

  getLength() {
   return this.chain.length;
  },
  addLink(value) {
    if (this.reversed) {
      this.chain.unshift(value);
    } else {
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this._reset();
      throw new Error(`You can't remove incorrect link!`);
    }


    position--;
    if (position < 0 || position >= this.chain.length) {
      this._reset();
      throw new Error(`You can't remove incorrect link!`);   
    }


    let index;
    if (this.reversed) {
      index = this.chain.length - position - 1;
    } else {
      index = position;
    } 
    this.chain.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.reversed = !this.reversed;
    return this;
  },
  finishChain() {
    if (this.reversed) {
      this.chain.reverse();
    }

    
    let result = this.chain.map(i => `( ${i} )`).join("~~");
    this._reset();
    return result;
  }
};

module.exports = {
  chainMaker
};
