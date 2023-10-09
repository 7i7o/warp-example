# Basic Warp Contract example

## Install dependencies

```bash
yarn
```

## Create a throwaway wallet

```bash
node -e "require('arweave').init({}).wallets.generate().then(JSON.stringify).then(console.log.bind(console))" > wallet.json
```

## Deploy the contract

```bash
node scripts/deploy.js
```

> This displays the transaction id of the contract deployed, take note of it and paste it in the `scripts/readState.js` and `scripts/add.js`files

##

## Read the state of the contract

Remember to copy the contract tx id before you call `readState` or `add` !

```bash
node scripts/readState.js
```

## Call the `add` function

```bash
node scripts/add.js
```
