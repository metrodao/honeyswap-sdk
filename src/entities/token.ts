import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { validateAndParseAddress } from '../utils'
import { Currency } from './currency'

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */
export class Token extends Currency {
  public readonly chainId: ChainId
  public readonly address: string

  public static readonly WETH: { [key: number]: Token } = {
    [ChainId.MAINNET]: new Token(
      ChainId.MAINNET,
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      18,
      'WETH',
      'Wrapped Ether'
    ),
    [ChainId.ETHW]: new Token(
        ChainId.ETHW,
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        18,
        'WETH',
        'Wrapped Ether'
    ),
    [ChainId.ETF]: new Token(
        ChainId.ETF,
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        18,
        'WETH',
        'Wrapped Ether'
      ),
    [ChainId.RINKEBY]: new Token(
      ChainId.RINKEBY,
      '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      18,
      'WETH',
      'Wrapped Ether'
    ),
    [ChainId.ARBITRUM_TESTNET_V3]: new Token(
      ChainId.ARBITRUM_TESTNET_V3,
      '0xf8456e5e6A225C2C1D74D8C9a4cB2B1d5dc1153b',
      18,
      'WETH',
      'Wrapped Ether'
    ),
    [ChainId.SOKOL]: new Token(
      ChainId.SOKOL,
      '0xfDc50eF6b67F65Dddc36e56729a9D07BAe1A1f68',
      18,
      'WETH',
      'Wrapped Ether'
    ),
    [ChainId.XDAI]: new Token(
      ChainId.XDAI,
      '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
      18,
      'WETH',
      'Wrapped Ether on xDai'
    ),
    [ChainId.MATIC]: new Token(
      ChainId.MATIC,
      '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      18,
      'WETH',
      'Wrapped Ether on Matic'
    ),
    [ChainId.AVALANCHE]: new Token(
      ChainId.AVALANCHE,
      '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
      18,
      'WETH.e',
      'Wrapped Ether on Avalanche'
    ),
    // no WETH on BSC
    [ChainId.BINANCE]: new Token(
      ChainId.BINANCE,
      '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      18,
      'ETH',
      'Binance-Peg Ethereum Token'
    ),
    [ChainId.FUSE]: new Token(
      ChainId.FUSE,
      '0xa722c13135930332Eb3d749B2F0906559D2C5b99',
      18,
      'WETH',
      'Wrapped Ether on Fuse'
    ),
    [ChainId.IOTEX]: new Token(
      ChainId.IOTEX,
      '0x0258866edAf84D6081df17660357aB20A07d0c80',
      18,
      'WETH',
      'Wrapped Ether'
    ),
    [ChainId.FANTOM]: new Token(
      ChainId.FANTOM,
      '0x74b23882a30290451A17c44f4F05243b6b58C76d',
      18,
      'ETH',
      'Ether'
    ),
    [ChainId.HARMONY]: new Token(
      ChainId.HARMONY,
      '0x6983D1E6DEf3690C4d616b13597A09e6193EA013',
      18,
      '1ETH',
      'ETH'
    ),
    [ChainId.BITTORRENT]: new Token(
      ChainId.BITTORRENT,
      '0xd48788838B700ec4364E5A8e32DDcF96c9E6227E',
      18,
      'bETH',
      'Bridged Ethereum (PoS)'
    ),
    // no WETH on CALLISTO use bETH
    [ChainId.CALLISTO]: new Token(
      ChainId.CALLISTO,
      '0x9A734E90D89f0c346E27c404D350Ff56DEAD55f1',
      18,
      'bETH',
      'Bridged Ethereum (PoS)'
    ),
    [ChainId.MOONBEAM]: new Token(
        ChainId.MOONBEAM,
        '0x30D2a9F5FDf90ACe8c17952cbb4eE48a55D916A7',
        18,
        'WETH',
        'Wrapped Ether'
    ),
    [ChainId.CELO]: new Token(
        ChainId.CELO,
        '0x122013fd7dF1C6F636a5bb8f03108E876548b455',
        18,
        'WETH',
        'Wrapped Ether'
    ),
    [ChainId.EVMOS]: new Token(
        ChainId.EVMOS,
        '0x5842C5532b61aCF3227679a8b1BD0242a41752f2',
        18,
        'WETH',
        'Wrapped Ether'
    ),
    [ChainId.ASTAR]: new Token(
        ChainId.ASTAR,
        '0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c',
        18,
        'WETH',
        'Wrapped Ether'
    ),
    [ChainId.SMARTBCH]: new Token(
        ChainId.SMARTBCH,
        '0x13481632D142F28cb51B7608C7eF6AE9325C0Ae5',
        18,
        'METH',
        'Metro Wrapped Ether'
    ),
    [ChainId.TELOS]: new Token(
        ChainId.TELOS,
        '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
        18,
        'ETH',
        'Ethereum'
    ),
    [ChainId.ZYX]: new Token(
        ChainId.ZYX,
        '0xcF31b142DF53f06A6AE79dade5f4E9eDd3deB6Ef',
        18,
        'METH',
        'Metro Wrapped Ether'
    ),
    [ChainId.THUNDERCORE]: new Token(
        ChainId.THUNDERCORE,
        '0xf3f68E1Fd8FD5949C197299C97a6295687aEf9c3',
        18,
        'METH',
        'Metro Wrapped Ether'
    ),
    [ChainId.ECHELON]: new Token(
        ChainId.ECHELON,
        '0x7c75445c5123c78ea276723dd3632570417729fc',
        18,
        'METH',
        'Metro Wrapped Ether'
    )   
  }

  public static readonly WSPOA: { [key: number]: Token } = {
    [ChainId.SOKOL]: new Token(ChainId.SOKOL, '0xc655c6D80ac92d75fBF4F40e95280aEb855B1E87', 18, 'WSPOA', 'Wrapped SPOA')
  }

  public static readonly WXDAI: { [key: number]: Token } = {
    [ChainId.XDAI]: new Token(ChainId.XDAI, '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d', 18, 'WXDAI', 'Wrapped xDAI')
  }

  public static readonly WMATIC: { [key: number]: Token } = {
    [ChainId.MATIC]: new Token(ChainId.MATIC, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped Matic')
  }

  public static readonly WAVAX: { [key: number]: Token } = {
    [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18, 'WAVAX', 'Wrapped AVAX')
  }

  public static readonly WBNB: { [key: number]: Token } = {
    [ChainId.BINANCE]: new Token(ChainId.BINANCE, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB')
  }

  public static readonly WFUSE: { [key: number]: Token } = {
    [ChainId.FUSE]: new Token(ChainId.FUSE, '0x0BE9e53fd7EDaC9F859882AfdDa116645287C629', 18, 'WFUSE', 'Wrapped FUSE')
  }

  public static readonly WIOTX: { [key: number]: Token } = {
    [ChainId.IOTEX]: new Token(ChainId.IOTEX, '0xA00744882684C3e4747faEFD68D283eA44099D03', 18, 'WIOTX', 'Wrapped IOTX')
  }

  public static readonly WFTM: { [key: number]: Token } = {
    [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WFTM', 'Wrapped Fantom')
  }

  public static readonly WONE: { [key: number]: Token } = {
    [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a', 18, 'WONE', 'Wrapped ONE')
  }

  public static readonly WBTT: { [key: number]: Token } = {
    [ChainId.BITTORRENT]: new Token(ChainId.BITTORRENT, '0x8D193c6efa90BCFf940A98785d1Ce9D093d3DC8A', 18, 'WBTT', 'Wrapped BTT')
  }

  public static readonly WCLO: { [key: number]: Token } = {
    [ChainId.CALLISTO]: new Token(ChainId.CALLISTO, '0xfa1d4c53Cb8a0f0ec1C635cd5DfD68637664C07D', 18, 'WCLO.m', 'Metro Wrapped CLO')
  }

  public static readonly WGLMR: { [key: number]: Token } = {
    [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, '0xAcc15dC74880C9944775448304B263D191c6077F', 18, 'WGLMR', 'Wrapped GLMR')
  }

  public static readonly WCELO: { [key: number]: Token } = {
    [ChainId.CELO]: new Token(ChainId.CELO, '0xc9616280Cc74B3B2196D32325f5278a7c2B593C4', 18, 'WCELO.m', 'Metro Wrapped CELO')
  }

  public static readonly WEVMOS: { [key: number]: Token } = {
    [ChainId.EVMOS]: new Token(ChainId.EVMOS, '0xD4949664cD82660AaE99bEdc034a0deA8A0bd517', 18, 'WEVMOS', 'Wrapped EVMOS')
  }

  public static readonly WASTAR: { [key: number]: Token } = {
    [ChainId.ASTAR]: new Token(ChainId.ASTAR, '0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720', 18, 'WASTAR', 'Wrapped ASTAR')
  }

  public static readonly WBCH: { [key: number]: Token } = {
    [ChainId.SMARTBCH]: new Token(ChainId.SMARTBCH, '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04', 18, 'WBCH', 'Wrapped BCH')
  }

  public static readonly WTLOS: { [key: number]: Token } = {
    [ChainId.TELOS]: new Token(ChainId.TELOS, '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E', 18, 'WTLOS', 'Wrapped TLOS')
  }

  public static readonly WZYX: { [key: number]: Token } = {
    [ChainId.ZYX]: new Token(ChainId.ZYX, '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E', 18, 'WZYX', 'Wrapped ZYX')
  }

  public static readonly WTT: { [key: number]: Token } = {
    [ChainId.THUNDERCORE]: new Token(ChainId.THUNDERCORE, '0x71F83A462C6d2674c731C0a67a0A6Ddf6562DC2d', 18, 'MWTT', 'Metro Wrapped TT')
  }

  public static readonly WECH: { [key: number]: Token } = {
    [ChainId.ECHELON]: new Token(ChainId.ECHELON, '0xadEE5159f4f82a35B9068A6c810bdc6c599Ba6a8', 18, 'WECH', 'Wrapped ECH')
  }

  public static readonly DXD: { [key: number]: Token } = {
    [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xa1d65E8fB6e87b60FECCBc582F7f97804B725521', 18, 'DXD', 'DXdao'),
    [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, '0x554898A0BF98aB0C03ff86C7DccBE29269cc4d29', 18, 'DXD', 'DXdao'),
    [ChainId.XDAI]: new Token(
      ChainId.XDAI,
      '0xb90d6bec20993be5d72a5ab353343f7a0281f158',
      18,
      'DXD',
      'DXdao from Ethereum'
    )
  }

  private static readonly NATIVE_CURRENCY_WRAPPER: { [chainId in ChainId]: Token } = {
    [ChainId.MAINNET]: Token.WETH[ChainId.MAINNET],
    [ChainId.ETHW]: Token.WETH[ChainId.ETHW],
    [ChainId.ETF]: Token.WETH[ChainId.ETF],
    [ChainId.RINKEBY]: Token.WETH[ChainId.RINKEBY],
    [ChainId.ARBITRUM_TESTNET_V3]: Token.WETH[ChainId.ARBITRUM_TESTNET_V3],
    [ChainId.SOKOL]: Token.WSPOA[ChainId.SOKOL],
    [ChainId.XDAI]: Token.WXDAI[ChainId.XDAI],
    [ChainId.MATIC]: Token.WMATIC[ChainId.MATIC],
    [ChainId.AVALANCHE]: Token.WAVAX[ChainId.AVALANCHE],
    [ChainId.BINANCE]: Token.WBNB[ChainId.BINANCE],
    [ChainId.FUSE]: Token.WFUSE[ChainId.FUSE],
    [ChainId.IOTEX]: Token.WIOTX[ChainId.IOTEX],
    [ChainId.FANTOM]: Token.WFTM[ChainId.FANTOM],
    [ChainId.HARMONY]: Token.WONE[ChainId.HARMONY],
    [ChainId.BITTORRENT]: Token.WBTT[ChainId.BITTORRENT],
    [ChainId.CALLISTO]: Token.WCLO[ChainId.CALLISTO],
    [ChainId.MOONBEAM]: Token.WGLMR[ChainId.MOONBEAM],
    [ChainId.CELO]: Token.WCELO[ChainId.CELO],
    [ChainId.EVMOS]: Token.WEVMOS[ChainId.EVMOS],
    [ChainId.ASTAR]: Token.WASTAR[ChainId.ASTAR],
    [ChainId.SMARTBCH]: Token.WBCH[ChainId.SMARTBCH],
    [ChainId.TELOS]: Token.WTLOS[ChainId.TELOS],
    [ChainId.ZYX]: Token.WZYX[ChainId.ZYX],
    [ChainId.THUNDERCORE]: Token.WTT[ChainId.THUNDERCORE],
    [ChainId.ECHELON]: Token.WECH[ChainId.ECHELON]
  }

  public constructor(chainId: ChainId, address: string, decimals: number, symbol?: string, name?: string) {
    super(decimals, symbol, name)
    this.chainId = chainId
    this.address = validateAndParseAddress(address)
  }

  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  public equals(other: Token): boolean {
    // short circuit on reference equality
    if (this === other) {
      return true
    }
    return this.chainId === other.chainId && this.address === other.address
  }

  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  public sortsBefore(other: Token): boolean {
    invariant(this.chainId === other.chainId, 'CHAIN_IDS')
    invariant(this.address !== other.address, 'ADDRESSES')
    return this.address.toLowerCase() < other.address.toLowerCase()
  }

  public static getNativeWrapper(chainId: ChainId): Token {
    return Token.NATIVE_CURRENCY_WRAPPER[chainId]
  }

  public static isNativeWrapper(token: Token): boolean {
    return Token.NATIVE_CURRENCY_WRAPPER[token.chainId].equals(token)
  }
}

/**
 * Compares two currencies for equality
 */
export function currencyEquals(currencyA: Currency, currencyB: Currency): boolean {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}

// reexport for convenience
export const WETH = Token.WETH
export const WSPOA = Token.WSPOA
export const DXD = Token.DXD
export const WXDAI = Token.WXDAI
export const WMATIC = Token.WMATIC
export const WAVAX = Token.WAVAX
export const WBNB = Token.WBNB
export const WFUSE = Token.WFUSE
export const WIOTX = Token.WIOTX
export const WFTM = Token.WFTM
export const WONE = Token.WONE
export const WBTT = Token.WBTT
export const WCLO = Token.WCLO
export const WGLMR = Token.WGLMR
export const WCELO = Token.WCELO
export const WEVMOS = Token.WEVMOS
export const WASTAR = Token.WASTAR
export const WBCH = Token.WBCH
export const WTLOS = Token.WTLOS
export const WZYX = Token.WZYX
export const WTT = Token.WTT
export const WECH = Token.WECH
