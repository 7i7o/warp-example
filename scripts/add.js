// script to deploy contract source

// imports
import fs from "fs";
import path from "path";
import { WarpFactory } from "warp-contracts";
import { ArweaveSigner } from "warp-contracts-plugin-deploy";

// intiating new warp instance for mainnet
const warp = WarpFactory.forMainnet();

// read private key file
const key = JSON.parse(fs.readFileSync("wallet.json").toString());

// // get absolute path for project directory
// const __dirname = path.resolve();

// // read contract source logic from 'handle.js' and encode it
// const state = fs.readFileSync(
//   path.join(__dirname, "contracts/initial-state.json"),
//   "utf-8"
// );
// const contractSource = fs.readFileSync(
//   path.join(__dirname, "contracts/contract.js"),
//   "utf-8"
// );

const warpContractInstance = (
  await warp.contract("OiZdMxlnWZoGhXqIFRFGFeM_1s2WnYyAszxXvw0U-iw")
).connect(new ArweaveSigner(key));

const state = await warpContractInstance.readState();

console.log(">> State: ", state);

// await warpContractInstance.writeInteraction({
//   function: "add",
// });
// await warpContractInstance.writeInteraction({
//   function: "add",
// });
// await warpContractInstance.writeInteraction({
//   function: "add",
// });
// await warpContractInstance.writeInteraction({
//   function: "add",
// });

// const newState = await warpContractInstance.writeInteraction({
//     function: 'add',
// })

// console.log(">> State: ", newState);
