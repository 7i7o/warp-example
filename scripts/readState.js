// script to deploy contract source

// imports
// import fs from "fs";
import { WarpFactory } from "warp-contracts";

const WARP_CONTRACT_TX_ID = "OiZdMxlnWZoGhXqIFRFGFeM_1s2WnYyAszxXvw0U-iw";

// intiating new warp instance for mainnet
const warp = WarpFactory.forMainnet();

// read private key file
// const key = JSON.parse(fs.readFileSync("wallet.json").toString());

const warpContractInstance = await warp.contract(WARP_CONTRACT_TX_ID);

const state = await warpContractInstance.readState();

console.log("");
console.log("Warp Contract State: ", state);
console.log("");
