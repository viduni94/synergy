// Generated from hccl.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class hcclLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, Operator=3, Currency=4, OneKeyword=5, ZeroKeyword=6, Scale=7, 
		Give=8, And=9, Or=10, Truncate=11, Then=12, Get=13, Anytime=14, Date=15, 
		DateInString=16, ObsDouble=17, ID=18, StringLiteral=19, BACKQUOTE=20, 
		WS=21;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "Operator", "Currency", "OneKeyword", "ZeroKeyword", "Scale", 
		"Give", "And", "Or", "Truncate", "Then", "Get", "Anytime", "Date", "DateInString", 
		"ObsDouble", "ID", "IdentifierStart", "IdentifierPart", "StringLiteral", 
		"DoubleQuotedStringCharacter", "SingleQuotedStringCharacter", "BACKQUOTE", 
		"WS"
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


	public hcclLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "hccl.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\27\u00ce\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5"+
		"\4C\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5N\n\5\3\6\3\6\3\6\3\6\3"+
		"\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n"+
		"\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3"+
		"\r\3\r\3\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\20\3\20\3\21\3\21\3\22\6\22\u008a\n\22\r\22\16\22\u008b\3\22\3\22\7"+
		"\22\u0090\n\22\f\22\16\22\u0093\13\22\5\22\u0095\n\22\3\22\3\22\6\22\u0099"+
		"\n\22\r\22\16\22\u009a\5\22\u009d\n\22\3\23\3\23\7\23\u00a1\n\23\f\23"+
		"\16\23\u00a4\13\23\3\24\3\24\3\25\3\25\3\26\3\26\7\26\u00ac\n\26\f\26"+
		"\16\26\u00af\13\26\3\26\3\26\3\26\7\26\u00b4\n\26\f\26\16\26\u00b7\13"+
		"\26\3\26\5\26\u00ba\n\26\3\27\3\27\3\27\5\27\u00bf\n\27\3\30\3\30\3\30"+
		"\5\30\u00c4\n\30\3\31\3\31\3\32\6\32\u00c9\n\32\r\32\16\32\u00ca\3\32"+
		"\3\32\2\2\33\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16"+
		"\33\17\35\20\37\21!\22#\23%\24\'\2)\2+\25-\2/\2\61\26\63\27\3\2\b\3\2"+
		"\62;\4\2GGgg\4\2C\\c|\6\2\f\f\17\17$$^^\6\2\f\f\17\17))^^\6\2\13\13\r"+
		"\16\"\"\u00a2\u00a2\2\u00d8\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3"+
		"\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2"+
		"\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37"+
		"\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2+\3\2\2\2\2\61\3\2\2\2\2\63"+
		"\3\2\2\2\3\65\3\2\2\2\5\67\3\2\2\2\7B\3\2\2\2\tM\3\2\2\2\13O\3\2\2\2\r"+
		"S\3\2\2\2\17X\3\2\2\2\21^\3\2\2\2\23c\3\2\2\2\25g\3\2\2\2\27j\3\2\2\2"+
		"\31s\3\2\2\2\33x\3\2\2\2\35|\3\2\2\2\37\u0084\3\2\2\2!\u0086\3\2\2\2#"+
		"\u0089\3\2\2\2%\u009e\3\2\2\2\'\u00a5\3\2\2\2)\u00a7\3\2\2\2+\u00b9\3"+
		"\2\2\2-\u00be\3\2\2\2/\u00c3\3\2\2\2\61\u00c5\3\2\2\2\63\u00c8\3\2\2\2"+
		"\65\66\7*\2\2\66\4\3\2\2\2\678\7+\2\28\6\3\2\2\29:\7b\2\2:;\7c\2\2;<\7"+
		"p\2\2<=\7f\2\2=C\7b\2\2>?\7b\2\2?@\7q\2\2@A\7t\2\2AC\7b\2\2B9\3\2\2\2"+
		"B>\3\2\2\2C\b\3\2\2\2DE\7W\2\2EF\7U\2\2FN\7F\2\2GH\7I\2\2HI\7D\2\2IN\7"+
		"R\2\2JK\7G\2\2KL\7V\2\2LN\7J\2\2MD\3\2\2\2MG\3\2\2\2MJ\3\2\2\2N\n\3\2"+
		"\2\2OP\7q\2\2PQ\7p\2\2QR\7g\2\2R\f\3\2\2\2ST\7|\2\2TU\7g\2\2UV\7t\2\2"+
		"VW\7q\2\2W\16\3\2\2\2XY\7u\2\2YZ\7e\2\2Z[\7c\2\2[\\\7n\2\2\\]\7g\2\2]"+
		"\20\3\2\2\2^_\7i\2\2_`\7k\2\2`a\7x\2\2ab\7g\2\2b\22\3\2\2\2cd\7c\2\2d"+
		"e\7p\2\2ef\7f\2\2f\24\3\2\2\2gh\7q\2\2hi\7t\2\2i\26\3\2\2\2jk\7v\2\2k"+
		"l\7t\2\2lm\7w\2\2mn\7p\2\2no\7e\2\2op\7c\2\2pq\7v\2\2qr\7g\2\2r\30\3\2"+
		"\2\2st\7v\2\2tu\7j\2\2uv\7g\2\2vw\7p\2\2w\32\3\2\2\2xy\7i\2\2yz\7g\2\2"+
		"z{\7v\2\2{\34\3\2\2\2|}\7c\2\2}~\7p\2\2~\177\7{\2\2\177\u0080\7v\2\2\u0080"+
		"\u0081\7k\2\2\u0081\u0082\7o\2\2\u0082\u0083\7g\2\2\u0083\36\3\2\2\2\u0084"+
		"\u0085\5!\21\2\u0085 \3\2\2\2\u0086\u0087\5+\26\2\u0087\"\3\2\2\2\u0088"+
		"\u008a\t\2\2\2\u0089\u0088\3\2\2\2\u008a\u008b\3\2\2\2\u008b\u0089\3\2"+
		"\2\2\u008b\u008c\3\2\2\2\u008c\u0094\3\2\2\2\u008d\u0091\7\60\2\2\u008e"+
		"\u0090\t\2\2\2\u008f\u008e\3\2\2\2\u0090\u0093\3\2\2\2\u0091\u008f\3\2"+
		"\2\2\u0091\u0092\3\2\2\2\u0092\u0095\3\2\2\2\u0093\u0091\3\2\2\2\u0094"+
		"\u008d\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u009c\3\2\2\2\u0096\u0098\t\3"+
		"\2\2\u0097\u0099\t\2\2\2\u0098\u0097\3\2\2\2\u0099\u009a\3\2\2\2\u009a"+
		"\u0098\3\2\2\2\u009a\u009b\3\2\2\2\u009b\u009d\3\2\2\2\u009c\u0096\3\2"+
		"\2\2\u009c\u009d\3\2\2\2\u009d$\3\2\2\2\u009e\u00a2\5\'\24\2\u009f\u00a1"+
		"\5)\25\2\u00a0\u009f\3\2\2\2\u00a1\u00a4\3\2\2\2\u00a2\u00a0\3\2\2\2\u00a2"+
		"\u00a3\3\2\2\2\u00a3&\3\2\2\2\u00a4\u00a2\3\2\2\2\u00a5\u00a6\t\4\2\2"+
		"\u00a6(\3\2\2\2\u00a7\u00a8\t\2\2\2\u00a8*\3\2\2\2\u00a9\u00ad\7$\2\2"+
		"\u00aa\u00ac\5-\27\2\u00ab\u00aa\3\2\2\2\u00ac\u00af\3\2\2\2\u00ad\u00ab"+
		"\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00b0\3\2\2\2\u00af\u00ad\3\2\2\2\u00b0"+
		"\u00ba\7$\2\2\u00b1\u00b5\7)\2\2\u00b2\u00b4\5/\30\2\u00b3\u00b2\3\2\2"+
		"\2\u00b4\u00b7\3\2\2\2\u00b5\u00b3\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b8"+
		"\3\2\2\2\u00b7\u00b5\3\2\2\2\u00b8\u00ba\7)\2\2\u00b9\u00a9\3\2\2\2\u00b9"+
		"\u00b1\3\2\2\2\u00ba,\3\2\2\2\u00bb\u00bf\n\5\2\2\u00bc\u00bd\7^\2\2\u00bd"+
		"\u00bf\13\2\2\2\u00be\u00bb\3\2\2\2\u00be\u00bc\3\2\2\2\u00bf.\3\2\2\2"+
		"\u00c0\u00c4\n\6\2\2\u00c1\u00c2\7^\2\2\u00c2\u00c4\13\2\2\2\u00c3\u00c0"+
		"\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c4\60\3\2\2\2\u00c5\u00c6\7b\2\2\u00c6"+
		"\62\3\2\2\2\u00c7\u00c9\t\7\2\2\u00c8\u00c7\3\2\2\2\u00c9\u00ca\3\2\2"+
		"\2\u00ca\u00c8\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc\u00cd"+
		"\b\32\2\2\u00cd\64\3\2\2\2\21\2BM\u008b\u0091\u0094\u009a\u009c\u00a2"+
		"\u00ad\u00b5\u00b9\u00be\u00c3\u00ca\3\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}