let Headers =
    "pragma solidity ^0.4.23;\n" +
    "pragma experimental ABIEncoderV2;\n" +
    "\n";

let BaseContract =
    "contract BaseContract {\n" +
    "\tenum KillReason {EXECUTED, UNTIL, HORIZON, FAILED}\n" +
    "\n" +
    "    event Killed(BaseContract.KillReason killReason);\n" +
    "\n" +
    "    Marketplace public marketplace_;\n" +
    "    int public scale_;\n" +
    "\n" +
    "    address public creator_;\n" +
    "    bool public alive_ = true;\n" +
    "\n" +
    "    constructor(Marketplace marketplace, int scale) public {\n" +
    "    \tmarketplace_ = marketplace;\n" +
    "    \tscale_ = scale;\n" +
    "    \tcreator_ = msg.sender;\n" +
    "    }\n" +
    "\n" +
    "    function getHolder() internal view returns(address) {\n" +
    "\t\taddress holder;\n" +
    "\t\t(,holder,,) = marketplace_.contracts_(this);\n" +
    "\t\treturn holder;\n" +
    "    }\n" +
    "\n" +
    "    function getCounterparty() internal view returns(address) {\n" +
    "\t\taddress counterparty;\n" +
    "\t\t(counterparty,,,) = marketplace_.contracts_(this);\n" +
    "\t\treturn counterparty;\n" +
    "    }\n" +
    "\n" +
    "    function getCreator() internal view returns(address) {\n" +
    "\t\taddress creator;\n" +
    "\t\t(,,creator,) = marketplace_.contracts_(this);\n" +
    "\t\treturn creator;\n" +
    "    }\n" +
    "\n" +
    "    function proceed() public;\n" +
    "\n" +
    "    function receive(Marketplace.Commodity commodity, int quantity) internal alive {\n" +
    "        marketplace_.receive(commodity, quantity);\n" +
    "    }\n" +
    "\n" +
    "    function kill(BaseContract.KillReason killReason) internal alive {\n" +
    "        alive_ = false;\n" +
    "        emit Killed(killReason);\n" +
    "    }\n" +
    "\n" +
    "    modifier alive {\n" +
    "        require(alive_);\n" +
    "        _;\n" +
    "    }\n" +
    "}\n" +
    "\n";

let Marketplace =
    "contract Marketplace {\n" +
    "      enum Commodity {USD, GBP}\n" +
    "\n" +
    "      struct ContractMetadata {\n" +
    "          address counterparty;\n" +
    "          address holder;\n" +
    "          address creator;\n" +
    "          bool signed;\n" +
    "      }\n" +
    "\n" +
    "      event Proposed(address contractAddress, address indexed to);\n" +
    "      event Signed(address contractAddress);\n" +
    "      event Delegated(address indexed from, address to);\n" +
    "\n" +
    "      address public creator_;\n" +
    "\n" +
    "      mapping(address => ContractMetadata) public contracts_;\n" +
    "\n" +
    "      mapping(address => mapping(uint => int)) public balances_;\n" +
    "\n" +
    "      constructor() public {\n" +
    "          balances_[msg.sender][uint(Commodity.USD)] = 0;\n" +
    "          balances_[msg.sender][uint(Commodity.GBP)] = 0;\n" +
    "          creator_ = msg.sender;\n" +
    "      }\n" +
    "\n" +
    "      function signed(address contractAddress) public constant returns (bool) {\n" +
    "          return contracts_[contractAddress].signed;\n" +
    "      }\n" +
    "\n" +
    "      function propose(BaseContract contractAddress, address to) public {\n" +
    "          require(contractAddress.creator_() == msg.sender);\n" +
    "          // is being requested by creator of contract\n" +
    "          require(!contracts_[contractAddress].signed);\n" +
    "          // has not already been signed\n" +
    "          contracts_[contractAddress] = ContractMetadata(msg.sender, to, msg.sender, false);\n" +
    "          emit Proposed(contractAddress, to);\n" +
    "      }\n" +
    "\n" +
    "      function sign(address contractAddress) public {\n" +
    "          require(msg.sender == contracts_[contractAddress].holder);\n" +
    "          require(!contracts_[contractAddress].signed);\n" +
    "          contracts_[contractAddress].signed = true;\n" +
    "          BaseContract baseContract = BaseContract(contractAddress);\n" +
    "          baseContract.proceed();\n" +
    "          emit Signed(contractAddress);\n" +
    "      }\n" +
    "\n" +
    "      function receive(Commodity commodity, int quantity) public {\n" +
    "          ContractMetadata storage c = contracts_[msg.sender];\n" +
    "          require(c.signed == true);\n" +
    "          balances_[c.counterparty][uint(commodity)] -= quantity;\n" +
    "          balances_[c.holder][uint(commodity)] += quantity;\n" +
    "      }\n" +
    "\n" +
    "      function delegate(address newContract) public {\n" +
    "          require(contracts_[msg.sender].signed == true);\n" +
    "          contracts_[newContract] = ContractMetadata(\n" +
    "              contracts_[msg.sender].counterparty,\n" +
    "              contracts_[msg.sender].holder,\n" +
    "              msg.sender,\n" +
    "              true\n" +
    "          );\n" +
    "          emit Delegated(msg.sender, newContract);\n" +
    "      }\n" +
    "\n" +
    "      function give(address newContract) public {\n" +
    "          require(contracts_[msg.sender].signed == true);\n" +
    "          contracts_[newContract] = ContractMetadata(\n" +
    "              contracts_[msg.sender].holder,\n" +
    "              contracts_[msg.sender].counterparty,\n" +
    "              msg.sender,\n" +
    "              true\n" +
    "          );\n" +
    "          emit Delegated(msg.sender, newContract);\n" +
    "      }\n" +
    "\n" +
    "      function transfer(address to, Commodity commodity, uint quantity) public {\n" +
    "          require(uint(balances_[msg.sender][uint(commodity)]) >= quantity);\n" +
    "          balances_[msg.sender][uint(commodity)] -= int(quantity);\n" +
    "          balances_[to][uint(commodity)] += int(quantity);\n" +
    "      }\n" +
    "\n" +
    "      function award(address to, Commodity commodity, uint quantity) public {\n" +
    "          require(msg.sender == creator_);\n" +
    "          balances_[to][uint(commodity)] += int(quantity);\n" +
    "      }\n" +
    "\n" +
    "      function isTrue(bool input) external pure returns(bool) {\n" +
    "          return input;\n" +
    "      }\n" +
    "\n" +
    "      function isFalse(bool input) external pure returns(bool) {\n" +
    "          return !input;\n" +
    "      }\n" +
    "  }\n" +
    "\n";

const fs = require('fs');
fs.writeFile("./contractFiles/Marketplace.sol", Headers + Marketplace + BaseContract, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});