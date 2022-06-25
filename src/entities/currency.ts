import JSBI from 'jsbi'

import { ChainId, SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on the target chain.
 *
 * The only instances of the base class `Currency` are native currencies such as Ether for Ethereum,
 * SPOA for the Sokol testnet and xDAI for xDAI.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  // fiat currencies used to represent countervalues
  public static readonly USD: Currency = new Currency(18, 'USD', 'US dollar')

  // Native currencies for deployment chains
  public static readonly ETHER: Currency = new Currency(18, 'ETH', 'Ether')
  public static readonly SPOA: Currency = new Currency(18, 'SPOA', 'Sokol POA')
  public static readonly XDAI: Currency = new Currency(18, 'XDAI', 'xDAI')
  public static readonly MATIC: Currency = new Currency(18, 'MATIC', 'MATIC')
  public static readonly AVAX: Currency = new Currency(18, 'AVAX', 'Avalanche')
  public static readonly BNB: Currency = new Currency(18, 'BNB', 'Bsc')
  public static readonly FUSE: Currency = new Currency(18, 'FUSE', 'Fuse')
  public static readonly IOTX: Currency = new Currency(18, 'IOTX', 'IoTeX')
  public static readonly FTM: Currency = new Currency(18, 'FTM', 'Fantom')
  public static readonly One: Currency = new Currency(18, 'ONE', 'Harmony')
  public static readonly BTT: Currency = new Currency(18, 'BTT', 'BitTorrent')
  public static readonly CLO: Currency = new Currency(18, 'CLO', 'Callisto')
  public static readonly GLMR: Currency = new Currency(18, 'GLMR', 'Moonbeam')
  public static readonly CELO: Currency = new Currency(18, 'CELO', 'Celo')
  public static readonly EVMOS: Currency = new Currency(18, 'EVMOS', 'Evmos')
  public static readonly ASTAR: Currency = new Currency(18, 'ASTAR', 'Astar')
  public static readonly SMARTBCH: Currency = new Currency(18, 'BCH', 'SmartBCH')
  public static readonly TELOS: Currency = new Currency(18, 'TLOS', 'Telos')
  public static readonly ZYX: Currency = new Currency(18, 'ZYX', 'Zyx')
  public static readonly THUNDERCORE: Currency = new Currency(18, 'TT', 'ThunderCore')
  public static readonly ECHELON: Currency = new Currency(18, 'ECH', 'Echelon')

  private static readonly NATIVE_CURRENCY: { [chainId in ChainId]: Currency } = {
    [ChainId.MAINNET]: Currency.ETHER,
    [ChainId.RINKEBY]: Currency.ETHER,
    [ChainId.ARBITRUM_TESTNET_V3]: Currency.ETHER,
    [ChainId.SOKOL]: Currency.SPOA,
    [ChainId.XDAI]: Currency.XDAI,
    [ChainId.MATIC]: Currency.MATIC,
    [ChainId.AVALANCHE]: Currency.AVAX,
    [ChainId.BINANCE]: Currency.BNB,
    [ChainId.FUSE]: Currency.FUSE,
    [ChainId.IOTEX]: Currency.IOTX,
    [ChainId.FANTOM]: Currency.FTM,
    [ChainId.HARMONY]: Currency.One,
    [ChainId.BITTORRENT]: Currency.BTT,
    [ChainId.CALLISTO]: Currency.CLO,
    [ChainId.MOONBEAM]: Currency.GLMR,
    [ChainId.CELO]: Currency.CELO,
    [ChainId.EVMOS]: Currency.EVMOS,
    [ChainId.ASTAR]: Currency.ASTAR,
    [ChainId.SMARTBCH]: Currency.SMARTBCH,
    [ChainId.TELOS]: Currency.TELOS,
    [ChainId.ZYX]: Currency.ZYX,
    [ChainId.THUNDERCORE]: Currency.THUNDERCORE,
    [ChainId.ECHELON]: Currency.ECHELON
  }

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

  public static isNative(currency: Currency): boolean {
    return Object.values(Currency.NATIVE_CURRENCY).indexOf(currency) >= 0
  }

  public static getNative(chainId: ChainId): Currency {
    return Currency.NATIVE_CURRENCY[chainId]
  }
}

export const USD = Currency.USD

export const ETHER = Currency.ETHER
export const SPOA = Currency.SPOA
export const XDAI = Currency.XDAI
export const MATIC = Currency.MATIC
export const AVAX = Currency.AVAX
export const BNB = Currency.BNB
export const FUSE = Currency.FUSE
export const IOTX = Currency.IOTX
export const FTM = Currency.FTM
export const One = Currency.One
export const BTT = Currency.BTT
export const CLO = Currency.CLO
export const GLMR = Currency.GLMR
export const CELO = Currency.CELO
export const EVMOS = Currency.EVMOS
export const ASTAR = Currency.ASTAR
export const SMARTBCH = Currency.SMARTBCH
export const TELOS = Currency.TELOS
export const ZYX = Currency.ZYX
export const THUNDERCORE = Currency.THUNDERCORE
export const ECHELON = Currency.ECHELON
