pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;
import {BaseContract, Marketplace} from './Marketplace.sol';

contract c is baseContract {
    constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {
    }
    function proceed() public{
        marketplace_.receive(Marketplace.Commodity.GBP, 1);
    }
}

contract wrapper is baseContract {
    constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {
    }
    function proceed() public{
        baseContract c = new c();
        marketplace_.get(c);
        c.proceed();
        kill();
    }
}
