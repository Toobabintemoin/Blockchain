let sha256 = require('js-sha256')
const Block = require('./block')

class Blockchain { 
      constructor(genesisBlock){  
          this.blocks = []
          this.addBlock(genesisBlock) 
} 
    
addBlock(block){                              // we create this method to add block in the blocks if blocks is empty then return previous hash why   
    if(this.blocks.length == 0){              // because 1st block is genesis block and it does not have hash that why we create a dummy hash                      
    block.previousHash = '23569874'           // once dummy hash is created then we need a next hash for next block then we generate a new hash
    block.hash = this.generateHash(block)     // method to add a new hash we add access in addBlock method for new hash
    }   
    
     this.blocks.push(block)                   // when new hash is generated is will add in blocks empty array
} 

getNextBlock(transactions){
    let block = new Block()

    transactions.forEach(function(transaction){
        block.addTransaction(transaction)
    });

let previousBlock =  this.getPreviousBlock()
block.index = this.blocks.length
block.previousHash = previousBlock.hash
block.hash = this.generateHash(block)
 
  return block

}

getPreviousBlock(){
    return this.blocks[this.blocks.length - 1]
}

generateHash(block){                       // here we create a method for generatehash sha256 is an algorithm to generate hash       
     let hash = sha256(block.key) 
     
    while(!hash.startsWith("0")){
        block.nonce =+ 1
        hash = sha256(block.key) 
        console.log(hash);

    }

      return hash  
}}

module.exports = Blockchain 