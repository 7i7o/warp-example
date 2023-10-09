// script to deploy contract source

// imports
import fs from "fs";
import path from "path";
import { WarpFactory } from "warp-contracts";
import { ArweaveSigner, DeployPlugin } from "warp-contracts-plugin-deploy";

// intiating new warp instance for mainnet
const warp = WarpFactory.forMainnet().use(new DeployPlugin());

// read private key file
const key = JSON.parse(fs.readFileSync("wallet.json").toString());

// get absolute path for project directory
const __dirname = path.resolve();

// read contract source logic from 'handle.js' and encode it
const state = fs.readFileSync(
  path.join(__dirname, "contracts/initial-state.json"),
  "utf-8"
);
const contractSource = fs.readFileSync(
  path.join(__dirname, "contracts/contract.js"),
  "utf-8"
);

const { contractTxId } = await warp.createContract.deploy({
  wallet: new ArweaveSigner(key),
  initState: state,
  src: contractSource,
});

console.log("");
console.log("Contract deployed to: ", contractTxId);
console.log("");
