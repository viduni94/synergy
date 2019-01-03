// Generated from hccl.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class hcclParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, Operator=3, Currency=4, OneKeyword=5, ZeroKeyword=6, Scale=7, 
		Give=8, And=9, Or=10, Truncate=11, Then=12, Get=13, Anytime=14, Date=15, 
		DateInString=16, ObsDouble=17, ID=18, StringLiteral=19, BACKQUOTE=20, 
		WS=21;
	public static final int
		RULE_complexContract = 0, RULE_basicContract = 1, RULE_basicPrimitive = 2, 
		RULE_zeroContract = 3, RULE_oneContract = 4, RULE_compositePrimitve = 5, 
		RULE_scale = 6, RULE_give = 7, RULE_truncate = 8, RULE_then = 9, RULE_get = 10, 
		RULE_anytime = 11, RULE_and = 12, RULE_or = 13;
	public static final String[] ruleNames = {
		"complexContract", "basicContract", "basicPrimitive", "zeroContract", 
		"oneContract", "compositePrimitve", "scale", "give", "truncate", "then", 
		"get", "anytime", "and", "or"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'('", "')'", null, null, "'one'", "'zero'", "'scale'", "'give'", 
		"'and'", "'or'", "'truncate'", "'then'", "'get'", "'anytime'", null, null, 
		null, null, null, "'`'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, "Operator", "Currency", "OneKeyword", "ZeroKeyword", 
		"Scale", "Give", "And", "Or", "Truncate", "Then", "Get", "Anytime", "Date", 
		"DateInString", "ObsDouble", "ID", "StringLiteral", "BACKQUOTE", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "hccl.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public hcclParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ComplexContractContext extends ParserRuleContext {
		public BasicContractContext basicContract() {
			return getRuleContext(BasicContractContext.class,0);
		}
		public TerminalNode Operator() { return getToken(hcclParser.Operator, 0); }
		public ComplexContractContext complexContract() {
			return getRuleContext(ComplexContractContext.class,0);
		}
		public ComplexContractContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_complexContract; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterComplexContract(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitComplexContract(this);
		}
	}

	public final ComplexContractContext complexContract() throws RecognitionException {
		ComplexContractContext _localctx = new ComplexContractContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_complexContract);
		try {
			setState(33);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(28);
				basicContract();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(29);
				basicContract();
				setState(30);
				match(Operator);
				setState(31);
				complexContract();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BasicContractContext extends ParserRuleContext {
		public BasicPrimitiveContext basicPrimitive() {
			return getRuleContext(BasicPrimitiveContext.class,0);
		}
		public CompositePrimitveContext compositePrimitve() {
			return getRuleContext(CompositePrimitveContext.class,0);
		}
		public BasicContractContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basicContract; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterBasicContract(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitBasicContract(this);
		}
	}

	public final BasicContractContext basicContract() throws RecognitionException {
		BasicContractContext _localctx = new BasicContractContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_basicContract);
		try {
			setState(37);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OneKeyword:
			case ZeroKeyword:
				enterOuterAlt(_localctx, 1);
				{
				setState(35);
				basicPrimitive();
				}
				break;
			case Scale:
			case Give:
			case And:
			case Or:
			case Truncate:
			case Then:
			case Get:
			case Anytime:
				enterOuterAlt(_localctx, 2);
				{
				setState(36);
				compositePrimitve();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BasicPrimitiveContext extends ParserRuleContext {
		public BasicPrimitiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_basicPrimitive; }
	 
		public BasicPrimitiveContext() { }
		public void copyFrom(BasicPrimitiveContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ZEROContext extends BasicPrimitiveContext {
		public ZeroContractContext zeroContract() {
			return getRuleContext(ZeroContractContext.class,0);
		}
		public ZEROContext(BasicPrimitiveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterZERO(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitZERO(this);
		}
	}
	public static class ONEContext extends BasicPrimitiveContext {
		public OneContractContext oneContract() {
			return getRuleContext(OneContractContext.class,0);
		}
		public ONEContext(BasicPrimitiveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterONE(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitONE(this);
		}
	}

	public final BasicPrimitiveContext basicPrimitive() throws RecognitionException {
		BasicPrimitiveContext _localctx = new BasicPrimitiveContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_basicPrimitive);
		try {
			setState(41);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ZeroKeyword:
				_localctx = new ZEROContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				zeroContract();
				}
				break;
			case OneKeyword:
				_localctx = new ONEContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				oneContract();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ZeroContractContext extends ParserRuleContext {
		public TerminalNode ZeroKeyword() { return getToken(hcclParser.ZeroKeyword, 0); }
		public ZeroContractContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_zeroContract; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterZeroContract(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitZeroContract(this);
		}
	}

	public final ZeroContractContext zeroContract() throws RecognitionException {
		ZeroContractContext _localctx = new ZeroContractContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_zeroContract);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			match(ZeroKeyword);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OneContractContext extends ParserRuleContext {
		public TerminalNode OneKeyword() { return getToken(hcclParser.OneKeyword, 0); }
		public TerminalNode Currency() { return getToken(hcclParser.Currency, 0); }
		public OneContractContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_oneContract; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterOneContract(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitOneContract(this);
		}
	}

	public final OneContractContext oneContract() throws RecognitionException {
		OneContractContext _localctx = new OneContractContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_oneContract);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(OneKeyword);
			setState(46);
			match(Currency);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompositePrimitveContext extends ParserRuleContext {
		public CompositePrimitveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compositePrimitve; }
	 
		public CompositePrimitveContext() { }
		public void copyFrom(CompositePrimitveContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AND_CONTRACTContext extends CompositePrimitveContext {
		public AndContext and() {
			return getRuleContext(AndContext.class,0);
		}
		public AND_CONTRACTContext(CompositePrimitveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterAND_CONTRACT(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitAND_CONTRACT(this);
		}
	}
	public static class ANYTIME_CONTRACTContext extends CompositePrimitveContext {
		public AnytimeContext anytime() {
			return getRuleContext(AnytimeContext.class,0);
		}
		public ANYTIME_CONTRACTContext(CompositePrimitveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterANYTIME_CONTRACT(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitANYTIME_CONTRACT(this);
		}
	}
	public static class TRUNCATE_CONTRACTContext extends CompositePrimitveContext {
		public TruncateContext truncate() {
			return getRuleContext(TruncateContext.class,0);
		}
		public TRUNCATE_CONTRACTContext(CompositePrimitveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterTRUNCATE_CONTRACT(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitTRUNCATE_CONTRACT(this);
		}
	}
	public static class OR_CONTRACTContext extends CompositePrimitveContext {
		public OrContext or() {
			return getRuleContext(OrContext.class,0);
		}
		public OR_CONTRACTContext(CompositePrimitveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterOR_CONTRACT(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitOR_CONTRACT(this);
		}
	}
	public static class SCALE_CONTRACTContext extends CompositePrimitveContext {
		public ScaleContext scale() {
			return getRuleContext(ScaleContext.class,0);
		}
		public SCALE_CONTRACTContext(CompositePrimitveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterSCALE_CONTRACT(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitSCALE_CONTRACT(this);
		}
	}
	public static class GET_CONTRACTContext extends CompositePrimitveContext {
		public GetContext get() {
			return getRuleContext(GetContext.class,0);
		}
		public GET_CONTRACTContext(CompositePrimitveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterGET_CONTRACT(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitGET_CONTRACT(this);
		}
	}
	public static class THEN_CONTRACTContext extends CompositePrimitveContext {
		public ThenContext then() {
			return getRuleContext(ThenContext.class,0);
		}
		public THEN_CONTRACTContext(CompositePrimitveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterTHEN_CONTRACT(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitTHEN_CONTRACT(this);
		}
	}
	public static class GIVE_CONTRACTContext extends CompositePrimitveContext {
		public GiveContext give() {
			return getRuleContext(GiveContext.class,0);
		}
		public GIVE_CONTRACTContext(CompositePrimitveContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterGIVE_CONTRACT(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitGIVE_CONTRACT(this);
		}
	}

	public final CompositePrimitveContext compositePrimitve() throws RecognitionException {
		CompositePrimitveContext _localctx = new CompositePrimitveContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_compositePrimitve);
		try {
			setState(56);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Scale:
				_localctx = new SCALE_CONTRACTContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				scale();
				}
				break;
			case Give:
				_localctx = new GIVE_CONTRACTContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(49);
				give();
				}
				break;
			case Truncate:
				_localctx = new TRUNCATE_CONTRACTContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(50);
				truncate();
				}
				break;
			case Then:
				_localctx = new THEN_CONTRACTContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(51);
				then();
				}
				break;
			case Get:
				_localctx = new GET_CONTRACTContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(52);
				get();
				}
				break;
			case Anytime:
				_localctx = new ANYTIME_CONTRACTContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(53);
				anytime();
				}
				break;
			case And:
				_localctx = new AND_CONTRACTContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(54);
				and();
				}
				break;
			case Or:
				_localctx = new OR_CONTRACTContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(55);
				or();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ScaleContext extends ParserRuleContext {
		public TerminalNode Scale() { return getToken(hcclParser.Scale, 0); }
		public TerminalNode ObsDouble() { return getToken(hcclParser.ObsDouble, 0); }
		public ComplexContractContext complexContract() {
			return getRuleContext(ComplexContractContext.class,0);
		}
		public ScaleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scale; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterScale(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitScale(this);
		}
	}

	public final ScaleContext scale() throws RecognitionException {
		ScaleContext _localctx = new ScaleContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_scale);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			match(Scale);
			setState(59);
			match(ObsDouble);
			setState(60);
			match(T__0);
			setState(61);
			complexContract();
			setState(62);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GiveContext extends ParserRuleContext {
		public TerminalNode Give() { return getToken(hcclParser.Give, 0); }
		public ComplexContractContext complexContract() {
			return getRuleContext(ComplexContractContext.class,0);
		}
		public GiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_give; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterGive(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitGive(this);
		}
	}

	public final GiveContext give() throws RecognitionException {
		GiveContext _localctx = new GiveContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_give);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			match(Give);
			setState(65);
			match(T__0);
			setState(66);
			complexContract();
			setState(67);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TruncateContext extends ParserRuleContext {
		public TerminalNode Truncate() { return getToken(hcclParser.Truncate, 0); }
		public TerminalNode Date() { return getToken(hcclParser.Date, 0); }
		public ComplexContractContext complexContract() {
			return getRuleContext(ComplexContractContext.class,0);
		}
		public TruncateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_truncate; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterTruncate(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitTruncate(this);
		}
	}

	public final TruncateContext truncate() throws RecognitionException {
		TruncateContext _localctx = new TruncateContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_truncate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(Truncate);
			setState(70);
			match(Date);
			setState(71);
			match(T__0);
			setState(72);
			complexContract();
			setState(73);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThenContext extends ParserRuleContext {
		public TerminalNode Then() { return getToken(hcclParser.Then, 0); }
		public List<ComplexContractContext> complexContract() {
			return getRuleContexts(ComplexContractContext.class);
		}
		public ComplexContractContext complexContract(int i) {
			return getRuleContext(ComplexContractContext.class,i);
		}
		public ThenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_then; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterThen(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitThen(this);
		}
	}

	public final ThenContext then() throws RecognitionException {
		ThenContext _localctx = new ThenContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_then);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(Then);
			setState(76);
			match(T__0);
			setState(77);
			complexContract();
			setState(78);
			complexContract();
			setState(79);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetContext extends ParserRuleContext {
		public TerminalNode Get() { return getToken(hcclParser.Get, 0); }
		public ComplexContractContext complexContract() {
			return getRuleContext(ComplexContractContext.class,0);
		}
		public GetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_get; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterGet(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitGet(this);
		}
	}

	public final GetContext get() throws RecognitionException {
		GetContext _localctx = new GetContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_get);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(Get);
			setState(82);
			match(T__0);
			setState(83);
			complexContract();
			setState(84);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnytimeContext extends ParserRuleContext {
		public TerminalNode Anytime() { return getToken(hcclParser.Anytime, 0); }
		public ComplexContractContext complexContract() {
			return getRuleContext(ComplexContractContext.class,0);
		}
		public AnytimeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_anytime; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterAnytime(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitAnytime(this);
		}
	}

	public final AnytimeContext anytime() throws RecognitionException {
		AnytimeContext _localctx = new AnytimeContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_anytime);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			match(Anytime);
			setState(87);
			match(T__0);
			setState(88);
			complexContract();
			setState(89);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AndContext extends ParserRuleContext {
		public TerminalNode And() { return getToken(hcclParser.And, 0); }
		public List<ComplexContractContext> complexContract() {
			return getRuleContexts(ComplexContractContext.class);
		}
		public ComplexContractContext complexContract(int i) {
			return getRuleContext(ComplexContractContext.class,i);
		}
		public AndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_and; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterAnd(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitAnd(this);
		}
	}

	public final AndContext and() throws RecognitionException {
		AndContext _localctx = new AndContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_and);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(And);
			setState(92);
			match(T__0);
			setState(93);
			complexContract();
			setState(94);
			complexContract();
			setState(95);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrContext extends ParserRuleContext {
		public TerminalNode Or() { return getToken(hcclParser.Or, 0); }
		public List<ComplexContractContext> complexContract() {
			return getRuleContexts(ComplexContractContext.class);
		}
		public ComplexContractContext complexContract(int i) {
			return getRuleContext(ComplexContractContext.class,i);
		}
		public OrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_or; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).enterOr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof hcclListener ) ((hcclListener)listener).exitOr(this);
		}
	}

	public final OrContext or() throws RecognitionException {
		OrContext _localctx = new OrContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_or);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(Or);
			setState(98);
			match(T__0);
			setState(99);
			complexContract();
			setState(100);
			complexContract();
			setState(101);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\27j\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3\2\3\2\3\2\3\2\5\2$\n\2\3\3\3"+
		"\3\5\3(\n\3\3\4\3\4\5\4,\n\4\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\5\7;\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3"+
		"\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3"+
		"\17\3\17\3\17\2\2\20\2\4\6\b\n\f\16\20\22\24\26\30\32\34\2\2\2e\2#\3\2"+
		"\2\2\4\'\3\2\2\2\6+\3\2\2\2\b-\3\2\2\2\n/\3\2\2\2\f:\3\2\2\2\16<\3\2\2"+
		"\2\20B\3\2\2\2\22G\3\2\2\2\24M\3\2\2\2\26S\3\2\2\2\30X\3\2\2\2\32]\3\2"+
		"\2\2\34c\3\2\2\2\36$\5\4\3\2\37 \5\4\3\2 !\7\5\2\2!\"\5\2\2\2\"$\3\2\2"+
		"\2#\36\3\2\2\2#\37\3\2\2\2$\3\3\2\2\2%(\5\6\4\2&(\5\f\7\2\'%\3\2\2\2\'"+
		"&\3\2\2\2(\5\3\2\2\2),\5\b\5\2*,\5\n\6\2+)\3\2\2\2+*\3\2\2\2,\7\3\2\2"+
		"\2-.\7\b\2\2.\t\3\2\2\2/\60\7\7\2\2\60\61\7\6\2\2\61\13\3\2\2\2\62;\5"+
		"\16\b\2\63;\5\20\t\2\64;\5\22\n\2\65;\5\24\13\2\66;\5\26\f\2\67;\5\30"+
		"\r\28;\5\32\16\29;\5\34\17\2:\62\3\2\2\2:\63\3\2\2\2:\64\3\2\2\2:\65\3"+
		"\2\2\2:\66\3\2\2\2:\67\3\2\2\2:8\3\2\2\2:9\3\2\2\2;\r\3\2\2\2<=\7\t\2"+
		"\2=>\7\23\2\2>?\7\3\2\2?@\5\2\2\2@A\7\4\2\2A\17\3\2\2\2BC\7\n\2\2CD\7"+
		"\3\2\2DE\5\2\2\2EF\7\4\2\2F\21\3\2\2\2GH\7\r\2\2HI\7\21\2\2IJ\7\3\2\2"+
		"JK\5\2\2\2KL\7\4\2\2L\23\3\2\2\2MN\7\16\2\2NO\7\3\2\2OP\5\2\2\2PQ\5\2"+
		"\2\2QR\7\4\2\2R\25\3\2\2\2ST\7\17\2\2TU\7\3\2\2UV\5\2\2\2VW\7\4\2\2W\27"+
		"\3\2\2\2XY\7\20\2\2YZ\7\3\2\2Z[\5\2\2\2[\\\7\4\2\2\\\31\3\2\2\2]^\7\13"+
		"\2\2^_\7\3\2\2_`\5\2\2\2`a\5\2\2\2ab\7\4\2\2b\33\3\2\2\2cd\7\f\2\2de\7"+
		"\3\2\2ef\5\2\2\2fg\5\2\2\2gh\7\4\2\2h\35\3\2\2\2\6#\'+:";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}