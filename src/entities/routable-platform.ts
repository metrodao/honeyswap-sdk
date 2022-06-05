import { BigintIsh, ChainId, FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS, _30 } from '../constants'

const UNISWAP_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
const SUSHISWAP_FACTORY_ADDRESS = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
const SUSHISWAP_MATIC_FACTORY_ADDRESS = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
const SUSHISWAP_XDAI_FACTORY_ADDRESS = '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
const SWAPR_FACTORY_ADDRESS = '0x5D48C95AdfFD4B40c1AAADc4e08fc44117E02179'
const BAOSWAP_FACTORY_ADDRESS = '0x45de240fbe2077dd3e711299538a09854fae9c9b'
const QUICKSWAP_FACTORY_ADDRESS = '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32'
const HONEYSWAP_FACTORY_ADDRESS = '0xd34971BaB6E5E356fd250715F5dE0492BB070452'
const HONEYSWAP_MATIC_FACTORY_ADDRESS = '0x03DAa61d8007443a6584e3d8f85105096543C19c'
const HONEYSWAP_XDAI_FACTORY_ADDRESS = '0xA818b4F111Ccac7AA31D0BCc0806d64F2E0737D7'
const APESWAP_MATIC_FACTORY_ADDRESS = '0xCf083Be4164828f00cAE704EC15a36D711491284'
const DFYN_MATIC_FACTORY_ADDRESS = '0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B'
const RADIOSHACK_MATIC_FACTORY_ADDRESS = '0xB581D0A3b7Ea5cDc029260e989f768Ae167Ef39B'

const UNISWAP_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
const SUSHISWAP_ROUTER_ADDRESS = '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'
const SUSHISWAP_MATIC_ROUTER_ADDRESS = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
const SUSHISWAP_XDAI_ROUTER_ADDRESS = '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
const SWAPR_ROUTER_ADDRESS = '0xE43e60736b1cb4a75ad25240E2f9a62Bff65c0C0'
const BAOSWAP_ROUTER_ADDRESS = '0x6093AeBAC87d62b1A5a4cEec91204e35020E38bE'
const QUICKSWAP_ROUTER_ADDRESS = '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff'
const HONEYSWAP_ROUTER_ADDRESS = '0xB9960d9bcA016e9748bE75dd52F02188B9d0829f'
const HONEYSWAP_MATIC_ROUTER_ADDRESS = '0xaD340d0CD0B117B0140671E7cB39770e7675C848'
const HONEYSWAP_XDAI_ROUTER_ADDRESS = '0x1C232F01118CB8B424793ae03F870aa7D0ac7f77'
const APESWAP_MATIC_ROUTER_ADDRESS = '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607'
const DFYN_MATIC_ROUTER_ADDRESS = '0xA102072A4C07F06EC3B4900FDC4C7B80b6c57429'
const RADIOSHACK_MATIC_ROUTER_ADDRESS = '0xAf877420786516FC6692372c209e0056169eebAf'

/**
 * A platform to which Swapr can route through.
 */
export class RoutablePlatform {
  public readonly name: string
  public readonly factoryAddress: { [supportedChainId in ChainId]?: string }
  public readonly routerAddress: { [supportedChainId in ChainId]?: string }
  public readonly initCodeHash : { [supportedChainId in ChainId]?: string }
  public readonly defaultSwapFee: BigintIsh

  public static readonly METROSWAP = new RoutablePlatform(
    'Metroswap',
    FACTORY_ADDRESS,
    ROUTER_ADDRESS,
    INIT_CODE_HASH,
    _30
  )
  public static readonly HONEYSWAP = new RoutablePlatform(
    'Honeyswap',
    { 
      [ChainId.MAINNET]: HONEYSWAP_FACTORY_ADDRESS, 
      [ChainId.RINKEBY]: HONEYSWAP_FACTORY_ADDRESS, 
      [ChainId.MATIC]: HONEYSWAP_MATIC_FACTORY_ADDRESS,
      [ChainId.XDAI]: HONEYSWAP_XDAI_FACTORY_ADDRESS 
    },
    { 
      [ChainId.MAINNET]: HONEYSWAP_ROUTER_ADDRESS, 
      [ChainId.RINKEBY]: HONEYSWAP_ROUTER_ADDRESS, 
      [ChainId.MATIC]: HONEYSWAP_MATIC_ROUTER_ADDRESS,
      [ChainId.XDAI]: HONEYSWAP_XDAI_ROUTER_ADDRESS 
    },
    { 
      [ChainId.MAINNET]: '0xd306a548755b9295ee49cc729e13ca4a45e00199bbd890fa146da43a50571776',
      [ChainId.MATIC]: '0xae81bbc68f315fbbf7617eb881349af83b1e95241f616966e1e0583ecd0793fe',
      [ChainId.XDAI]: '0x3f88503e8580ab941773b59034fb4b2a63e86dbc031b3633a925533ad3ed2b93'
    },
    _30
  )
  public static readonly UNISWAP = new RoutablePlatform(
    'Uniswap',
    { [ChainId.MAINNET]: UNISWAP_FACTORY_ADDRESS, [ChainId.RINKEBY]: UNISWAP_FACTORY_ADDRESS },
    { [ChainId.MAINNET]: UNISWAP_ROUTER_ADDRESS, [ChainId.RINKEBY]: UNISWAP_ROUTER_ADDRESS },
    { [ChainId.MAINNET]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f' },
    _30
  )
  public static readonly SUSHISWAP = new RoutablePlatform(
    'Sushiswap',
    { 
      [ChainId.MAINNET]: SUSHISWAP_FACTORY_ADDRESS, 
      [ChainId.RINKEBY]: SUSHISWAP_FACTORY_ADDRESS, 
      [ChainId.MATIC]: SUSHISWAP_MATIC_FACTORY_ADDRESS,
      [ChainId.XDAI]: SUSHISWAP_XDAI_FACTORY_ADDRESS 
    },
    { 
      [ChainId.MAINNET]: SUSHISWAP_ROUTER_ADDRESS, 
      [ChainId.RINKEBY]: SUSHISWAP_ROUTER_ADDRESS, 
      [ChainId.MATIC]: SUSHISWAP_MATIC_ROUTER_ADDRESS,
      [ChainId.XDAI]: SUSHISWAP_XDAI_ROUTER_ADDRESS 
    },
    { 
      [ChainId.MAINNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
      [ChainId.MATIC]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
      [ChainId.XDAI]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
    },
    _30
  )
  public static readonly SWAPR = new RoutablePlatform(
    'Swapr',
    { [ChainId.XDAI]: SWAPR_FACTORY_ADDRESS },
    { [ChainId.XDAI]: SWAPR_ROUTER_ADDRESS },
    { [ChainId.XDAI]: '0xd306a548755b9295ee49cc729e13ca4a45e00199bbd890fa146da43a50571776' },
    _30
  )
  public static readonly BAOSWAP = new RoutablePlatform(
    'Baoswap',
    { [ChainId.XDAI]: BAOSWAP_FACTORY_ADDRESS },
    { [ChainId.XDAI]: BAOSWAP_ROUTER_ADDRESS },
    { [ChainId.XDAI]: '0x0bae3ead48c325ce433426d2e8e6b07dac10835baec21e163760682ea3d3520d' },
    _30
  )
  public static readonly QUICKSWAP = new RoutablePlatform(
    'Quickswap',
    { [ChainId.MATIC]: QUICKSWAP_FACTORY_ADDRESS },
    { [ChainId.MATIC]: QUICKSWAP_ROUTER_ADDRESS },
    { [ChainId.MATIC]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f' },
    _30
  )
  public static readonly APESWAP = new RoutablePlatform(
    'Apeswap',
    { 
      [ChainId.MATIC]: APESWAP_MATIC_FACTORY_ADDRESS
    },
    { 
      [ChainId.MATIC]: APESWAP_MATIC_ROUTER_ADDRESS
    },
    { 
      [ChainId.MATIC]: '0x511f0f358fe530cda0859ec20becf391718fdf5a329be02f4c95361f3d6a42d8'
    },
    _30
  )
  public static readonly DFYN = new RoutablePlatform(
    'DFYN',
    { 
      [ChainId.MATIC]: DFYN_MATIC_FACTORY_ADDRESS
    },
    { 
      [ChainId.MATIC]: DFYN_MATIC_ROUTER_ADDRESS
    },
    { 
      [ChainId.MATIC]: '0xf187ed688403aa4f7acfada758d8d53698753b998a3071b06f1b777f4330eaf3'
    },
    _30
  )
  public static readonly RADIOSHACK = new RoutablePlatform(
    'RadioShack',
    { 
      [ChainId.MATIC]: RADIOSHACK_MATIC_FACTORY_ADDRESS
    },
    { 
      [ChainId.MATIC]: RADIOSHACK_MATIC_ROUTER_ADDRESS
    },
    { 
      [ChainId.MATIC]: '0x3eef69365a159891ca18b545ccaf0d6aca9b22c988b8deb7a3e4fa2fc2418596'
    },
    _30
  )

  public constructor(
    name: string,
    factoryAddress: { [supportedChainId in ChainId]?: string },
    routerAddress: { [supportedChainId in ChainId]?: string },
    initCodeHash: { [supportedChainId in ChainId]?: string },
    defaultSwapFee: BigintIsh
  ) {
    this.name = name
    this.factoryAddress = factoryAddress
    this.routerAddress = routerAddress
    this.initCodeHash = initCodeHash
    this.defaultSwapFee = defaultSwapFee
  }

  public supportsChain(chainId: ChainId): boolean {
    return !!this.factoryAddress[chainId]
  }
}
