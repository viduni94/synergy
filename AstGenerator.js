function printTerminals(tree) {
    let tokenList = [];
    recurse(tree, tokenList);
    return tokenList;

}

function recurse (tree, list) {
    let a = ['(', ')', '<EOF>'];
    if(tree.getChildCount() == 0) {
        if(!a.includes(tree.getText())) {
            list.push(tree.getText());
            return;
        }
    }

    for(let i=0; i<tree.getChildCount(); i++) {
        recurse(tree.getChild(i), list);
    }
}

exports.printTerminals = printTerminals;