import { ReactNode } from 'react';
import { AssetsDataType, AssetsHeaderType, DisplayChainsType, TotalDataType } from '../../types';
export declare const TotalCard: ({ title, content, claimLink }: TotalDataType) => JSX.Element;
export declare const DisplayChainRow: ({ chainName, imgSrc, apr, address, website, explorer, stakeLink, voteLink, dashboardLink }: DisplayChainsType) => JSX.Element;
export declare const DisplayListHeader: ({ header }: {
    header: AssetsHeaderType[];
}) => JSX.Element;
export declare const DisplayAssetChainRow: ({ chainName, imgSrc, address, availableBalance, stakedBalance, claimableRewards, apr, website, explorer, stakeLink, voteLink, dashboardLink }: AssetsDataType) => JSX.Element;
export declare const AssetList: ({ total, currentAsset, allChains }: {
    total: ReactNode;
    currentAsset?: ReactNode;
    allChains: ReactNode;
}) => JSX.Element;
