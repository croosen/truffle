// Leaf.sol
pragma solidity ^0.4.22;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract LeafCoin is MintableToken {
    string public name = "Leaf";
    string public symbol = "Lf";
    uint8 public decimals = 18;
}
