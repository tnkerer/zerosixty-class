const { ethers, JsonRpcProvider } = require('ethers')
require('dotenv').config()

const provider = new JsonRpcProvider(process.env.RPC_URL)

provider.getBlockNumber().then((blockNumber) => {
    console.log('Block number:', blockNumber)
})
