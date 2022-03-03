const bip39 = require('bip39')
const ganache = require("ganache-cli");
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

getAccounts = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
};

createAccounts = async () => {
  const mnemonic = bip39.generateMnemonic(); //generates string
  console.log("Mnemonic:",mnemonic);

  // let accountInfo = web3.eth.accounts.create(mnemonic);
  let accountInfo = web3.eth.accounts.create("trim clip rug spring cry pact myth veteran lazy empty history remind");
  console.log("Account Info:", accountInfo)
};

getAccount = async () => {
  let accountInfo = web3.eth.accounts.privateKeyToAccount('0xed11ed9067d16ac6af7d9ce319b243674d6e68ed7e3a31f61277d8488ee756e7');
  console.log("Account Info:", accountInfo)
}

getAccount();
createAccounts();
getAccounts();