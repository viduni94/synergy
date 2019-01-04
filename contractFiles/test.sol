pragma solidity ^0.5.2;
pragma experimental ABIEncoderV2;
import {BaseContract, Marketplace} from './Marketplace.sol';
contract c is BaseContract {
   constructor(Marketplace marketplace, string memory horizon, int scale) public BaseContract(marketplace, horizon, scale) {
   }
   function proceed() public alive{
       marketplace_.receive(Marketplace.Commodity.USD, 100);
       kill(BaseContract.KillReason.EXECUTED);
   }
}
contract wrapper is BaseContract {
   constructor(Marketplace marketplace, string memory horizon, int scale) public BaseContract(marketplace, horizon, scale) {
   }
   function proceed() public alive{
       c newContract = new c(marketplace_, horizon_, scale_);
       marketplace_.get(newContract);
       newContract.proceed();
       kill(BaseContract.KillReason.EXECUTED);
   }
}
