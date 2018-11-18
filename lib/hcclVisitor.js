// Generated from grammar/hccl.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by hcclParser.

function hcclVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

hcclVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
hcclVisitor.prototype.constructor = hcclVisitor;

// Visit a parse tree produced by hcclParser#BASIC_CONTRACT.
hcclVisitor.prototype.visitBASIC_CONTRACT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#COMP_CONTRACT.
hcclVisitor.prototype.visitCOMP_CONTRACT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#contractIdentifier.
hcclVisitor.prototype.visitContractIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#ZERO.
hcclVisitor.prototype.visitZERO = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#ONE.
hcclVisitor.prototype.visitONE = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#zeroContract.
hcclVisitor.prototype.visitZeroContract = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#oneContract.
hcclVisitor.prototype.visitOneContract = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#SCALE_CONTRACT.
hcclVisitor.prototype.visitSCALE_CONTRACT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#GIVE_CONTRACT.
hcclVisitor.prototype.visitGIVE_CONTRACT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#AND_CONTRACT.
hcclVisitor.prototype.visitAND_CONTRACT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#OR_CONTRACT.
hcclVisitor.prototype.visitOR_CONTRACT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#TRUNCATE_CONTRACT.
hcclVisitor.prototype.visitTRUNCATE_CONTRACT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#THEN_CONTRACT.
hcclVisitor.prototype.visitTHEN_CONTRACT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#GET_CONTRACT.
hcclVisitor.prototype.visitGET_CONTRACT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#ANYTIME_CONTRACT.
hcclVisitor.prototype.visitANYTIME_CONTRACT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#currencyType.
hcclVisitor.prototype.visitCurrencyType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#scale.
hcclVisitor.prototype.visitScale = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#give.
hcclVisitor.prototype.visitGive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#and.
hcclVisitor.prototype.visitAnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#or.
hcclVisitor.prototype.visitOr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#truncate.
hcclVisitor.prototype.visitTruncate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#then.
hcclVisitor.prototype.visitThen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#get.
hcclVisitor.prototype.visitGet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by hcclParser#anytime.
hcclVisitor.prototype.visitAnytime = function(ctx) {
  return this.visitChildren(ctx);
};



exports.hcclVisitor = hcclVisitor;