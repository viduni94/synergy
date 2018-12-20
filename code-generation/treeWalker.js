const fs = require('fs');

function postOrderTraversal(tree) {

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
            list.push(tempList[1]+tempList[2]);
        }
        case 'get': {

            let contractName = "c"+n;
            let contract = "" +
                "pragma solidity ^0.4.21;\n" +
                "pragma experimental ABIEncoderV2;\n" +
                "import {BaseContract, Marketplace} from './Marketplace.sol';\n"+
                "\n"+
                "contract $contractName is baseContract {\n" +
                "\n"+
                "constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n" +
                "}\n";

            n++;

            fs.writeFile("./contractFiles/$contractName.sol", contract, function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
        }
        case 'give': {

            let contractName = "c"+n;
            let contract = "" +
                "pragma solidity ^0.4.21;\n" +
                "pragma experimental ABIEncoderV2;\n" +
                "import {BaseContract, Marketplace} from './Marketplace.sol';\n"+
                "\n"+
                "contract $contractName is baseContract {\n" +
                "\n"+
                "constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n" +
                "}\n";

            n++;

            fs.writeFile("./contractFiles/$contractName.sol", contract, function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
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