pragma solidity ^0.4.22;

contract Counter {
  uint public storedNumber;

  constructor() public {
    storedNumber = 0;
  }

  function getNumber() public returns(uint) {
    return storedNumber;
  }

  function addNumber() public {
    storedNumber++;
  }

  function deductNumber() public {
    storedNumber--;
  }
}
