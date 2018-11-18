const antlr4 = require('antlr4');
const hcclLexer = require('./lib/hcclLexer.js');
const hcclParser = require('./lib/hcclParser.js');
const readline = require('readline-sync');

const input = readline.question("Enter the contract\n");

const chars = new antlr4.InputStream(input);
const lexer = new hcclLexer.hcclLexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new hcclParser.hcclParser(tokens);
const tree = parser.primitive();
//console.log(tree);
console.log(tree.toStringTree(parser.ruleNames));