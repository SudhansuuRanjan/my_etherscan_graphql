// Import the necessary module for creating a REST data source
const { RESTDataSource } = require("apollo-datasource-rest");

// Define Vitalik's Ethereum address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Create a class for the Etherscan data source, extending RESTDataSource
class EtherDataSource extends RESTDataSource {
  // Constructor to set the base URL for the Etherscan API
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Method to retrieve ether balance by address from the Etherscan API
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to retrieve the total supply of ether from the Etherscan API
  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to retrieve the latest Ethereum price from the Etherscan API
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to retrieve the block confirmation time from the Etherscan API
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

// Export the EtherDataSource class to make it available for use in other modules
module.exports = EtherDataSource;
