// Generated from grammar/hccl.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var hcclListener = require('./hcclListener').hcclListener;
var hcclVisitor = require('./hcclVisitor').hcclVisitor;

var grammarFileName = "hccl.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0018\u0088\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002$\n\u0002\f\u0002\u000e",
    "\u0002\'\u000b\u0002\u0003\u0002\u0003\u0002\u0005\u0002+\n\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002/\n\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u00024\n\u0002\f\u0002\u000e\u00027\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0005\u0002;\n\u0002\u0003\u0002\u0003\u0002\u0005\u0002",
    "?\n\u0002\u0005\u0002A\n\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004I\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007W",
    "\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0002\u0002\u0011",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e\u0002\u0002\u0002\u0087\u0002@\u0003\u0002\u0002\u0002\u0004",
    "B\u0003\u0002\u0002\u0002\u0006H\u0003\u0002\u0002\u0002\bJ\u0003\u0002",
    "\u0002\u0002\nL\u0003\u0002\u0002\u0002\fV\u0003\u0002\u0002\u0002\u000e",
    "X\u0003\u0002\u0002\u0002\u0010Z\u0003\u0002\u0002\u0002\u0012`\u0003",
    "\u0002\u0002\u0002\u0014e\u0003\u0002\u0002\u0002\u0016k\u0003\u0002",
    "\u0002\u0002\u0018q\u0003\u0002\u0002\u0002\u001aw\u0003\u0002\u0002",
    "\u0002\u001c}\u0003\u0002\u0002\u0002\u001e\u0082\u0003\u0002\u0002",
    "\u0002 %\u0005\u0004\u0003\u0002!\"\u0007\u0003\u0002\u0002\"$\u0005",
    "\u0004\u0003\u0002#!\u0003\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002",
    "%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&(\u0003\u0002\u0002",
    "\u0002\'%\u0003\u0002\u0002\u0002()\u0007\u0004\u0002\u0002)+\u0003",
    "\u0002\u0002\u0002* \u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002",
    "+,\u0003\u0002\u0002\u0002,.\u0005\u0006\u0004\u0002-/\u0007\u0002\u0002",
    "\u0003.-\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/A\u0003\u0002",
    "\u0002\u000205\u0005\u0004\u0003\u000212\u0007\u0003\u0002\u000224\u0005",
    "\u0004\u0003\u000231\u0003\u0002\u0002\u000247\u0003\u0002\u0002\u0002",
    "53\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000268\u0003\u0002\u0002",
    "\u000275\u0003\u0002\u0002\u000289\u0007\u0004\u0002\u00029;\u0003\u0002",
    "\u0002\u0002:0\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;<\u0003",
    "\u0002\u0002\u0002<>\u0005\f\u0007\u0002=?\u0007\u0002\u0002\u0003>",
    "=\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?A\u0003\u0002\u0002",
    "\u0002@*\u0003\u0002\u0002\u0002@:\u0003\u0002\u0002\u0002A\u0003\u0003",
    "\u0002\u0002\u0002BC\u0007\u0015\u0002\u0002C\u0005\u0003\u0002\u0002",
    "\u0002DI\u0005\b\u0005\u0002EF\u0005\n\u0006\u0002FG\u0005\u000e\b\u0002",
    "GI\u0003\u0002\u0002\u0002HD\u0003\u0002\u0002\u0002HE\u0003\u0002\u0002",
    "\u0002I\u0007\u0003\u0002\u0002\u0002JK\u0007\t\u0002\u0002K\t\u0003",
    "\u0002\u0002\u0002LM\u0007\b\u0002\u0002M\u000b\u0003\u0002\u0002\u0002",
    "NW\u0005\u0010\t\u0002OW\u0005\u0012\n\u0002PW\u0005\u0014\u000b\u0002",
    "QW\u0005\u0016\f\u0002RW\u0005\u0018\r\u0002SW\u0005\u001a\u000e\u0002",
    "TW\u0005\u001c\u000f\u0002UW\u0005\u001e\u0010\u0002VN\u0003\u0002\u0002",
    "\u0002VO\u0003\u0002\u0002\u0002VP\u0003\u0002\u0002\u0002VQ\u0003\u0002",
    "\u0002\u0002VR\u0003\u0002\u0002\u0002VS\u0003\u0002\u0002\u0002VT\u0003",
    "\u0002\u0002\u0002VU\u0003\u0002\u0002\u0002W\r\u0003\u0002\u0002\u0002",
    "XY\u0007\u0007\u0002\u0002Y\u000f\u0003\u0002\u0002\u0002Z[\u0007\n",
    "\u0002\u0002[\\\u0007\u0014\u0002\u0002\\]\u0007\u0005\u0002\u0002]",
    "^\u0005\u0002\u0002\u0002^_\u0007\u0006\u0002\u0002_\u0011\u0003\u0002",
    "\u0002\u0002`a\u0007\u000b\u0002\u0002ab\u0007\u0005\u0002\u0002bc\u0005",
    "\u0002\u0002\u0002cd\u0007\u0006\u0002\u0002d\u0013\u0003\u0002\u0002",
    "\u0002ef\u0007\f\u0002\u0002fg\u0007\u0005\u0002\u0002gh\u0005\u0002",
    "\u0002\u0002hi\u0005\u0002\u0002\u0002ij\u0007\u0006\u0002\u0002j\u0015",
    "\u0003\u0002\u0002\u0002kl\u0007\r\u0002\u0002lm\u0007\u0005\u0002\u0002",
    "mn\u0005\u0002\u0002\u0002no\u0005\u0002\u0002\u0002op\u0007\u0006\u0002",
    "\u0002p\u0017\u0003\u0002\u0002\u0002qr\u0007\u000e\u0002\u0002rs\u0007",
    "\u0012\u0002\u0002st\u0007\u0005\u0002\u0002tu\u0005\u0002\u0002\u0002",
    "uv\u0007\u0006\u0002\u0002v\u0019\u0003\u0002\u0002\u0002wx\u0007\u000f",
    "\u0002\u0002xy\u0007\u0005\u0002\u0002yz\u0005\u0002\u0002\u0002z{\u0005",
    "\u0002\u0002\u0002{|\u0007\u0006\u0002\u0002|\u001b\u0003\u0002\u0002",
    "\u0002}~\u0007\u0010\u0002\u0002~\u007f\u0007\u0005\u0002\u0002\u007f",
    "\u0080\u0005\u0002\u0002\u0002\u0080\u0081\u0007\u0006\u0002\u0002\u0081",
    "\u001d\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u0011\u0002\u0002\u0083",
    "\u0084\u0007\u0005\u0002\u0002\u0084\u0085\u0005\u0002\u0002\u0002\u0085",
    "\u0086\u0007\u0006\u0002\u0002\u0086\u001f\u0003\u0002\u0002\u0002\u000b",
    "%*.5:>@HV"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','", "'='", "'('", "')'", null, "'one'", "'zero'", 
                     "'scale'", "'give'", "'and'", "'or'", "'truncate'", 
                     "'then'", "'get'", "'anytime'", null, null, null, null, 
                     null, "'`'" ];

var symbolicNames = [ null, null, null, null, null, "Currency", "OneKeyword", 
                      "ZeroKeyword", "Scale", "Give", "And", "Or", "Truncate", 
                      "Then", "Get", "Anytime", "Date", "DateInString", 
                      "ObsDouble", "ID", "StringLiteral", "BACKQUOTE", "WS" ];

var ruleNames =  [ "primitive", "contractIdentifier", "basicContract", "zeroContract", 
                   "oneContract", "compositeContract", "currencyType", "scale", 
                   "give", "and", "or", "truncate", "then", "get", "anytime" ];

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
hcclParser.T__2 = 3;
hcclParser.T__3 = 4;
hcclParser.Currency = 5;
hcclParser.OneKeyword = 6;
hcclParser.ZeroKeyword = 7;
hcclParser.Scale = 8;
hcclParser.Give = 9;
hcclParser.And = 10;
hcclParser.Or = 11;
hcclParser.Truncate = 12;
hcclParser.Then = 13;
hcclParser.Get = 14;
hcclParser.Anytime = 15;
hcclParser.Date = 16;
hcclParser.DateInString = 17;
hcclParser.ObsDouble = 18;
hcclParser.ID = 19;
hcclParser.StringLiteral = 20;
hcclParser.BACKQUOTE = 21;
hcclParser.WS = 22;

hcclParser.RULE_primitive = 0;
hcclParser.RULE_contractIdentifier = 1;
hcclParser.RULE_basicContract = 2;
hcclParser.RULE_zeroContract = 3;
hcclParser.RULE_oneContract = 4;
hcclParser.RULE_compositeContract = 5;
hcclParser.RULE_currencyType = 6;
hcclParser.RULE_scale = 7;
hcclParser.RULE_give = 8;
hcclParser.RULE_and = 9;
hcclParser.RULE_or = 10;
hcclParser.RULE_truncate = 11;
hcclParser.RULE_then = 12;
hcclParser.RULE_get = 13;
hcclParser.RULE_anytime = 14;

function PrimitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_primitive;
    return this;
}

PrimitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveContext.prototype.constructor = PrimitiveContext;


 
PrimitiveContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BASIC_CONTRACTContext(parser, ctx) {
	PrimitiveContext.call(this, parser);
    PrimitiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BASIC_CONTRACTContext.prototype = Object.create(PrimitiveContext.prototype);
BASIC_CONTRACTContext.prototype.constructor = BASIC_CONTRACTContext;

hcclParser.BASIC_CONTRACTContext = BASIC_CONTRACTContext;

BASIC_CONTRACTContext.prototype.basicContract = function() {
    return this.getTypedRuleContext(BasicContractContext,0);
};

BASIC_CONTRACTContext.prototype.EOF = function() {
    return this.getToken(hcclParser.EOF, 0);
};

BASIC_CONTRACTContext.prototype.contractIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ContractIdentifierContext);
    } else {
        return this.getTypedRuleContext(ContractIdentifierContext,i);
    }
};
BASIC_CONTRACTContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterBASIC_CONTRACT(this);
	}
};

BASIC_CONTRACTContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitBASIC_CONTRACT(this);
	}
};

BASIC_CONTRACTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitBASIC_CONTRACT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function COMP_CONTRACTContext(parser, ctx) {
	PrimitiveContext.call(this, parser);
    PrimitiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

COMP_CONTRACTContext.prototype = Object.create(PrimitiveContext.prototype);
COMP_CONTRACTContext.prototype.constructor = COMP_CONTRACTContext;

hcclParser.COMP_CONTRACTContext = COMP_CONTRACTContext;

COMP_CONTRACTContext.prototype.compositeContract = function() {
    return this.getTypedRuleContext(CompositeContractContext,0);
};

COMP_CONTRACTContext.prototype.EOF = function() {
    return this.getToken(hcclParser.EOF, 0);
};

COMP_CONTRACTContext.prototype.contractIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ContractIdentifierContext);
    } else {
        return this.getTypedRuleContext(ContractIdentifierContext,i);
    }
};
COMP_CONTRACTContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterCOMP_CONTRACT(this);
	}
};

COMP_CONTRACTContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitCOMP_CONTRACT(this);
	}
};

COMP_CONTRACTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitCOMP_CONTRACT(this);
    } else {
        return visitor.visitChildren(this);
    }
};



hcclParser.PrimitiveContext = PrimitiveContext;

hcclParser.prototype.primitive = function() {

    var localctx = new PrimitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, hcclParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.state = 62;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            localctx = new BASIC_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 40;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hcclParser.ID) {
                this.state = 30;
                this.contractIdentifier();
                this.state = 35;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===hcclParser.T__0) {
                    this.state = 31;
                    this.match(hcclParser.T__0);
                    this.state = 32;
                    this.contractIdentifier();
                    this.state = 37;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 38;
                this.match(hcclParser.T__1);
            }

            this.state = 42;
            this.basicContract();
            this.state = 44;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hcclParser.EOF) {
                this.state = 43;
                this.match(hcclParser.EOF);
            }

            break;

        case 2:
            localctx = new COMP_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hcclParser.ID) {
                this.state = 46;
                this.contractIdentifier();
                this.state = 51;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===hcclParser.T__0) {
                    this.state = 47;
                    this.match(hcclParser.T__0);
                    this.state = 48;
                    this.contractIdentifier();
                    this.state = 53;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 54;
                this.match(hcclParser.T__1);
            }

            this.state = 58;
            this.compositeContract();
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===hcclParser.EOF) {
                this.state = 59;
                this.match(hcclParser.EOF);
            }

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

function ContractIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_contractIdentifier;
    return this;
}

ContractIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContractIdentifierContext.prototype.constructor = ContractIdentifierContext;

ContractIdentifierContext.prototype.ID = function() {
    return this.getToken(hcclParser.ID, 0);
};

ContractIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterContractIdentifier(this);
	}
};

ContractIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitContractIdentifier(this);
	}
};

ContractIdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitContractIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.ContractIdentifierContext = ContractIdentifierContext;

hcclParser.prototype.contractIdentifier = function() {

    var localctx = new ContractIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, hcclParser.RULE_contractIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(hcclParser.ID);
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


 
BasicContractContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ZEROContext(parser, ctx) {
	BasicContractContext.call(this, parser);
    BasicContractContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ZEROContext.prototype = Object.create(BasicContractContext.prototype);
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

ZEROContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitZERO(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ONEContext(parser, ctx) {
	BasicContractContext.call(this, parser);
    BasicContractContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ONEContext.prototype = Object.create(BasicContractContext.prototype);
ONEContext.prototype.constructor = ONEContext;

hcclParser.ONEContext = ONEContext;

ONEContext.prototype.oneContract = function() {
    return this.getTypedRuleContext(OneContractContext,0);
};

ONEContext.prototype.currencyType = function() {
    return this.getTypedRuleContext(CurrencyTypeContext,0);
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

ONEContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitONE(this);
    } else {
        return visitor.visitChildren(this);
    }
};



hcclParser.BasicContractContext = BasicContractContext;

hcclParser.prototype.basicContract = function() {

    var localctx = new BasicContractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, hcclParser.RULE_basicContract);
    try {
        this.state = 70;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case hcclParser.ZeroKeyword:
            localctx = new ZEROContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 66;
            this.zeroContract();
            break;
        case hcclParser.OneKeyword:
            localctx = new ONEContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
            this.oneContract();
            this.state = 68;
            this.currencyType();
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

ZeroContractContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitZeroContract(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.ZeroContractContext = ZeroContractContext;

hcclParser.prototype.zeroContract = function() {

    var localctx = new ZeroContractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, hcclParser.RULE_zeroContract);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
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

OneContractContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitOneContract(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.OneContractContext = OneContractContext;

hcclParser.prototype.oneContract = function() {

    var localctx = new OneContractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, hcclParser.RULE_oneContract);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(hcclParser.OneKeyword);
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

function CompositeContractContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_compositeContract;
    return this;
}

CompositeContractContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompositeContractContext.prototype.constructor = CompositeContractContext;


 
CompositeContractContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AND_CONTRACTContext(parser, ctx) {
	CompositeContractContext.call(this, parser);
    CompositeContractContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AND_CONTRACTContext.prototype = Object.create(CompositeContractContext.prototype);
AND_CONTRACTContext.prototype.constructor = AND_CONTRACTContext;

hcclParser.AND_CONTRACTContext = AND_CONTRACTContext;

AND_CONTRACTContext.prototype.and = function() {
    return this.getTypedRuleContext(AndContext,0);
};
AND_CONTRACTContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterAND_CONTRACT(this);
	}
};

AND_CONTRACTContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitAND_CONTRACT(this);
	}
};

AND_CONTRACTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitAND_CONTRACT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ANYTIME_CONTRACTContext(parser, ctx) {
	CompositeContractContext.call(this, parser);
    CompositeContractContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ANYTIME_CONTRACTContext.prototype = Object.create(CompositeContractContext.prototype);
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

ANYTIME_CONTRACTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitANYTIME_CONTRACT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TRUNCATE_CONTRACTContext(parser, ctx) {
	CompositeContractContext.call(this, parser);
    CompositeContractContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TRUNCATE_CONTRACTContext.prototype = Object.create(CompositeContractContext.prototype);
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

TRUNCATE_CONTRACTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitTRUNCATE_CONTRACT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OR_CONTRACTContext(parser, ctx) {
	CompositeContractContext.call(this, parser);
    CompositeContractContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OR_CONTRACTContext.prototype = Object.create(CompositeContractContext.prototype);
OR_CONTRACTContext.prototype.constructor = OR_CONTRACTContext;

hcclParser.OR_CONTRACTContext = OR_CONTRACTContext;

OR_CONTRACTContext.prototype.or = function() {
    return this.getTypedRuleContext(OrContext,0);
};
OR_CONTRACTContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterOR_CONTRACT(this);
	}
};

OR_CONTRACTContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitOR_CONTRACT(this);
	}
};

OR_CONTRACTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitOR_CONTRACT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SCALE_CONTRACTContext(parser, ctx) {
	CompositeContractContext.call(this, parser);
    CompositeContractContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SCALE_CONTRACTContext.prototype = Object.create(CompositeContractContext.prototype);
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

SCALE_CONTRACTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitSCALE_CONTRACT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GET_CONTRACTContext(parser, ctx) {
	CompositeContractContext.call(this, parser);
    CompositeContractContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GET_CONTRACTContext.prototype = Object.create(CompositeContractContext.prototype);
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

GET_CONTRACTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitGET_CONTRACT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function THEN_CONTRACTContext(parser, ctx) {
	CompositeContractContext.call(this, parser);
    CompositeContractContext.prototype.copyFrom.call(this, ctx);
    return this;
}

THEN_CONTRACTContext.prototype = Object.create(CompositeContractContext.prototype);
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

THEN_CONTRACTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitTHEN_CONTRACT(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GIVE_CONTRACTContext(parser, ctx) {
	CompositeContractContext.call(this, parser);
    CompositeContractContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GIVE_CONTRACTContext.prototype = Object.create(CompositeContractContext.prototype);
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

GIVE_CONTRACTContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitGIVE_CONTRACT(this);
    } else {
        return visitor.visitChildren(this);
    }
};



hcclParser.CompositeContractContext = CompositeContractContext;

hcclParser.prototype.compositeContract = function() {

    var localctx = new CompositeContractContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, hcclParser.RULE_compositeContract);
    try {
        this.state = 84;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case hcclParser.Scale:
            localctx = new SCALE_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 76;
            this.scale();
            break;
        case hcclParser.Give:
            localctx = new GIVE_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.give();
            break;
        case hcclParser.And:
            localctx = new AND_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 78;
            this.and();
            break;
        case hcclParser.Or:
            localctx = new OR_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 79;
            this.or();
            break;
        case hcclParser.Truncate:
            localctx = new TRUNCATE_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 80;
            this.truncate();
            break;
        case hcclParser.Then:
            localctx = new THEN_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 81;
            this.then();
            break;
        case hcclParser.Get:
            localctx = new GET_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 82;
            this.get();
            break;
        case hcclParser.Anytime:
            localctx = new ANYTIME_CONTRACTContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 83;
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

function CurrencyTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_currencyType;
    return this;
}

CurrencyTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CurrencyTypeContext.prototype.constructor = CurrencyTypeContext;

CurrencyTypeContext.prototype.Currency = function() {
    return this.getToken(hcclParser.Currency, 0);
};

CurrencyTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterCurrencyType(this);
	}
};

CurrencyTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitCurrencyType(this);
	}
};

CurrencyTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitCurrencyType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.CurrencyTypeContext = CurrencyTypeContext;

hcclParser.prototype.currencyType = function() {

    var localctx = new CurrencyTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, hcclParser.RULE_currencyType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
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

ScaleContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
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

ScaleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitScale(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.ScaleContext = ScaleContext;

hcclParser.prototype.scale = function() {

    var localctx = new ScaleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, hcclParser.RULE_scale);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.match(hcclParser.Scale);
        this.state = 89;
        this.match(hcclParser.ObsDouble);
        this.state = 90;
        this.match(hcclParser.T__2);
        this.state = 91;
        this.primitive();
        this.state = 92;
        this.match(hcclParser.T__3);
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

GiveContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
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

GiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitGive(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.GiveContext = GiveContext;

hcclParser.prototype.give = function() {

    var localctx = new GiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, hcclParser.RULE_give);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.match(hcclParser.Give);
        this.state = 95;
        this.match(hcclParser.T__2);
        this.state = 96;
        this.primitive();
        this.state = 97;
        this.match(hcclParser.T__3);
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

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;

AndContext.prototype.And = function() {
    return this.getToken(hcclParser.And, 0);
};

AndContext.prototype.primitive = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrimitiveContext);
    } else {
        return this.getTypedRuleContext(PrimitiveContext,i);
    }
};

AndContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterAnd(this);
	}
};

AndContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitAnd(this);
	}
};

AndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.AndContext = AndContext;

hcclParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, hcclParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(hcclParser.And);
        this.state = 100;
        this.match(hcclParser.T__2);
        this.state = 101;
        this.primitive();
        this.state = 102;
        this.primitive();
        this.state = 103;
        this.match(hcclParser.T__3);
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

function OrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = hcclParser.RULE_or;
    return this;
}

OrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrContext.prototype.constructor = OrContext;

OrContext.prototype.Or = function() {
    return this.getToken(hcclParser.Or, 0);
};

OrContext.prototype.primitive = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrimitiveContext);
    } else {
        return this.getTypedRuleContext(PrimitiveContext,i);
    }
};

OrContext.prototype.enterRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.enterOr(this);
	}
};

OrContext.prototype.exitRule = function(listener) {
    if(listener instanceof hcclListener ) {
        listener.exitOr(this);
	}
};

OrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.OrContext = OrContext;

hcclParser.prototype.or = function() {

    var localctx = new OrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, hcclParser.RULE_or);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(hcclParser.Or);
        this.state = 106;
        this.match(hcclParser.T__2);
        this.state = 107;
        this.primitive();
        this.state = 108;
        this.primitive();
        this.state = 109;
        this.match(hcclParser.T__3);
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

TruncateContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
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

TruncateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitTruncate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.TruncateContext = TruncateContext;

hcclParser.prototype.truncate = function() {

    var localctx = new TruncateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, hcclParser.RULE_truncate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(hcclParser.Truncate);
        this.state = 112;
        this.match(hcclParser.Date);
        this.state = 113;
        this.match(hcclParser.T__2);
        this.state = 114;
        this.primitive();
        this.state = 115;
        this.match(hcclParser.T__3);
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

ThenContext.prototype.primitive = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrimitiveContext);
    } else {
        return this.getTypedRuleContext(PrimitiveContext,i);
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

ThenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitThen(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.ThenContext = ThenContext;

hcclParser.prototype.then = function() {

    var localctx = new ThenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, hcclParser.RULE_then);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(hcclParser.Then);
        this.state = 118;
        this.match(hcclParser.T__2);
        this.state = 119;
        this.primitive();
        this.state = 120;
        this.primitive();
        this.state = 121;
        this.match(hcclParser.T__3);
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

GetContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
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

GetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitGet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.GetContext = GetContext;

hcclParser.prototype.get = function() {

    var localctx = new GetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, hcclParser.RULE_get);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.match(hcclParser.Get);
        this.state = 124;
        this.match(hcclParser.T__2);
        this.state = 125;
        this.primitive();
        this.state = 126;
        this.match(hcclParser.T__3);
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

AnytimeContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
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

AnytimeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof hcclVisitor ) {
        return visitor.visitAnytime(this);
    } else {
        return visitor.visitChildren(this);
    }
};




hcclParser.AnytimeContext = AnytimeContext;

hcclParser.prototype.anytime = function() {

    var localctx = new AnytimeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, hcclParser.RULE_anytime);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.match(hcclParser.Anytime);
        this.state = 129;
        this.match(hcclParser.T__2);
        this.state = 130;
        this.primitive();
        this.state = 131;
        this.match(hcclParser.T__3);
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
