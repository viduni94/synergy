const fs = require('fs');

function contractCreation(tree) {
    let list = [];
    let contractName = "wrapper";
    let contract = "pragma solidity ^0.4.21;\n" +
        "pragma experimental ABIEncoderV2;\n" +
        "import {BaseContract, Marketplace} from './Marketplace.sol';\n"+
        "contract $contractName is baseContract {\n" +
        "    constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n" +
        "    }\n"+
        "    function proceed() public{\n" +
        "       baseContract c = new c();\n" +
        "       c.proceed()\n" +
        "   }\n" +
        "}\n";

    fs.writeFileSync("./test.sol", contract, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
    recurse(tree, list);
    // if(list[0] === "get" || list[0] === "give"){
    //     contract = contract + "   function proceed() public{\n" +
    //     "       baseContract c = new c();\n" +
    //     "       c.proceed()\n" +
    //     "   }\n" +
    //     "}\n";
    // }
    // else if(list[0] === "and"){
    //     contract = contract + "   function proceed() public{\n" +
    //     "       baseContract c = new c();\n" +
    //     "       c.proceed()\n" +
    //     "   }\n" +
    //     "}\n";
    // }
    // else if(list[0] === "or"){
    //     contract = contract + "   function proceed() public{\n" +
    //         "       baseContract c = new c();\n" +
    //         "       c.proceed()\n" +
    //         "   }\n" +
    //         "}\n";
    // }
}

function recurse (tree, list) {
    let tempList = [];
    let currentKeyword;
    let n = 0;

    if (tree.getChildCount() == 0) {
        let nodeText = tree.getText();
        if (nodeText === "(" || nodeText === ")") {
            return;
        }
        list.push(tree.getText());
        //console.log(list);
        return;
    }

    for (let i = 0; i < tree.getChildCount(); i++) {
        recurse(tree.getChild(i), tempList);
    }

    for (let i = 0; i < tempList.length; i++) {
        let keywordList = ['get', 'scale', 'one', 'zero', 'give', 'truncate', 'then', 'anytime', '`and`', '`or`'];
        for (let j = 0; j < keywordList.length; j++) {
            if (keywordList[j] === tempList[i]) {
                currentKeyword = tempList[i];

            }
        }
    }

    //console.log(tree.getText());
    //console.log(tempList);
    switch (currentKeyword) {
        case 'scale': {
            list.push(tempList[0] + " " + tempList[1]);
        }
        case 'get': {

            let commodity = tempList[0].contractValue.split(" ")[1];
            let quantity = tempList[0].contractValue.split(" ")[0];
            let contractName = "c";
            let contract = "" +
                "contract $contractName is baseContract {\n" +
                "    constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n" +
                "    }\n" +
                "    function proceed() public{\n" +
                "        marketplace.receive($commodity, $quantity)" +
                "    }\n" +
                "}\n";

            fs.appendFile("./test.sol", contract, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });

            list.push("get");
        }
        case 'give': {

            let contractName = "c";
            let contract = "" +
                "contract $contractName is baseContract {\n" +
                "    constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n" +
                "    }\n" +
                "    function proceed() public{\n" +
                "        marketplace.receive($commodity, $quantity)" +
                "    }\n" +
                "}\n";


            fs.appendFile("./test.sol", contract, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });

            list.push("give");
        }
        case 'truncate': {
            console.log("truncate");
            let truncateObj = {};
            truncateObj.horizon = tempList[1];
            truncateObj.contractValue = tempList[2];
            list.push(truncateObj);
        }
        //////solve the problem here 'one' gets passed on to parent nodes
        case 'one': {
            console.log(list);
            for (let i = 0; i < tempList.length; i++) {
                if(list.length === i)
                    list.push(null);
                list[i] = tempList[i];
            }
            console.log(list);
        }
        ////////////
        case '`and`': {

        }
        default: {
            if (list.length === 0) {
                list = tempList;
                }
            else {
                for (let i = 0; i < tempList.length; i++) {
                    list.push(tempList[i]);
                }
            }
        }
    }
}
exports.contractCreation = contractCreation;
