'use strict';

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * dnaBases.length)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

// Challenge project
function pAequorFactory(number, arr) {
  // Object factory, returns an object
  return {
    specimenNum: number,
    dna: arr,
    // Selects a random element in the dna array
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const oldBase = this.dna[randomIndex];

      while (this.dna[randomIndex] === oldBase) {
        this.dna[randomIndex] = returnRandBase();
      }
      return this.dna;
    },
    compareDNA(pAequor) {
      // Takes in an object pAequor, compares the current DNA (this.dna) with the pAequor's passed object.
      // prints the percentage of bases that are the same
      let sameBase = 0;
      for (let i = 0; i < pAequor.length; i++){
        if (pAequor[i] === this.dna[i])
          sameBase ++;
      }
      console.log(`specimen #1 and specimen #2 have ${((sameBase/pAequor.length)*100).toFixed(2)}% DNA in common`);
    }
  }
}
const mockStrand = mockUpStrand();
const mock2 = mockUpStrand();

// TEST COMPARE DNA
const newObj = pAequorFactory(34, mockStrand);
newObj.compareDNA(mock2);
