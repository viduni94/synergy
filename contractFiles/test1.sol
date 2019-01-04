pragma solidity ^0.5.2;
pragma experimental ABIEncoderV2;
import {BaseContract, Marketplace} from './Marketplace.sol';

contract c1 is BaseContract {
    constructor(Marketplace marketplace, string memory horizon, int scale) public BaseContract(marketplace, horizon, scale) {
    }
    function proceed() public alive {
        marketplace_.receive(Marketplace.Commodity.USD, 100);
        kill(BaseContract.KillReason.EXECUTED);
    }
}

contract c2 is BaseContract {
    constructor(Marketplace marketplace, string memory horizon, int scale) public BaseContract(marketplace, horizon, scale) {
    }
    function proceed() public alive {
        marketplace_.receive(Marketplace.Commodity.USD, 10);
        kill(BaseContract.KillReason.EXECUTED);
    }
}

contract wrapper is BaseContract {
    constructor(Marketplace marketplace, string memory horizon, int scale) public BaseContract(marketplace, horizon, scale) {
    }
    function proceed() public alive {
        c1 newContract1 = new c1(marketplace_, horizon_, scale_);
        c2 newContract2 = new c2(marketplace_, horizon_, scale_);
        marketplace_.get(newContract1);
        marketplace_.give(newContract2);
        newContract1.proceed();
        newContract2.proceed();
        kill(BaseContract.KillReason.EXECUTED);
    }
}
