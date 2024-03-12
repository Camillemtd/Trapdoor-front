export const TRAPDOOR_SEPOLIA_ADRESS =
  "0x4Ce64e9253F638A7B219047707D40b2B4f40CC25";

export const TRAPDOOR_CONTRACT_ABI = [
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "vrfCoordinator", type: "address" },
          { internalType: "address", name: "priceFeed", type: "address" },
          { internalType: "bytes32", name: "gasLane", type: "bytes32" },
          { internalType: "uint64", name: "subscriptionId", type: "uint64" },
          { internalType: "uint32", name: "callbackGasLimit", type: "uint32" },
        ],
        internalType: "struct Trapdoor.TrapdoorConfig",
        name: "config",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      { internalType: "address", name: "have", type: "address" },
      { internalType: "address", name: "want", type: "address" },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "Trapdoor__GameIsClosed", type: "error" },
  { inputs: [], name: "Trapdoor__InvalidChoice", type: "error" },
  { inputs: [], name: "Trapdoor__InvalidEntryFee", type: "error" },
  { inputs: [], name: "Trapdoor__MaxPlayersReached", type: "error" },
  { inputs: [], name: "Trapdoor__NotEnoughTimePassed", type: "error" },
  { inputs: [], name: "Trapdoor__TransferFailed", type: "error" },
  { inputs: [], name: "Trapdoor__TrapdoorsAreEmpty", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum Trapdoor.TrapdoorChoice",
        name: "choice",
        type: "uint8",
      },
    ],
    name: "PlayerChose",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "RandomTrapdoorRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "trapdoorChoice",
        type: "uint256",
      },
    ],
    name: "TrapdoorOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum Trapdoor.TrapdoorState",
        name: "newState",
        type: "uint8",
      },
    ],
    name: "TrapdoorStateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address[]",
        name: "winners",
        type: "address[]",
      },
    ],
    name: "WinnerChosen",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "enum Trapdoor.TrapdoorChoice",
        name: "_choice",
        type: "uint8",
      },
    ],
    name: "chooseTrapdoor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentPrizePool",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEthPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFeesAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastOpenedAt",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastPrizeValue",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastTrapdoorSide",
    outputs: [
      { internalType: "enum Trapdoor.TrapdoorChoice", name: "", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastWinners",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLeftPlayers",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPlayersCount",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRightPlayers",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTicketPriceInEth",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTrapdoorState",
    outputs: [
      { internalType: "enum Trapdoor.TrapdoorState", name: "", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "requestId", type: "uint256" },
      { internalType: "uint256[]", name: "randomWords", type: "uint256[]" },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "revealTrapdoor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_newInterval", type: "uint256" },
    ],
    name: "updateInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
