// START: Header
grammar hccl;
// END:Header

//Parser Rules
primitive
    : ((contractIdentifier ( ',' contractIdentifier)*)  '=' )? basicContract EOF? #BASIC_CONTRACT
    | ((contractIdentifier ( ',' contractIdentifier)*)  '=' )? compositeContract EOF? #COMP_CONTRACT
    ;

contractIdentifier
    : ID;

basicContract
    : zeroContract #ZERO
    | oneContract currencyType #ONE
    ;

zeroContract
    : ZeroKeyword;

oneContract
    : OneKeyword;

compositeContract
    : scale #SCALE_CONTRACT
    | give #GIVE_CONTRACT
    | and #AND_CONTRACT
    | or #OR_CONTRACT
    | truncate #TRUNCATE_CONTRACT
    | then #THEN_CONTRACT
    | get #GET_CONTRACT
    | anytime #ANYTIME_CONTRACT
    ;
//    | cond
//    | when
//    | until ;

currencyType
    : Currency;

scale
    : Scale ObsDouble '(' primitive ')';

give
    : Give '(' primitive ')';

and
    : And '(' primitive primitive ')';

or
    : Or '(' primitive primitive ')';

truncate
    : Truncate Date '(' primitive ')';

then
    : Then '(' primitive primitive ')';

get
    : Get '(' primitive ')';

anytime
    : Anytime '(' primitive ')';

//Lexer Rules

Currency
    : 'USD'
    | 'GBP'
    | 'ETH';

OneKeyword
    : 'one';

ZeroKeyword
    : 'zero';

//Keywords
Scale
    : 'scale';

Give
    : 'give';

And
    : 'and';

Or
    : 'or';

Truncate
    : 'truncate';

Then
    : 'then';

Get
    : 'get';

Anytime
    : 'anytime';

Date
    : DateInString;

DateInString
  : StringLiteral;

ObsDouble //Decimal Number
  : [0-9]+ ( '.' [0-9]* )? ( [eE] [0-9]+ )?;

//Contract variables
ID
  : IdentifierStart IdentifierPart* ;

fragment
IdentifierStart
  : [a-zA-Z] ;

fragment
IdentifierPart
  : [0-9] ;

StringLiteral
  : '"' DoubleQuotedStringCharacter* '"'
  | '\'' SingleQuotedStringCharacter* '\'';

fragment
DoubleQuotedStringCharacter
  : ~["\r\n\\] | ('\\' .);
fragment
SingleQuotedStringCharacter
  : ~['\r\n\\] | ('\\' .);

BACKQUOTE
    : '`';

WS
    : (' ' | '\t' | '\r' | '\n' ) {skip();} ;