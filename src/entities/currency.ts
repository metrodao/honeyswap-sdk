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
  public static readonly ONE: Currency = new Currency(18, 'One', 'Harmony')

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
    [ChainId.HARMONY]: Currency.ONE
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
export const ONE = Currency.ONE
