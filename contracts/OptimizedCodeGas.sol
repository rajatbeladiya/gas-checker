pragma solidity ^0.8.10;

contract OptimizedCodeGas {
  uint public value;
  bool boolState;

  function getBoolState() public {
    require(!boolState, "not false");
    value++;
  }

  function addToValue() public {
    value = value + 10;
  }

}

