// script to deploy contract source

// imports
import fs from "fs";
import path from "path";
import { WarpFactory } from "warp-contracts";
import { ArweaveSigner } from "warp-contracts-plugin-deploy";

const WARP_CONTRACT_TX_ID = "OiZdMxlnWZoGhXqIFRFGFeM_1s2WnYyAszxXvw0U-iw";

// intiating new warp instance for mainnet
const warp = WarpFactory.forMainnet();

// read private key file
const key = JSON.parse(fs.readFileSync("wallet.json").toString());

const warpContractInstance = (await warp.contract(WARP_CONTRACT_TX_ID)).connect(
  new ArweaveSigner(key)
);

// const state = await warpContractInstance.readState();

await warpContractInstance.writeInteraction({
  function: "add",
});
