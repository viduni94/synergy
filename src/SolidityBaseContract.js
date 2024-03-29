let BaseContract =
    "contract BaseContract {\n" +
    "\tenum KillReason {EXECUTED, UNTIL, HORIZON, FAILED}\n" +
    "\n" +
    "    event Killed(BaseContract.KillReason killReason);\n" +
    "\n" +
    "    Marketplace public marketplace_;\n" +
    "    int public scale_;\n" +
    "    int value_;\n"+
    "    string horizon_;\n"+
    "\n" +
    "    address public creator_;\n" +
    "    bool public alive_ = true;\n" +
    "\n" +
    "    constructor(Marketplace marketplace, int value, string horizon) public {\n" +
    "    \tmarketplace_ = marketplace;\n" +
    "    \tcreator_ = msg.sender;\n" +
    "    \tvalue_=value;\n"+
    "    \thorizon_ = horizon;\n"+
    "    }\n" +
    "\n"+
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
    "}";

const fs = require('fs');
fs.writeFile("./contractFiles/Marketplace.sol", BaseContract, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});