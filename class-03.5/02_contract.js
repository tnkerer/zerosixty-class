const { ethers, JsonRpcProvider } = require('ethers')
const { abi } = require('./Pizza.json')
require('dotenv').config()

const provider = new JsonRpcProvider(process.env.RPC_URL)

// Endereço do contrato que com o qual queremos interagir
const contractAddress = '0x49065fd669cc1ca3339f46210743839fa407fee5'

// A carteira do usuário que quer interagir com o contrato
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

// O contrato que queremos interagir
const contract = new ethers.Contract(contractAddress, abi, wallet)

const eat = async () => {
    const tx = await contract.eatSlice()
    console.log('Transaction hash:', tx.hash)
}

eat()

