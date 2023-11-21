# GraphQL With Etherscan APIs

## Getting Started

To use this GraphQL API wrapper for Etherscan:

1. Clone this repository 
2. Install dependencies with `npm install`
3. Create a `.env` file with your Etherscan API key
4. Start the GraphQL server with `npm start`

## Benefits of using GraphQL API 

Using a GraphQL API provides:

- A single endpoint to query multiple Etherscan API resources
- Declarative data fetching where you can specify exactly what data you need
- Built-in documentation for API resources  

## Create an Etherscan API Key

To use the Etherscan APIs you will need an API key:

1. Sign up for an Etherscan account 
2. Go to [Etherscan API Keys](https://etherscan.io/myapikey) to generate a new key
3. Add the key to your `.env` file as `ETHERSCAN_API_KEY`

## Overview of GraphQL Etherscan API Endpoints

The GraphQL API currently supports querying:

- Account Ether Balance 
- Total Ether Supply

More endpoints can be added by wrapping additional Etherscan APIs.

## How to Run Apollo Server

To start the GraphQL server:

```npm install```

``` npm start```


The server will run on `http://localhost:4000`.

## Sample GraphQL Query

Here is an example query to fetch an account balance:

```graphql
query {
  etherBalanceByAddress {
    message
    result
  }
  totalSupplyOfEther {
    message
    result
  }
  latestEthereumPrice {
    message
    result {
      ethbtc
      ethusd
      ethusd_timestamp
    }
  }
  blockConfirmationTime {
    message
    result
  }
}
```


