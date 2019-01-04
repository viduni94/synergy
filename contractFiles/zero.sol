pragma solidity ^0.5.2;
pragma experimental ABIEncoderV2;
import {BaseContract, Marketplace} from './Marketplace.sol';

contract zero is BaseContract {
    constructor(Marketplace marketplace, string memory horizon, int scale) public BaseContract(marketplace, horizon, scale) {}

    function proceed() public alive{
        kill(BaseContract.KillReason.EXECUTED);
    }
}
contract wrapper is BaseContract {
    constructor(Marketplace marketplace, string memory horizon, int scale) public BaseContract(marketplace, horizon, scale) {}

    function proceed() public alive{
        zero newContract = new zero(marketplace_, horizon_, scale_);
        marketplace_.get(newContract);
        newContract.proceed();
        kill(BaseContract.KillReason.EXECUTED);
    }
}
