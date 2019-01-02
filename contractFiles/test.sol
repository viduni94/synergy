pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;
import {BaseContract, Marketplace} from './Marketplace.sol';
contract c is baseContract {
   constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {
   }
   function proceed() public{
       marketplace.receive(USD, 100)   }
}
contract wrapper is baseContract {
   constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {
   }
   function proceed() public{
       baseContract c = new c();
       marketplace.get(c);
       c.proceed();
   }
}
