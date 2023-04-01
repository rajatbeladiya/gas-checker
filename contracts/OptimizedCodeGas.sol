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

  function getRefundAmount() public {
    uint256 refund;
    refund = 10;
    if (refund != 0) {
      value = refund;
    }
  }

}

