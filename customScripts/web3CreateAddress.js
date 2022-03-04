const bip39 = require('bip39')
const ganache = require("ganache-cli");
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { hdkey } = require('ethereumjs-wallet');

getAccounts = async () => {
  const accounts = await web3.eth.getAccounts();
  // console.log(accounts);
  return accounts
};

// createAccounts = async () => {
//   const mnemonic = bip39.generateMnemonic(); //generates string
//   console.log("Mnemonic:",mnemonic);

//   // let accountInfo = web3.eth.accounts.create(mnemonic);
//   let accountInfo = web3.eth.accounts.create("trim clip rug spring cry pact myth veteran lazy empty history remind");
//   console.log("Account Info:", accountInfo)
// };

getAccount = async () => {
  let accountInfo = web3.eth.accounts.privateKeyToAccount('0xed11ed9067d16ac6af7d9ce319b243674d6e68ed7e3a31f61277d8488ee756e7');
  console.log("Account Info:", accountInfo)
}

getBalance = async () => {
  let balance = web3.utils.fromWei(await web3.eth.getBalance('0xe72711edddd397965cc1202f4ebe13429b68502a'));
  console.log("Balance:", balance)
}

sendBalance = async () => {
  let addresses = await getAccounts() 
  let response = await web3.eth.sendTransaction({to: addresses[0], from:addresses[1], value:web3.utils.toWei("0.5", "ether")})
  console.log("Response:", response)
}

createAccounts = async () => {
  // const mnemonic = bip39.generateMnemonic();
  const mnemonic = "trim clip rug spring cry pact myth veteran lazy empty history remind"
  const count = 1;
  const result = generateAddressesFromSeed(mnemonic, count);
  
  console.log(result);
}

function generateAddressesFromSeed(mnemonic, count) {  
  let seed = bip39.mnemonicToSeedSync(mnemonic);
  let hdwallet = hdkey.fromMasterSeed(seed);
  let wallet_hdpath = "m/44'/60'/0'/0/";
  
  let accounts = [];

  for (let i = 0; i < count; i++) {
    let wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
    let address = "0x" + wallet.getAddress().toString("hex");
    let privateKey = wallet.getPrivateKey().toString("hex");
    accounts.push({ address: address, privateKey: privateKey });
  }

  return accounts;
}

// sendBalance()
// getBalance();
// getAccount();
createAccounts();
// getAccounts();