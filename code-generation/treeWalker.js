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
            // let getObj = {};
            // getObj.proceed = function() {
            //     console.log("Received");
            // }
            let contractName = "c"+n;
            let contract = "" +
                "contract $contractName is baseContract {" +
                "";
        }
        case 'give': {
            let giveObj = {};
            giveObj.proceed = function() {
                console.log("Sent");
            }
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