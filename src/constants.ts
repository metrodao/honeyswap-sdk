import JSBI from 'jsbi'
import PERMISSIVE_MULTICALL_ABI from './abis/PermissiveMulticall.json'
import STAKING_REWARDS_FACTORY_ABI from './abis/staking-rewards-distribution-factory.json'
import STAKING_REWARDS_DISTRIBUTION_ABI from './abis/staking-rewards-distribution.json'
import TOKEN_REGISTRY_ABI from './abis/token-registry.json'
import {
  rinkeby as coreRinkeby,
  mainnet as coreMainnet,
  arbitrumTestnetV3 as coreArbitrumTestnetV3,
  sokol as coreSokol,
  xdai as coreXDai,
  matic as coreMatic,
  avalanche as coreAvalanche,
  binance as coreBinance,
  fuse as coreFuse,
  iotex as coreIotex,
  fantom as coreFantom,
  harmony as coreHarmony
} from 'dxswap-core/.contracts.json'
import {
  rinkeby as peripheryRinkeby,
  mainnet as peripheryMainnet,
  arbitrumTestnetV3 as peripheryArbitrumTestnetV3,
  sokol as peripherySokol,
  xdai as peripheryXDai,
  matic as peripheryMatic,
  avalanche as peripheryAvalanche,
  binance as peripheryBinance,
  fuse as peripheryFuse,
  iotex as peripheryIotex,
  fantom as peripheryFantom,
  harmony as peripheryHarmony
} from 'dxswap-periphery/.contracts.json'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  RINKEBY = 4,
  ARBITRUM_TESTNET_V3 = 79377087078960,
  SOKOL = 77,
  XDAI = 100,
  MATIC = 137,
  AVALANCHE = 43114,
  BINANCE = 56,
  FUSE = 122,
  IOTEX = 4689,
  FANTOM = 250,
  HARMONY = 1666600000
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const FACTORY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: coreMainnet.factory,
  [ChainId.RINKEBY]: coreRinkeby.factory,
  [ChainId.ARBITRUM_TESTNET_V3]: coreArbitrumTestnetV3.factory,
  [ChainId.SOKOL]: coreSokol.factory,
  [ChainId.XDAI]: coreXDai.factory,
  [ChainId.MATIC]: coreMatic.factory,
  [ChainId.AVALANCHE]: coreAvalanche.factory,
  [ChainId.BINANCE]: coreBinance.factory,
  [ChainId.FUSE]: coreFuse.factory,
  [ChainId.IOTEX]: coreIotex.factory,
  [ChainId.FANTOM]: coreFantom.factory,
  [ChainId.HARMONY]: coreHarmony.factory
}

export const ROUTER_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.RINKEBY]: peripheryRinkeby.router,
  [ChainId.MAINNET]: peripheryMainnet.router,
  [ChainId.ARBITRUM_TESTNET_V3]: peripheryArbitrumTestnetV3.router,
  [ChainId.SOKOL]: peripherySokol.router,
  [ChainId.XDAI]: peripheryXDai.router,
  [ChainId.MATIC]: peripheryMatic.router,
  [ChainId.AVALANCHE]: peripheryAvalanche.router,
  [ChainId.BINANCE]: peripheryBinance.router,
  [ChainId.FUSE]: peripheryFuse.router,
  [ChainId.IOTEX]: peripheryIotex.router,
  [ChainId.FANTOM]: peripheryFantom.router,
  [ChainId.HARMONY]: peripheryHarmony.router
}

export const STAKING_REWARDS_FACTORY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000001234',
  [ChainId.RINKEBY]: '0xDcA39454f0B83c6f0807708b0E6a620dd9BA6808',
  [ChainId.ARBITRUM_TESTNET_V3]: '0xB95Ad562EDE8DD78BBFC287fA18150e802b09D9F',
  [ChainId.SOKOL]: '0xD436e756Cf41318ADeC62E8dCbEF2608753Ae068',
  [ChainId.XDAI]: '0xCD2A45F36464FdB1065160e03A2353996Ea8Ff57',
  [ChainId.MATIC]: '0x0000000000000000000000000000000000001234',
  [ChainId.AVALANCHE]: '0x0000000000000000000000000000000000001234',
  [ChainId.BINANCE]: '0x0000000000000000000000000000000000001234',
  [ChainId.FUSE]: '0x0000000000000000000000000000000000001234',
  [ChainId.IOTEX]: '0x0000000000000000000000000000000000001234',
  [ChainId.FANTOM]: '0x0000000000000000000000000000000000001234',
  [ChainId.HARMONY]: '0x0000000000000000000000000000000000001234'
}

export const TOKEN_REGISTRY_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x93DB90445B76329e9ed96ECd74e76D8fbf2590d8',
  [ChainId.RINKEBY]: '0x815d1b18f6baaeb3853b0f637475a5c2b28e2253',
  [ChainId.ARBITRUM_TESTNET_V3]: '0x9d6f6d86b81289e40e07fcda805c06f6e9b8f629',
  [ChainId.SOKOL]: '0x681c3836a5589b933062ACA4fd846c1287a2865F',
  [ChainId.XDAI]: '0x85E001DfFF16F388Bc32Cd18009ceDF8F9b62C9E',
  [ChainId.MATIC]: '0x0000000000000000000000000000000000001234',
  [ChainId.AVALANCHE]: '0x0000000000000000000000000000000000001234',
  [ChainId.BINANCE]: '0x0000000000000000000000000000000000001234',
  [ChainId.FUSE]: '0x0000000000000000000000000000000000001234',
  [ChainId.IOTEX]: '0x0000000000000000000000000000000000001234',
  [ChainId.FANTOM]: '0x0000000000000000000000000000000000001234',
  [ChainId.HARMONY]: '0x0000000000000000000000000000000000001234'
}

export const DXSWAP_TOKEN_LIST_ID: { [chainId: number]: number } = {
  [ChainId.MAINNET]: 1,
  [ChainId.RINKEBY]: 1,
  [ChainId.ARBITRUM_TESTNET_V3]: 1,
  [ChainId.SOKOL]: 1,
  [ChainId.XDAI]: 5,
  [ChainId.MATIC]: 137,
  [ChainId.AVALANCHE]: 43114,
  [ChainId.BINANCE]: 56,
  [ChainId.FUSE]: 122,
  [ChainId.IOTEX]: 4689,
  [ChainId.FANTOM]: 250,
  [ChainId.HARMONY]: 1666600000
}

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0xd306a548755b9295ee49cc729e13ca4a45e00199bbd890fa146da43a50571776', // Swapr
  [ChainId.RINKEBY]: '0xd306a548755b9295ee49cc729e13ca4a45e00199bbd890fa146da43a50571776', // Swapr
  [ChainId.ARBITRUM_TESTNET_V3]: '0xd306a548755b9295ee49cc729e13ca4a45e00199bbd890fa146da43a50571776', // Swapr
  [ChainId.SOKOL]: '0xd306a548755b9295ee49cc729e13ca4a45e00199bbd890fa146da43a50571776', // Swapr
  [ChainId.XDAI]: '0xa45b6881271b3d945937baee765df5f40c309498fbe1fa5ec32505dce8ae790d', // Metroswap
  [ChainId.MATIC]: '0xa45b6881271b3d945937baee765df5f40c309498fbe1fa5ec32505dce8ae790d', // Metroswap
  [ChainId.AVALANCHE]: '0xa45b6881271b3d945937baee765df5f40c309498fbe1fa5ec32505dce8ae790d', // Metroswap
  [ChainId.BINANCE]: '0xf061f72f1779d85d1899dde73c3203c068e2e722922b3ecfc59e6505e9a5ea88', // Metroswap
  [ChainId.FUSE]: '0xf061f72f1779d85d1899dde73c3203c068e2e722922b3ecfc59e6505e9a5ea88', // Metroswap
  [ChainId.IOTEX]: '0xf061f72f1779d85d1899dde73c3203c068e2e722922b3ecfc59e6505e9a5ea88', // Metroswap
  [ChainId.FANTOM]: '0xf061f72f1779d85d1899dde73c3203c068e2e722922b3ecfc59e6505e9a5ea88', // Metroswap
  [ChainId.HARMONY]: '0xf061f72f1779d85d1899dde73c3203c068e2e722922b3ecfc59e6505e9a5ea88' // Metroswap
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _25 = JSBI.BigInt(25)
export const SECONDS_IN_YEAR = JSBI.BigInt(31536000)
export const _30 = JSBI.BigInt(30)
export const _100 = JSBI.BigInt(100)
export const _1000 = JSBI.BigInt(1000)
export const _10000 = JSBI.BigInt(10000)

export const defaultSwapFee = _25
export const defaultProtocolFeeDenominator = FIVE

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

const PERMISSIVE_MULTICALL_ADDRESS: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0x0946f567d0ed891e6566c1da8e5093517f43571d',
  [ChainId.RINKEBY]: '0x798d8ced4dff8f054a5153762187e84751a73344',
  [ChainId.ARBITRUM_TESTNET_V3]: '0x73a08DC74eF4ed2c360199244bb69F1464204E7C',
  [ChainId.SOKOL]: '0x4D97Bd8eFaCf46b33c4438Ed0B7B6AABfa2359FB',
  [ChainId.XDAI]: '0x4E75068ED2338fCa56631E740B0723A6dbc1d5CD',
  [ChainId.MATIC]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E',
  [ChainId.AVALANCHE]: '0xb14067B3C160E378DeEAFA8c0D03FF97Fbf0C408',
  [ChainId.BINANCE]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.FUSE]: '0x95C2D32fDb32EDA8ce7fbF6539Dd6945acb9bB09',
  [ChainId.IOTEX]: '0x9A734E90D89f0c346E27c404D350Ff56DEAD55f1',
  [ChainId.FANTOM]: '0x95C2D32fDb32EDA8ce7fbF6539Dd6945acb9bB09',
  [ChainId.HARMONY]: '0x95C2D32fDb32EDA8ce7fbF6539Dd6945acb9bB09'
}

export {
  PERMISSIVE_MULTICALL_ABI,
  TOKEN_REGISTRY_ABI,
  PERMISSIVE_MULTICALL_ADDRESS,
  STAKING_REWARDS_FACTORY_ABI,
  STAKING_REWARDS_DISTRIBUTION_ABI
}
