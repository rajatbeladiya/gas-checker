pragma solidity ^0.8.10;

contract NormalCodeGas {
  uint public value;
  bool boolState = false;

  function getBoolState() public {
    require(boolState == false, "not false");
    value++;
  }

  function addToValue() public {
    value += 10;
  }

}

