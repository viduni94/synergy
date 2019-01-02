// Generated from hccl.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var hcclListener = require('./hcclListener').hcclListener;
var grammarFileName = "hccl.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0017X\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002 \n\u0002\u0003\u0003\u0003\u0003\u0005\u0003$\n\u0003\u0003\u0004",
    "\u0003\u0004\u0005\u0004(\n\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u00075\n\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0002\u0002",
    "\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002",
    "\u0002\u0002S\u0002\u001f\u0003\u0002\u0002\u0002\u0004#\u0003\u0002",
    "\u0002\u0002\u0006\'\u0003\u0002\u0002\u0002\b)\u0003\u0002\u0002\u0002",
    "\n+\u0003\u0002\u0002\u0002\f4\u0003\u0002\u0002\u0002\u000e6\u0003",
    "\u0002\u0002\u0002\u0010<\u0003\u0002\u0002\u0002\u0012A\u0003\u0002",
    "\u0002\u0002\u0014G\u0003\u0002\u0002\u0002\u0016M\u0003\u0002\u0002",
    "\u0002\u0018R\u0003\u0002\u0002\u0002\u001a \u0005\u0004\u0003\u0002",
    "\u001b\u001c\u0005\u0004\u0003\u0002\u001c\u001d\u0007\u0005\u0002\u0002",
    "\u001d\u001e\u0005\u0002\u0002\u0002\u001e \u0003\u0002\u0002\u0002",
    "\u001f\u001a\u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002\u0002\u0002",
    " \u0003\u0003\u0002\u0002\u0002!$\u0005\u0006\u0004\u0002\"$\u0005\f",
    "\u0007\u0002#!\u0003\u0002\u0002\u0002#\"\u0003\u0002\u0002\u0002$\u0005",
    "\u0003\u0002\u0002\u0002%(\u0005\b\u0005\u0002&(\u0005\n\u0006\u0002",
    "\'%\u0003\u0002\u0002\u0002\'&\u0003\u0002\u0002\u0002(\u0007\u0003",
    "\u0002\u0002\u0002)*\u0007\b\u0002\u0002*\t\u0003\u0002\u0002\u0002",
    "+,\u0007\u0007\u0002\u0002,-\u0007\u0006\u0002\u0002-\u000b\u0003\u0002",
    "\u0002\u0002.5\u0005\u000e\b\u0002/5\u0005\u0010\t\u000205\u0005\u0012",
    "\n\u000215\u0005\u0014\u000b\u000225\u0005\u0016\f\u000235\u0005\u0018",
    "\r\u00024.\u0003\u0002\u0002\u00024/\u0003\u0002\u0002\u000240\u0003",
    "\u0002\u0002\u000241\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u0002",
    "43\u0003\u0002\u0002\u00025\r\u0003\u0002\u0002\u000267\u0007\t\u0002",
    "\u000278\u0007\u0013\u0002\u000289\u0007\u0003\u0002\u00029:\u0005\u0002",
    "\u0002\u0002:;\u0007\u0004\u0002\u0002;\u000f\u0003\u0002\u0002\u0002",
    "<=\u0007\n\u0002\u0002=>\u0007\u0003\u0002\u0002>?\u0005\u0002\u0002",
    "\u0002?@\u0007\u0004\u0002\u0002@\u0011\u0003\u0002\u0002\u0002AB\u0007",
    "\r\u0002\u0002BC\u0007\u0011\u0002\u0002CD\u0007\u0003\u0002\u0002D",
    "E\u0005\u0002\u0002\u0002EF\u0007\u0004\u0002\u0002F\u0013\u0003\u0002",
    "\u0002\u0002GH\u0007\u000e\u0002\u0002HI\u0007\u0003\u0002\u0002IJ\u0005",
    "\u0002\u0002\u0002JK\u0005\u0002\u0002\u0002KL\u0007\u0004\u0002\u0002",
    "L\u0015\u0003\u0002\u0002\u0002MN\u0007\u000f\u0002\u0002NO\u0007\u0003",
    "\u0002\u0002OP\u0005\u0002\u0002\u0002PQ\u0007\u0004\u0002\u0002Q\u0017",
    "\u0003\u0002\u0002\u0002RS\u0007\u0010\u0002\u0002ST\u0007\u0003\u0002",
    "\u0002TU\u0005\u0002\u0002\u0002UV\u0007\u0004\u0002\u0002V\u0019\u0003",
    "\u0002\u0002\u0002\u0006\u001f#\'4"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", null, null, "'one'", "'zero'", 
                     "'scale'", "'give'", "'and'", "'or'", "'truncate'", 
                     "'then'", "'get'", "'anytime'", null, null, null, null, 
                     null, "'`'" ];

var symbolicNames = [ null, null, null, "Operator", "Currency", "OneKeyword", 
                      "ZeroKeyword", "Scale", "Give", "And", "Or", "Truncate", 
                      "Then", "Get", "Anytime", "Date", "DateInString", 
                      "ObsDouble", "ID", "StringLiteral", "BACKQUOTE", "WS" ];

var ruleNames =  [ "complexContract", "basicContract", "basicPrimitive", 
                   "zeroContract", "oneContract", "compositePrimitve", "scale", 
                   "give", "truncate", "then", "get", "anytime" ];

function hcclParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

hcclParser.prototype = Object.create(antlr4.Parser.prototype);
hcclParser.prototype.constructor = hcclParser;

Object.defineProperty(hcclParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

hcclParser.EOF = antlr4.Token.EOF;
hcclParser.T__0 = 1;
hcclParser.T__1 = 2;
hcclParser.Operator = 3;
hcclParser.Currency = 4;
hcclParser.OneKeyword = 5;
hcclParser.ZeroKeyword = 6;
hcclParser.Scale = 7;
hcclParser.Give = 8;
hcclParser.And = 9;
hcclParser.Or = 10;
hcclParser.Truncate = 11;
hcclParser.Then = 12;
hcclParser.Get = 13;
hcclParser.Anytime = 14;
hcclParser.Date = 15;
hcclParser.DateInString = 16;
hcclParser.ObsDouble = 17;
hcclParser.ID = 18;
hcclParser.StringLiteral = 19;
hcclParser.BACKQUOTE = 20;
hcclParser.WS = 21;

hcclParser.RULE_complexContract = 0;
hcclParser.RULE_basicContract = 1;
hcclParser.RULE_basicPrimitive = 2;
hcclParser.RULE_zeroContract = 3;
hcclParser.RULE_oneContract = 4;
hcclParser.RULE_compositePrimitve = 5;
hcclParser.RULE_scale = 6;
hcclParser.RULE_give = 7;
hcclParser.RULE_truncate = 8;
hcclParser.RULE_then = 9;
hcclParser.RULE_get = 10;
hcclParser.RULE_anytime = 11;

function ComplexContractContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_complexContract;
    return this;
}

ComplexContractContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComplexContractContext.prototype.constructor = ComplexContractContext;

ComplexContractContext.prototype.basicContract = function() {
    return this.getTypedRuleContext(BasicContractContext,0);
};

ComplexContractContext.prototype.Operator = function() {
    return this.getToken(hcclParser.Operator, 0);
};

ComplexContractContext.prototype.complexContract = function() {
    return this.getTypedRuleContext(ComplexContractContext,0);
};

ComplexContractContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterComplexContract(this);
	}
};

ComplexContractContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitComplexContract(this);
	}
};




hcclParser.ComplexContractContext = ComplexContractContext;

hcclParser.prototype.complexContract = function() {

    var localctx = new ComplexContractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, hcclParser.RULE_complexContract);
    try {
        this.state = 29;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.basicContract();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.basicContract();
            this.state = 26;
            this.match(hcclParser.Operator);
            this.state = 27;
            this.complexContract();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BasicContractContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_basicContract;
    return this;
}

BasicContractContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasicContractContext.prototype.constructor = BasicContractContext;

BasicContractContext.prototype.basicPrimitive = function() {
    return this.getTypedRuleContext(BasicPrimitiveContext,0);
};

BasicContractContext.prototype.compositePrimitve = function() {
    return this.getTypedRuleContext(CompositePrimitveContext,0);
};

BasicContractContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterBasicContract(this);
	}
};

BasicContractContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitBasicContract(this);
	}
};




hcclParser.BasicContractContext = BasicContractContext;

hcclParser.prototype.basicContract = function() {

    var localctx = new BasicContractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, hcclParser.RULE_basicContract);
    try {
        this.state = 33;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case hcclParser.OneKeyword:
        case hcclParser.ZeroKeyword:
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.basicPrimitive();
            break;
        case hcclParser.Scale:
        case hcclParser.Give:
        case hcclParser.Truncate:
        case hcclParser.Then:
        case hcclParser.Get:
        case hcclParser.Anytime:
            this.enterOuterAlt(localctx, 2);
            this.state = 32;
            this.compositePrimitve();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BasicPrimitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_basicPrimitive;
    return this;
}

BasicPrimitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasicPrimitiveContext.prototype.constructor = BasicPrimitiveContext;


 
BasicPrimitiveContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ZEROContext(parser, ctx) {
	BasicPrimitiveContext.call(this, parser);
    BasicPrimitiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ZEROContext.prototype = Object.create(BasicPrimitiveContext.prototype);
ZEROContext.prototype.constructor = ZEROContext;

hcclParser.ZEROContext = ZEROContext;

ZEROContext.prototype.zeroContract = function() {
    return this.getTypedRuleContext(ZeroContractContext,0);
};
ZEROContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterZERO(this);
	}
};

ZEROContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitZERO(this);
	}
};


function ONEContext(parser, ctx) {
	BasicPrimitiveContext.call(this, parser);
    BasicPrimitiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ONEContext.prototype = Object.create(BasicPrimitiveContext.prototype);
ONEContext.prototype.constructor = ONEContext;

hcclParser.ONEContext = ONEContext;

ONEContext.prototype.oneContract = function() {
    return this.getTypedRuleContext(OneContractContext,0);
};
ONEContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterONE(this);
	}
};

ONEContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitONE(this);
	}
};



hcclParser.BasicPrimitiveContext = BasicPrimitiveContext;

hcclParser.prototype.basicPrimitive = function() {

    var localctx = new BasicPrimitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, hcclParser.RULE_basicPrimitive);
    try {
        this.state = 37;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case hcclParser.ZeroKeyword:
            localctx = new ZEROContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 35;
            this.zeroContract();
            break;
        case hcclParser.OneKeyword:
            localctx = new ONEContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 36;
            this.oneContract();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ZeroContractContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_zeroContract;
    return this;
}

ZeroContractContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ZeroContractContext.prototype.constructor = ZeroContractContext;

ZeroContractContext.prototype.ZeroKeyword = function() {
    return this.getToken(hcclParser.ZeroKeyword, 0);
};

ZeroContractContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterZeroContract(this);
	}
};

ZeroContractContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitZeroContract(this);
	}
};




hcclParser.ZeroContractContext = ZeroContractContext;

hcclParser.prototype.zeroContract = function() {

    var localctx = new ZeroContractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, hcclParser.RULE_zeroContract);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.match(hcclParser.ZeroKeyword);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OneContractContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_oneContract;
    return this;
}

OneContractContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OneContractContext.prototype.constructor = OneContractContext;

OneContractContext.prototype.OneKeyword = function() {
    return this.getToken(hcclParser.OneKeyword, 0);
};

OneContractContext.prototype.Currency = function() {
    return this.getToken(hcclParser.Currency, 0);
};

OneContractContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterOneContract(this);
	}
};

OneContractContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitOneContract(this);
	}
};




hcclParser.OneContractContext = OneContractContext;

hcclParser.prototype.oneContract = function() {

    var localctx = new OneContractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, hcclParser.RULE_oneContract);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(hcclParser.OneKeyword);
        this.state = 42;
        this.match(hcclParser.Currency);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CompositePrimitveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_compositePrimitve;
    return this;
}

CompositePrimitveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompositePrimitveContext.prototype.constructor = CompositePrimitveContext;


 
CompositePrimitveContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ANYTIME_CONTRACTContext(parser, ctx) {
	CompositePrimitveContext.call(this, parser);
    CompositePrimitveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ANYTIME_CONTRACTContext.prototype = Object.create(CompositePrimitveContext.prototype);
ANYTIME_CONTRACTContext.prototype.constructor = ANYTIME_CONTRACTContext;

hcclParser.ANYTIME_CONTRACTContext = ANYTIME_CONTRACTContext;

ANYTIME_CONTRACTContext.prototype.anytime = function() {
    return this.getTypedRuleContext(AnytimeContext,0);
};
ANYTIME_CONTRACTContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterANYTIME_CONTRACT(this);
	}
};

ANYTIME_CONTRACTContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitANYTIME_CONTRACT(this);
	}
};


function TRUNCATE_CONTRACTContext(parser, ctx) {
	CompositePrimitveContext.call(this, parser);
    CompositePrimitveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TRUNCATE_CONTRACTContext.prototype = Object.create(CompositePrimitveContext.prototype);
TRUNCATE_CONTRACTContext.prototype.constructor = TRUNCATE_CONTRACTContext;

hcclParser.TRUNCATE_CONTRACTContext = TRUNCATE_CONTRACTContext;

TRUNCATE_CONTRACTContext.prototype.truncate = function() {
    return this.getTypedRuleContext(TruncateContext,0);
};
TRUNCATE_CONTRACTContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterTRUNCATE_CONTRACT(this);
	}
};

TRUNCATE_CONTRACTContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitTRUNCATE_CONTRACT(this);
	}
};


function SCALE_CONTRACTContext(parser, ctx) {
	CompositePrimitveContext.call(this, parser);
    CompositePrimitveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SCALE_CONTRACTContext.prototype = Object.create(CompositePrimitveContext.prototype);
SCALE_CONTRACTContext.prototype.constructor = SCALE_CONTRACTContext;

hcclParser.SCALE_CONTRACTContext = SCALE_CONTRACTContext;

SCALE_CONTRACTContext.prototype.scale = function() {
    return this.getTypedRuleContext(ScaleContext,0);
};
SCALE_CONTRACTContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterSCALE_CONTRACT(this);
	}
};

SCALE_CONTRACTContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitSCALE_CONTRACT(this);
	}
};


function GET_CONTRACTContext(parser, ctx) {
	CompositePrimitveContext.call(this, parser);
    CompositePrimitveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GET_CONTRACTContext.prototype = Object.create(CompositePrimitveContext.prototype);
GET_CONTRACTContext.prototype.constructor = GET_CONTRACTContext;

hcclParser.GET_CONTRACTContext = GET_CONTRACTContext;

GET_CONTRACTContext.prototype.get = function() {
    return this.getTypedRuleContext(GetContext,0);
};
GET_CONTRACTContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterGET_CONTRACT(this);
	}
};

GET_CONTRACTContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitGET_CONTRACT(this);
	}
};


function THEN_CONTRACTContext(parser, ctx) {
	CompositePrimitveContext.call(this, parser);
    CompositePrimitveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

THEN_CONTRACTContext.prototype = Object.create(CompositePrimitveContext.prototype);
THEN_CONTRACTContext.prototype.constructor = THEN_CONTRACTContext;

hcclParser.THEN_CONTRACTContext = THEN_CONTRACTContext;

THEN_CONTRACTContext.prototype.then = function() {
    return this.getTypedRuleContext(ThenContext,0);
};
THEN_CONTRACTContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterTHEN_CONTRACT(this);
	}
};

THEN_CONTRACTContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitTHEN_CONTRACT(this);
	}
};


function GIVE_CONTRACTContext(parser, ctx) {
	CompositePrimitveContext.call(this, parser);
    CompositePrimitveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GIVE_CONTRACTContext.prototype = Object.create(CompositePrimitveContext.prototype);
GIVE_CONTRACTContext.prototype.constructor = GIVE_CONTRACTContext;

hcclParser.GIVE_CONTRACTContext = GIVE_CONTRACTContext;

GIVE_CONTRACTContext.prototype.give = function() {
    return this.getTypedRuleContext(GiveContext,0);
};
GIVE_CONTRACTContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterGIVE_CONTRACT(this);
	}
};

GIVE_CONTRACTContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitGIVE_CONTRACT(this);
	}
};



hcclParser.CompositePrimitveContext = CompositePrimitveContext;

hcclParser.prototype.compositePrimitve = function() {

    var localctx = new CompositePrimitveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, hcclParser.RULE_compositePrimitve);
    try {
        this.state = 50;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case hcclParser.Scale:
            localctx = new SCALE_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 44;
            this.scale();
            break;
        case hcclParser.Give:
            localctx = new GIVE_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 45;
            this.give();
            break;
        case hcclParser.Truncate:
            localctx = new TRUNCATE_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 46;
            this.truncate();
            break;
        case hcclParser.Then:
            localctx = new THEN_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 47;
            this.then();
            break;
        case hcclParser.Get:
            localctx = new GET_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 48;
            this.get();
            break;
        case hcclParser.Anytime:
            localctx = new ANYTIME_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 49;
            this.anytime();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ScaleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_scale;
    return this;
}

ScaleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScaleContext.prototype.constructor = ScaleContext;

ScaleContext.prototype.Scale = function() {
    return this.getToken(hcclParser.Scale, 0);
};

ScaleContext.prototype.ObsDouble = function() {
    return this.getToken(hcclParser.ObsDouble, 0);
};

ScaleContext.prototype.complexContract = function() {
    return this.getTypedRuleContext(ComplexContractContext,0);
};

ScaleContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterScale(this);
	}
};

ScaleContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitScale(this);
	}
};




hcclParser.ScaleContext = ScaleContext;

hcclParser.prototype.scale = function() {

    var localctx = new ScaleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, hcclParser.RULE_scale);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(hcclParser.Scale);
        this.state = 53;
        this.match(hcclParser.ObsDouble);
        this.state = 54;
        this.match(hcclParser.T__0);
        this.state = 55;
        this.complexContract();
        this.state = 56;
        this.match(hcclParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_give;
    return this;
}

GiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GiveContext.prototype.constructor = GiveContext;

GiveContext.prototype.Give = function() {
    return this.getToken(hcclParser.Give, 0);
};

GiveContext.prototype.complexContract = function() {
    return this.getTypedRuleContext(ComplexContractContext,0);
};

GiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterGive(this);
	}
};

GiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitGive(this);
	}
};




hcclParser.GiveContext = GiveContext;

hcclParser.prototype.give = function() {

    var localctx = new GiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, hcclParser.RULE_give);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.match(hcclParser.Give);
        this.state = 59;
        this.match(hcclParser.T__0);
        this.state = 60;
        this.complexContract();
        this.state = 61;
        this.match(hcclParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TruncateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_truncate;
    return this;
}

TruncateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TruncateContext.prototype.constructor = TruncateContext;

TruncateContext.prototype.Truncate = function() {
    return this.getToken(hcclParser.Truncate, 0);
};

TruncateContext.prototype.Date = function() {
    return this.getToken(hcclParser.Date, 0);
};

TruncateContext.prototype.complexContract = function() {
    return this.getTypedRuleContext(ComplexContractContext,0);
};

TruncateContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterTruncate(this);
	}
};

TruncateContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitTruncate(this);
	}
};




hcclParser.TruncateContext = TruncateContext;

hcclParser.prototype.truncate = function() {

    var localctx = new TruncateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, hcclParser.RULE_truncate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(hcclParser.Truncate);
        this.state = 64;
        this.match(hcclParser.Date);
        this.state = 65;
        this.match(hcclParser.T__0);
        this.state = 66;
        this.complexContract();
        this.state = 67;
        this.match(hcclParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ThenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_then;
    return this;
}

ThenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThenContext.prototype.constructor = ThenContext;

ThenContext.prototype.Then = function() {
    return this.getToken(hcclParser.Then, 0);
};

ThenContext.prototype.complexContract = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComplexContractContext);
    } else {
        return this.getTypedRuleContext(ComplexContractContext,i);
    }
};

ThenContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterThen(this);
	}
};

ThenContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitThen(this);
	}
};




hcclParser.ThenContext = ThenContext;

hcclParser.prototype.then = function() {

    var localctx = new ThenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, hcclParser.RULE_then);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.match(hcclParser.Then);
        this.state = 70;
        this.match(hcclParser.T__0);
        this.state = 71;
        this.complexContract();
        this.state = 72;
        this.complexContract();
        this.state = 73;
        this.match(hcclParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_get;
    return this;
}

GetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GetContext.prototype.constructor = GetContext;

GetContext.prototype.Get = function() {
    return this.getToken(hcclParser.Get, 0);
};

GetContext.prototype.complexContract = function() {
    return this.getTypedRuleContext(ComplexContractContext,0);
};

GetContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterGet(this);
	}
};

GetContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitGet(this);
	}
};




hcclParser.GetContext = GetContext;

hcclParser.prototype.get = function() {

    var localctx = new GetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, hcclParser.RULE_get);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(hcclParser.Get);
        this.state = 76;
        this.match(hcclParser.T__0);
        this.state = 77;
        this.complexContract();
        this.state = 78;
        this.match(hcclParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnytimeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_anytime;
    return this;
}

AnytimeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnytimeContext.prototype.constructor = AnytimeContext;

AnytimeContext.prototype.Anytime = function() {
    return this.getToken(hcclParser.Anytime, 0);
};

AnytimeContext.prototype.complexContract = function() {
    return this.getTypedRuleContext(ComplexContractContext,0);
};

AnytimeContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterAnytime(this);
	}
};

AnytimeContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitAnytime(this);
	}
};




hcclParser.AnytimeContext = AnytimeContext;

hcclParser.prototype.anytime = function() {

    var localctx = new AnytimeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, hcclParser.RULE_anytime);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(hcclParser.Anytime);
        this.state = 81;
        this.match(hcclParser.T__0);
        this.state = 82;
        this.complexContract();
        this.state = 83;
        this.match(hcclParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.hcclParser = hcclParser;
