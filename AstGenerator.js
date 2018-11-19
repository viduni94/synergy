const TerminalNode = require('antlr4/tree/index');
const hcclVisitor = require('./lib/hcclVisitor').hcclVisitor;

function visitTree(ctx) {
    const terminalNodes = [];
    for(let i=0; i<ctx.getChildCount(); i++) {
        if(ctx.getChild(i)  ) {
            terminalNodes.push(ctx.getChild(i));
        }
    }
}

exports.visitTree = visitTree;