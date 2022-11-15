---
id: dataitems
title: ''
slug: /
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction to OneLand Data & Analytics  

[OneLand](https://oneland.world) provides real-time, comprehensive market data and analytics based on on-chain data break-down from NFT contracts and trading platform contracts (i.e. OpenSea Contract).  

You can get OneLand's data and analytics results from our [website](https://oneland.world) or from OneLand Data API for further integrations.  

## Data Items and Explanations  

**All Historical Activities**  

OneLand provides a total view of all historical activites for each Metaverse project included by the database.  
Activities consists of `Transfer`, `Mint`, `Sale`, `Burn` and `Contract Migration`.  
The `Mint`, `Transfer`, `Burn` and `Contract Migration` activities are processed based on the NFT Contracts; the `Sale` activities on third-party NFT trading platforms (i.e. OpenSea) and project's built-in marketplaces (i.e. Decentraland Marketplace), if applicable.  
OneLand may not be able to include exhaustive sources of on-chain activites, but will cover the majority of the NFT activites that are necessary for any analytics work.  

**Trade Plots**  

Trade Plots are visualized NFT sales that indicates the sale price, the timestamp and how these sales are distributed regarding with the two factors in one chart.  

**Average Price**  

The Average Price is calculated by dividing the total sale amount by the sale count in a certain period of time.  

**Floor Price**  

OneLand adopts the OpenSea-style definition on Floor Price, which indicates the lowerest listing price (not the actual traded price) at the moment.  
OneLand integrates the Floor Price datasource from Coinmarketcap.com's data API.  

**MarketCap**  

The Market Cap of the lands (or other type NFTs) is calculated by adding up the estimated market value respectively for each NFT in the collection. The estimated market value for a single NFT is decided with following rules:  
1) if the NFT has no trade history on secondary market since its mint, we will use the current floor price as an estimation of its current market value;  
2) if the NFT has been traded before on secondary market and we can acquire the trading price, we will take the higher one of the last traded price or the current floor price, as an estimation of its current market value. 

A simple explanation on why we use this method to decide the Market Cap for the NFT collections on OneLand:   
1) if the NFT has no trade history on secondary market since its mint, we shall assume that any potential buyers in the market are willing to pay the floor price for purchasing this NFT. This is a more realistic and slightly conservative estimation. 
2) if the NFT has been traded before on secondary market and we can acquire the trading price, the previously traded prices will certainly be a good reference for estimating its value - but we need to consider several situations:   
  2.1) if the NFT has several traded prices (as has been traded multiple times) we shall always assume that the last traded price gives more information about how market values, as it is from a more recent view, than any previous ones.   
  2.2) Then we need to consider the relation between the last traded price and the current floor price. If the current floor price is higher, we can happily take the current floor price. 
  2.3) However, if the last traded price is higher, we may risk over-estimating the NFT because the current floor price suggests a lower market demand regarding the price - but still we can benefit from adopting such an over-estimating value. The first reason is that when we are adopting the floor price in valuing 1), we are being over-conservative as we use the floor price to reflect all assets in the collection, and 2.3) helps to balance this. The second reason is that for any NFT collection that has good liquidity, we may always find newly traded NFTs and for these NFTs the last traded price will better telling the real market value - so this method will perform better with high liquid collections, which is good and intuitive. 

**Trading Volume**  

The Trading Volume is calculated by adding up all the sale amounts from all the trading behaviors cross platforms during certain period of time.  

**Unique Holders/Trades**  

We calculate Unique Holders/Traders by eliminating double counts, to better indicating real scale of participations as well as the level of concentration in the market.  

