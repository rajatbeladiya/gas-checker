pragma solidity ^0.8.10;

contract NormalCodeGas {
  uint public value;
  bool boolState = false;

  function getBoolState() public returns (bool) {
    require(boolState == false, "not false");
    value++;
    return true;
  }


}

