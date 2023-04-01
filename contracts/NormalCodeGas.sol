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

  function getRefundAmount() public {
    uint256 refund;
    refund = 10;
    if (refund > 0) {
      value = refund;
    }
  }

}

