// const HelloWorld = artifacts.require ('./HelloWorld.sol');
// const Counter = artifacts.require ('./Counter.sol');

const LeafCoinCrowdsale = artifacts.require('./LeafCoinCrowdsale.sol');
const LeafCoin = artifacts.require('./LeafCoin.sol');

module.exports = function(deployer, network, accounts) {
    // deployer.deploy(HelloWorld);
    // deployer.deploy(Counter);

    const openingTime = web3.eth.getBlock('latest').timestamp + 2; // two secs in the future
    const closingTime = openingTime + 86400 * 20; // 20 days
    const rate = new web3.BigNumber(1000);
    const wallet = accounts[1];

    return deployer
        .then(() => {
            return deployer.deploy(LeafCoin);
        })
        .then(() => {
            return deployer.deploy(
                LeafCoinCrowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                LeafCoin.address
            );
        });
};
