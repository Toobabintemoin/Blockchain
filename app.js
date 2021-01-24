let Block = require("./block")
let Blockchain = require("./blockchain")
let Transaction = require("./transaction")


// let transaction = new Transaction('Mary', 'jerry', 230696)

//  Create just simple block here, we access all the file in the root file //
let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)

let transaction1 = new  Transaction('Mary', 'jerry', 230696)
let block = blockchain.getNextBlock([transaction1])

console.log(blockchain);