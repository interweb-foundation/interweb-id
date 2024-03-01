export interface DenomUnits {
    denom: string;
    exponent: number;
    aliases?: string[];
}
export interface ChainCoin {
    description?: string;
    denom_units: DenomUnits[];
    base: string;
    name: string;
    display: string;
    symbol: string;
    logo_URIs: {
        png: string;
        svg?: string;
    };
    coingecko_id?: string;
    ibc?: {
        source_channel: string;
        dst_channel: string;
        source_denom: string;
    };
    type_asset?: string;
    address?: string;
}
export interface Chain {
    chain_id: string;
    assets: ChainCoin[];
}
export declare const osmosis: Chain;
