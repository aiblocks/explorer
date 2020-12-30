# AiBlocks Explorer

[![Build Status](https://travis-ci.org/aiblocks/explorer.svg?branch=master)](https://travis-ci.org/aiblocks/explorer)

A ledger explorer for [AiBlocks](https://aiblocks.io).

Public: https://explorer.aiblocks.io
Test: https://explorer-testnet.aiblocks.io
Local: http://localhost:3000

## Resources


### Lists

| Resource     | URI                                                    |
| ------------ | ------------------------------------------------------ |
| Operations   | [/operations](https://explorer.aiblocks.io/operations) |
| Transactions | [/txs](https://explorer.aiblocks.io/txs)               |
| Ledgers      | [/ledgers](https://explorer.aiblocks.io/ledgers)       |
| Payments     | [/payments](https://explorer.aiblocks.io/payments)     |
| Trades       | [/trades](https://explorer.aiblocks.io/trades)         |
| Effects      | [/effects](https://explorer.aiblocks.io/effects)       |

### Directory

| Resource  | URI                                                  |
| --------- | -----------------------------------------------------|
| Assets    | [/assets](https://explorer.aiblocks.io/assets)       |

### Accounts

| Resource             | URI                                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| by Federated address | [/account/aiblocks\*fed.network](https://explorer-aiblocks.io/account/aiblocks*fed.network)                                                                          |
| by Public address    | [/account/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX](https://explorer-aiblocks.io/account/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX) |

#### Tabs

| Resource         | URI                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| Balances Tab     | [/account/aiblocks\*fed.network#balances](https://explorer-aiblocks.io/account/aiblocks*fed.network#balances)         |
| Payments Tab     | [/account/aiblocks\*fed.network#payments](https://explorer-aiblocks.io/account/aiblocks*fed.network#payments)         |
| Offers Tab       | [/account/aiblocks\*fed.network#offers](https://explorer-aiblocks.io/account/aiblocks*fed.network#offers)             |
| Trades Tab       | [/account/aiblocks\*fed.network#trades](https://explorer-aiblocks.io/account/aiblocks*fed.network#trades)             |
| Effects Tab      | [/account/aiblocks\*fed.network#effects](https://explorer-aiblocks.io/account/aiblocks*fed.network#effects)           |
| Operations Tab   | [/account/aiblocks\*fed.network#operations](https://explorer-aiblocks.io/account/aiblocks*fed.network#operations)     |
| Transactions Tab | [/account/aiblocks\*fed.network#transactions](https://explorer-aiblocks.io/account/aiblocks*fed.network#transactions) |
| Signing Tab      | [/account/aiblocks\*fed.network#signing](https://explorer-aiblocks.io/account/aiblocks*fed.network#signing)           |
| Flags Tab        | [/account/aiblocks\*fed.network#flags](https://explorer-aiblocks.io/account/aiblocks*fed.network#flags)               |
| Data Tab         | [/account/aiblocks\*fed.network#data](https://explorer-aiblocks.io/account/aiblocks*fed.network#data)                  |

### Search

| Resource              | URI                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Federated address     | [/search/explorer\*fed.network](https://explorer-aiblocks.io/search/explorer*fed.network)                                                                                            |
| Public address        | [/search/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX](https://explorer-aiblocks.io/search/GAREELUB43IRHWEASCFBLKHURCGMHE5IF6XSE7EXDLACYHGRHM43RFOX)                 |
| Ledger                | [/search/10000000](https://explorer-aiblocks.io/search/10000000)                                                                                                                 |
| Transaction           | [/search/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071](https://explorer-aiblocks.io/search/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071) |
| Asset Code            | [/search/NGN](https://explorer-aiblocks.io/search/NGN)                                                                                                                           |
| Anchor Name           | [/search/ripplefox](https://explorer-aiblocks.io/search/ripplefox)                                                                                                               |
| Anchor Name (Partial) | [/search/fox](https://explorer-aiblocks.io/search/fox)                                                                                                                           |

### Misc

| Resource    | URI                                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transaction | [/tx/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071](https://explorer-aiblocks.io/tx/26a568681712a44a515b2c90dcfaadb3ed2c40dc60254638407937bee4767071) |
| Ledger      | [/ledger/10000000](https://explorer-aiblocks.io/ledger/10000000)                                                                                                         |
| Anchor      | [/anchor/apay.io](https://explorer-aiblocks.io/anchor/apay.io)                                                                                                           |
| Asset       | [/asset/NGN](https://explorer-aiblocks.io/asset/NGN)                                                                                                                     |

## Exploring Private / Local Development Networks<a name="private-networks"></a>

explorer will connect to a local horizon instance at http://localhost:8000 by default. If your running a local private network for development this is quite handy for browsing your changes to the ledger.

Alternatively you can run locally connecting to the testnet or public network horizon instances. To do this define these aliases to localhost:

```
127.0.1.1  testnet.local     # for explorer use testnet horizon
127.0.1.1  publicnet.local   # for explorer use mainnet horizon
```

Navigate to http://testnet.local:3000 or http://publicnet.local:3000 to select the network your interesting in exploring.

## Development

See the section [Exploring Private / Local Development Networks](#private-networks) for connecting to different backend networks. By default explorer will look for a local instance of horizon.

Start:

```
npm i && npm start
```

Test:

```
npm i && npm test
```

Build:

```
npm i && npm run build
```

## Languages

Use the language selector in the top right corner to change the language.

Translation files are here:
https://github.com/aiblocks/explorer/tree/master/src/languages

Submit pull requests with new languages or languages fixes there.
