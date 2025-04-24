//importando as dependencias
const bip32 = require("bip32")
const bip39 = require("bip39")
const bitcoin = require("bitcoinjs-lib")

// definindo a network
// bitcoin - rede principal -mainnet
// testnet - rede de test - testnet
const network = bitcoin.networks.testnet

// derivação de carteiras HD
const path = `m/49'/1'/0'/0`

// criando as palavras para senha
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// criando raiz da carteira HD
let root = bip32.fromSeed(seed, network)

// criando uma conta
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2wpkh({
    pubkey: node.publicKey,
    network: network,
}).address

console.log("Carteira Gerada")
console.log("Endereço: ",btcAddress)
console.log("Chave privada", node.toWIF())
console.log("Seed: ",mnemonic)