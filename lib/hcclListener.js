// Generated from grammar/hccl.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by hcclParser.
function hcclListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

hcclListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
hcclListener.prototype.constructor = hcclListener;

// Enter a parse tree produced by hcclParser#complexContract.
hcclListener.prototype.enterComplexContract = function(ctx) {
};

// Exit a parse tree produced by hcclParser#complexContract.
hcclListener.prototype.exitComplexContract = function(ctx) {
};


// Enter a parse tree produced by hcclParser#basicContract.
hcclListener.prototype.enterBasicContract = function(ctx) {
};

// Exit a parse tree produced by hcclParser#basicContract.
hcclListener.prototype.exitBasicContract = function(ctx) {
};


// Enter a parse tree produced by hcclParser#ZERO.
hcclListener.prototype.enterZERO = function(ctx) {
};

// Exit a parse tree produced by hcclParser#ZERO.
hcclListener.prototype.exitZERO = function(ctx) {
};


// Enter a parse tree produced by hcclParser#ONE.
hcclListener.prototype.enterONE = function(ctx) {
};

// Exit a parse tree produced by hcclParser#ONE.
hcclListener.prototype.exitONE = function(ctx) {
};


// Enter a parse tree produced by hcclParser#zeroContract.
hcclListener.prototype.enterZeroContract = function(ctx) {
};

// Exit a parse tree produced by hcclParser#zeroContract.
hcclListener.prototype.exitZeroContract = function(ctx) {
};


// Enter a parse tree produced by hcclParser#oneContract.
hcclListener.prototype.enterOneContract = function(ctx) {
};

// Exit a parse tree produced by hcclParser#oneContract.
hcclListener.prototype.exitOneContract = function(ctx) {
};


// Enter a parse tree produced by hcclParser#SCALE_CONTRACT.
hcclListener.prototype.enterSCALE_CONTRACT = function(ctx) {
};

// Exit a parse tree produced by hcclParser#SCALE_CONTRACT.
hcclListener.prototype.exitSCALE_CONTRACT = function(ctx) {
};


// Enter a parse tree produced by hcclParser#GIVE_CONTRACT.
hcclListener.prototype.enterGIVE_CONTRACT = function(ctx) {
};

// Exit a parse tree produced by hcclParser#GIVE_CONTRACT.
hcclListener.prototype.exitGIVE_CONTRACT = function(ctx) {
};


// Enter a parse tree produced by hcclParser#TRUNCATE_CONTRACT.
hcclListener.prototype.enterTRUNCATE_CONTRACT = function(ctx) {
};

// Exit a parse tree produced by hcclParser#TRUNCATE_CONTRACT.
hcclListener.prototype.exitTRUNCATE_CONTRACT = function(ctx) {
};


// Enter a parse tree produced by hcclParser#THEN_CONTRACT.
hcclListener.prototype.enterTHEN_CONTRACT = function(ctx) {
};

// Exit a parse tree produced by hcclParser#THEN_CONTRACT.
hcclListener.prototype.exitTHEN_CONTRACT = function(ctx) {
};


// Enter a parse tree produced by hcclParser#GET_CONTRACT.
hcclListener.prototype.enterGET_CONTRACT = function(ctx) {
};

// Exit a parse tree produced by hcclParser#GET_CONTRACT.
hcclListener.prototype.exitGET_CONTRACT = function(ctx) {
};


// Enter a parse tree produced by hcclParser#ANYTIME_CONTRACT.
hcclListener.prototype.enterANYTIME_CONTRACT = function(ctx) {
};

// Exit a parse tree produced by hcclParser#ANYTIME_CONTRACT.
hcclListener.prototype.exitANYTIME_CONTRACT = function(ctx) {
};


// Enter a parse tree produced by hcclParser#scale.
hcclListener.prototype.enterScale = function(ctx) {
};

// Exit a parse tree produced by hcclParser#scale.
hcclListener.prototype.exitScale = function(ctx) {
};


// Enter a parse tree produced by hcclParser#give.
hcclListener.prototype.enterGive = function(ctx) {
};

// Exit a parse tree produced by hcclParser#give.
hcclListener.prototype.exitGive = function(ctx) {
};


// Enter a parse tree produced by hcclParser#truncate.
hcclListener.prototype.enterTruncate = function(ctx) {
};

// Exit a parse tree produced by hcclParser#truncate.
hcclListener.prototype.exitTruncate = function(ctx) {
};


// Enter a parse tree produced by hcclParser#then.
hcclListener.prototype.enterThen = function(ctx) {
};

// Exit a parse tree produced by hcclParser#then.
hcclListener.prototype.exitThen = function(ctx) {
};


// Enter a parse tree produced by hcclParser#get.
hcclListener.prototype.enterGet = function(ctx) {
};

// Exit a parse tree produced by hcclParser#get.
hcclListener.prototype.exitGet = function(ctx) {
};


// Enter a parse tree produced by hcclParser#anytime.
hcclListener.prototype.enterAnytime = function(ctx) {
};

// Exit a parse tree produced by hcclParser#anytime.
hcclListener.prototype.exitAnytime = function(ctx) {
};



exports.hcclListener = hcclListener;