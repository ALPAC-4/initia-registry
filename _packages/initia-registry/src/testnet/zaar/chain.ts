import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "zaar",
  chain_id: "zaar-testnet-2",
  evm_chain_id: 113765719155157,
  pretty_name: "Zaar",
  status: "live",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "minitiad",
  node_home: "$HOME/.minitia",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "evm/6ed1637781269560b204c27Cd42d95e057C4BE44",
        fixed_min_gas_price: 15000000000,
        low_gas_price: 15000000000,
        average_gas_price: 15000000000,
        high_gas_price: 15000000000,
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: "https://rpc-zaar-testnet-2.anvil.testnet.initia.xyz",
      },
    ],
    rest: [
      {
        address: "https://rest-zaar-testnet-2.anvil.testnet.initia.xyz",
      },
    ],
    grpc: [
      {
        address: "grpc-zaar-testnet-2.anvil.testnet.initia.xyz:443",
      },
    ],
    "json-rpc": [
      {
        address: "https://jsonrpc-zaar-testnet-2.anvil.testnet.initia.xyz",
      },
    ],
    "json-rpc-websocket": [
      {
        address: "wss://jsonrpc-ws-zaar-testnet-2.anvil.testnet.initia.xyz",
      },
    ],
  },
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.png",
      svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.svg",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.png",
    svg: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/images/ZAAR.svg",
  },
  metadata: {
    op_bridge_id: "612",
    op_denoms: ["uinit"],
    executor_uri: "https://opinit-api-zaar-testnet-2.anvil.testnet.initia.xyz",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "nft-transfer",
        channel_id: "channel-1",
        version: "ics721-1",
      },
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/zaar/assetlist.json",
    minitia: {
      type: "minievm",
      version: "v0.6.9",
    },
  },
};
export default info;
