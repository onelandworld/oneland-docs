---
id: dataitems
title: ''
slug: /
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction to OneLand Data & Analytics  

[OneLand](https://oneland.world) provides real-time, comprehensive market data & analytics based on on-chain data break-down from NFT contracts and trading platform contracts (i.e. OpenSea Contract).  

You can get OneLand's data and analytics results from our [website](https://oneland.world) or from OneLand Data API for further integrations.  

## Data Items & Explanations  

**All Historical Activities**  

OneLand provides a total view of all historical activities for each Metaverse project.  

Activities consist of `Transfer`, `Mint`, `Sale`, `Burn` and `Contract Migration`.  

The `Mint`, `Transfer`, `Burn` and `Contract Migration` activities are processed based on NFT Contracts; the `Sale` activities on third-party NFT trading platforms (i.e. OpenSea) and projects' built-in marketplaces (e.g. Decentraland Marketplace), if applicable.  

OneLand may not be able to include exhaustive sources of on-chain activities, but will cover the majority of NFT activites that are necessary for any analytics work.  

**Trade Plots**  

Trade Plots are visualized NFT sales that indicate the sale price, the timestamp and how these sales are distributed in one single chart.  

**Average Price**  

The Average Price is calculated by dividing the total sales amount by the sales count over a specific period of time.  

**Floor Price**  

OneLand adopts the OpenSea-style definition on Floor Price, which indicates the lowest current listing price (not the actual traded price).  

Datasource: Coinmarketcap.com data service API  

**MarketCap**  

The Market Cap of lands (or other NFT types) is calculated by combining the estimated market value of each NFT in the collection. The estimated market value for a single NFT is decided by the following rules:  
1) if an NFT has no trade history on the secondary market since mint, we use the current floor price as an estimate of its current market value;  
2) if an NFT has been traded before on the secondary market and we can acquire the trading price, we will take the highest of either the last traded price or the current floor price as an estimate of its current market value. 

A simple explanation on why we use this method to determine the Market Cap of NFT collections on OneLand:   
1) if an NFT has no trade history on the secondary market since mint, we shall assume that any potential buyers in the market are willing to pay the floor price to purchase this NFT. This is a more realistic and slightly conservative estimation.  
2) if an NFT has been traded before on the secondary market and we can acquire the trading price, the previously traded prices are good references to estimate its value - however we must consider several situations:   
  2.1) if an NFT has been traded for multiple times (i.e. has more than one historical traded price) we shall always assume that the last traded price gives more information about how market values this NFT, as it is from a more recent view, than any previous ones.   
  2.2) We then need to consider the relationship between the last traded price and the current floor price. If the current floor price is higher, we can accept the current floor price.   
  2.3) If the last traded price is higher, we may risk over-estimating the NFT value as the current floor price suggests a lower priced market demand. However, we can still benefit from adopting such an over-estimating value. The first reason is that when we use the floor price in valuing 1), we are being over-conservative as we use the floor price to reflect all assets in the collection, and 2.3) helps to balance this. The second reason is that for any NFT collection that has good liquidity, we may always find newly traded NFTs and, for these NFTs, the last traded price will better ascertain the real market value, thus this method will perform better with high liquid collections, which is good and intuitive. 

**Trading Volume**  

The Trading Volume is calculated by accumulating all the sales amounts from all trading behavior cross platforms over the specified period of time.  

**Unique Holders/Trades**  

We calculate Unique Holders/Traders by eliminating double counts, to better indicate a true scale of participation as well as the level of concentration in the market.  

