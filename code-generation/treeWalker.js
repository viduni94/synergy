const fs = require('fs');

function contractCreation(tree) {
    let list = [];
    let contractName = "wrapper"
    recurse(tree, list);
    let contract = "pragma solidity ^0.4.21;\n" +
        "pragma experimental ABIEncoderV2;\n" +
        "import {BaseContract, Marketplace} from './Marketplace.sol';\n"+
        "contract $contractName is baseContract {\n" +
        "    constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n" +
        "    }\n";
        "}\n";
    if(list[0] === "get" || list[0] === "give"){

    }
}

function recurse (tree, list) {
    let tempList = [];
    let currentKeyword;
    let n = 1;

    if(tree.getChildCount() == 0) {
        let nodeText = tree.getText();
        if(nodeText.equals("(") || nodeText.equals(")")) {
            return;
        }
        list.push(tree.getText());

    }

    for(let i=0; i<tree.getChildCount(); i++) {
        recurse(tree.getChild(i), tempList);
    }

    for(let i =0; i<tempList.length; i++) {
        let keywordList = ['get', 'scale', 'oneContract', 'zero', 'give', 'truncate', 'then', 'anytime', '`and`', '`or`'];
        if(keywordList.includes(tempList[i])) {
            currentKeyword = tempList[i];
        }
    }

    switch(currentKeyword) {
        case 'scale': {
            list.push(tempList[1]+" "+tempList[2]);
        }
        case 'get': {
            let commodity = tempList[0].contractValue.split(" ")[1];
            let quantity = tempList[0].contractValue.split(" ")[0];
            let contractName = "c"+n;
            let contract = "" +
                "contract $contractName is baseContract {\n" +
                "    constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n" +
                "    }\n"+
                "    function proceed() public{\n"+
                "        marketplace.receive($commodity, $quantity)" +
                "    }\n"+
                "}\n";

            n++;

            fs.appendFile("./contractFiles/test.sol", contract, function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });

            list.push("get");
        }
        case 'give': {

            let contractName = "c"+n;
            let contract = "" +
                "contract $contractName is baseContract {\n" +
                "    constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n" +
                "    }\n"+
                "    function proceed() public{\n"+
                "        marketplace.receive($commodity, $quantity)" +
                "    }\n"+
                "}\n";

            n++;

            fs.appendFile("./contractFiles/test.sol", contract, function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });

            list.push("give");
        }
        case 'truncate': {
            let truncateObj = {};
            truncateObj.horizon = tempList[1];
            truncateObj.contractValue = tempList[2];
            list.push(truncateObj);
        }
        case 'oneContract': {
            list.push(tempList[1]);
        }
        case '`and`': {

        }
        default: {
            for(let i=0; i<tempList.length; i++) {
                list[i] = tempList[i];
            }
        }

    }


}