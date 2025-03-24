import { Chain } from "@initia/initia-registry-types";
const info: Chain = {
  $schema: "../../chain.schema.json",
  chain_name: "intergaze",
  chain_id: "virgaze-1",
  website: "https://intergaze.xyz",
  pretty_name: "Intergaze",
  status: "live",
  network_type: "testnet",
  bech32_prefix: "init",
  daemon_name: "intergazed",
  node_home: "$HOME/.intergaze",
  key_algos: ["secp256k1"],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom:
          "ibc/37A3FB4FED4CA04ED6D9E5DA36C6D27248645F0E22F585576A1488B8A89C5A50",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
      {
        denom: "ugaze",
        fixed_min_gas_price: 0.15,
        low_gas_price: 0.15,
        average_gas_price: 0.15,
        high_gas_price: 0.4,
      },
    ],
  },
  description: "Intergaze Testnet",
  apis: {
    rpc: [
      {
        address: "https://rpc.virgaze-1.intergaze-apis.com",
        provider: "Intergaze",
      },
    ],
    rest: [
      {
        address: "https://rest.virgaze-1.intergaze-apis.com",
        provider: "Intergaze",
      },
    ],
  },
  explorers: [],
  faucets: [],
  images: [
    {
      png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/intergaze.png",
    },
  ],
  logo_URIs: {
    png: "https://raw.githubusercontent.com/initia-labs/initia-registry/main/images/intergaze.png",
  },
  metadata: {
    op_bridge_id: "735",
    op_denoms: ["uinit"],
    executor_uri: "https://executor.virgaze-1.intergaze-apis.com",
    ibc_channels: [
      {
        chain_id: "initiation-2",
        port_id: "transfer",
        channel_id: "channel-0",
        version: "ics20-1",
      },
      {
        chain_id: "initiation-2",
        port_id:
          "wasm.init1wug8sewp6cedgkmrmvhl3lf3tulagm9hnvy8p0rppz9yjw0g4wtq7947m6",
        channel_id: "channel-1",
        version: "ics721-1",
      },
    ],
    assetlist:
      "https://raw.githubusercontent.com/initia-labs/initia-registry/main/testnets/intergaze/assetlist.json",
    minitia: {
      type: "miniwasm",
      version: "v0.7.0-1",
    },
  },
};
export default info;
