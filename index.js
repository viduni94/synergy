const antlr4 = require('antlr4/index');
const hcclLexer = require('./lib/hcclLexer.js');
const hcclParser = require('./lib/hcclParser.js');
const hcclVisitor = require('./lib/hcclVisitor.js');
const extendedVisitor = require("./AstGenerator");
const readline = require('readline-sync');

const input = readline.question("Enter the contract\n");

const chars = new antlr4.InputStream(input); //get input from user
const lexer = new hcclLexer.hcclLexer(chars); //create lexer

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer); //get tokens from lexer
const parser = new hcclParser.hcclParser(tokens); //create parser
const visitor = new hcclVisitor.hcclVisitor();
parser.buildParseTrees = true;

const tree = parser.complexContract();

//console.log(tree);
//console.log(ParseTreeVisitor.visit(tree));

console.log(tree.toStringTree(parser.ruleNames));
//const tokenList = Visitor.visitTerminal(tree);
console.log(extendedVisitor.printTerminals(tree));
//console.log(extendedVisitor.visitTree(tree));