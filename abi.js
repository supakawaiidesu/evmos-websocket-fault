export const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "key",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "margin",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "pnl",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "wasLiquidated",
				"type": "bool"
			}
		],
		"name": "ClosePosition",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "key",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "referral",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "limitPrice",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "margin",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isClose",
				"type": "bool"
			}
		],
		"name": "NewOrder",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "key",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "margin",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			}
		],
		"name": "PositionUpdated",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "PRICE_DECIMALS",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UNIT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "UNIT_DECIMALS",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "maxLeverage",
						"type": "uint64"
					},
					{
						"internalType": "uint32",
						"name": "liquidationThreshold",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "liquidationFee",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "longFee",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "shortFee",
						"type": "uint32"
					},
					{
						"internalType": "uint64",
						"name": "interest",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "maxProfit",
						"type": "uint64"
					}
				],
				"internalType": "struct Trading.Product",
				"name": "_product",
				"type": "tuple"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			}
		],
		"name": "cancelOrder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "darkoracle",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			}
		],
		"name": "distributeFees",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feekeeper",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			}
		],
		"name": "getOrder",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bool",
						"name": "isClose",
						"type": "bool"
					},
					{
						"internalType": "uint64",
						"name": "size",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "margin",
						"type": "uint64"
					}
				],
				"internalType": "struct Trading.Order",
				"name": "order",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "keys",
				"type": "bytes32[]"
			}
		],
		"name": "getOrders",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bool",
						"name": "isClose",
						"type": "bool"
					},
					{
						"internalType": "uint64",
						"name": "size",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "margin",
						"type": "uint64"
					}
				],
				"internalType": "struct Trading.Order[]",
				"name": "_orders",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			}
		],
		"name": "getPendingFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			}
		],
		"name": "getPosition",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "size",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "margin",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "timestamp",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "price",
						"type": "uint64"
					}
				],
				"internalType": "struct Trading.Position",
				"name": "position",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32[]",
				"name": "keys",
				"type": "bytes32[]"
			}
		],
		"name": "getPositions",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "size",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "margin",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "timestamp",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "price",
						"type": "uint64"
					}
				],
				"internalType": "struct Trading.Position[]",
				"name": "_positions",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			}
		],
		"name": "getProduct",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "maxLeverage",
						"type": "uint64"
					},
					{
						"internalType": "uint32",
						"name": "liquidationThreshold",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "liquidationFee",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "longFee",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "shortFee",
						"type": "uint32"
					},
					{
						"internalType": "uint64",
						"name": "interest",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "maxProfit",
						"type": "uint64"
					}
				],
				"internalType": "struct Trading.Product",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "keeperFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "liquidatePosition",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "referral",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "trader",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			},
			{
				"internalType": "bytes32",
				"name": "limitPrice",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			}
		],
		"name": "migratePosition",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextCloseOrderId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextPositionId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "oracle",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "includeFee",
				"type": "bool"
			}
		],
		"name": "releaseMargin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "router",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "feeKeeper",
				"type": "address"
			}
		],
		"name": "setFeeKeeper",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newKeeperFee",
				"type": "uint256"
			}
		],
		"name": "setKeeperFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_minMargin",
				"type": "uint256"
			}
		],
		"name": "setMinMargin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "setOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_router",
				"type": "address"
			}
		],
		"name": "setRouter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "settleOrder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "referral",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			},
			{
				"internalType": "bytes32",
				"name": "limitPrice",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			}
		],
		"name": "submitCloseOrder",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "referral",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isLong",
				"type": "bool"
			},
			{
				"internalType": "bytes32",
				"name": "limitPrice",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "margin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			}
		],
		"name": "submitOrder",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "treasury",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "productId",
				"type": "bytes32"
			},
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "maxLeverage",
						"type": "uint64"
					},
					{
						"internalType": "uint32",
						"name": "liquidationThreshold",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "liquidationFee",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "longFee",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "shortFee",
						"type": "uint32"
					},
					{
						"internalType": "uint64",
						"name": "interest",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "maxProfit",
						"type": "uint64"
					}
				],
				"internalType": "struct Trading.Product",
				"name": "_product",
				"type": "tuple"
			}
		],
		"name": "updateProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];