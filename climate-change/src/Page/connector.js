const { ethers } = require("ethers");

const abi = [
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "details",
    "type": "string"
   }
  ],
  "name": "addClimateData",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "name": "climateRecords",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "details",
    "type": "string"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "getClimateData",
  "outputs": [
   {
    "components": [
     {
      "internalType": "uint256",
      "name": "timestamp",
      "type": "uint256"
     },
     {
      "internalType": "string",
      "name": "details",
      "type": "string"
     }
    ],
    "internalType": "struct climateChange.ClimateData",
    "name": "",
    "type": "tuple"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "details",
    "type": "string"
   }
  ],
  "name": "updateClimateData",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0x2aE122Ff5512B510bD277c0Cd39D3d02D1928480"

export const contract = new ethers.Contract(address, abi, signer)
