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
    },
    willLikelySurvive() {
      // Returns true if the object's dna array contains at least 60% 'C' or 'G' bases, otherwise returns false
      let countCorG = 0;
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i] === 'C' || this.dna[i] === 'G')
          countCorG ++
      }
      return countCorG/this.dna.length*100 > 60;
    }
  };
}

// test data
const mockStrand = mockUpStrand();
const mock2 = mockUpStrand();

// TEST COMPARE DNA
const newObj = pAequorFactory(34, mockStrand);
newObj.compareDNA(mock2);

// Testing willLikelySurvive()
console.log(newObj.willLikelySurvive());


// create 30 instances of pAequor and save them into an array
let pAequorArray = []
for (let i = 0; i < 30; i++) {
  pAequorArray.push(pAequorFactory(i + 1, mockUpStrand()))
}

// testing
console.log(`Array length: ${pAequorArray.length}\nFirst element: ${pAequorArray[0].specimenNum}\n
Last element: ${pAequorArray[29].specimenNum}`)
console.log(pAequorArray[0].dna)
console.log(pAequorArray[24].mutate())
