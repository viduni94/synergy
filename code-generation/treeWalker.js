const fs = require('fs');

function contractCreation(tree) {
    let list = [];
    let contractName = "wrapper";
    let headers = `` +
        `pragma solidity ^0.4.21;\n` +
        `pragma experimental ABIEncoderV2;\n` +
        `import {BaseContract, Marketplace} from './Marketplace.sol';\n`;

    fs.writeFileSync("./test.sol", headers, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
    let contract = ``;
    list = recurse(tree, list);
    console.log(list);
    if( list[0] === 'gt'){
        contract = contract + `contract ${contractName} is baseContract {\n` +
            `   constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n` +
            `   }\n`+
            `   function proceed() public{\n` +
            `       baseContract c = new c();\n` +
            `       marketplace.get(c);\n` +
            `       c.proceed();\n` +
            `   }\n` +
            `}\n`;
    }
    else if(list[0] === 'gv'){
        contract = contract + `contract ${contractName} is baseContract {\n` +
            `   constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n` +
            `   }\n`+
            `   function proceed() public{\n` +
            `       baseContract c = new c();\n` +
            `       marketplace.give(c);\n` +
            `       c.proceed();\n` +
            `   }\n` +
            `}\n`;
    }
    console.log(contract);
    fs.appendFile("./test.sol", contract, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
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

    if (tree.getChildCount() == 0) {
        let nodeText = tree.getText();
        if (nodeText === "(" || nodeText === ")") {
            return list;
        }
        list.push(tree.getText());
        //console.log(list);
        return list;
    }

    for (let i = 0; i < tree.getChildCount(); i++) {
        tempList = recurse(tree.getChild(i), tempList);
    }

    for (let i = 0; i < tempList.length; i++) {
        let keywordList = ['get', 'scale', 'one', 'zero', 'give', 'truncate', 'then', 'anytime', '`and`', '`or`'];
        for (let j = 0; j < keywordList.length; j++) {
            if (keywordList[j] === tempList[i]) {
                currentKeyword = tempList[i];

            }
        }
    }

    switch (currentKeyword) {
        case 'scale': {
            list.push(tempList[1]);
            list.push(tempList[2]);
            return list;
        }
        case 'get': {
            let commodity = tempList[1].contractValue[1];
            let quantity = tempList[1].contractValue[0];
            let contractName = "c";
            let contract = `` +
                `contract ${contractName} is baseContract {\n` +
                `   constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n` +
                `   }\n` +
                `   function proceed() public{\n` +
                `       marketplace.receive(${commodity}, ${quantity})` +
                `   }\n` +
                `}\n`;

            fs.appendFile("./test.sol", contract, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
            list.push('gt');
            return list;
        }
        case 'give': {

            let contractName = "c";
            let commodity = tempList[1].contractValue[1];
            let quantity = tempList[1].contractValue[0];
            let contract = `` +
                `contract ${contractName} is baseContract {\n` +
                `   constructor(Marketplace marketplace, string horizon, int value) public BaseContract(marketplace, value, horizon) {\n` +
                `   }\n` +
                `   function proceed() public{\n` +
                `       marketplace.receive(${commodity}, ${quantity})` +
                `   }\n` +
                `}\n`;


            fs.appendFile("./test.sol", contract, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
            list.push('gv');
            return list;
        }
        case 'truncate': {
            let truncateObj = {};
            truncateObj.horizon = tempList[1];
            truncateObj.contractValue = [tempList[2], tempList[3]];
            list.push(truncateObj);
            return list;
        }
        case 'one': {
            return [tempList[1]];
        }
        default: {
            if(list.length > 0){
                for(let i=0; i<tempList.length;i++)
                    list.push(tempList[i]);
                return list;
            }
            return tempList;
        }
    }
}
exports.contractCreation = contractCreation;
