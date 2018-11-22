// START: Header
grammar hccl;
// END:Header

//Parser Rules
complexContract
    : basicContract
    | basicContract Operator complexContract;

basicContract
    : basicPrimitive
    | compositePrimitve;

basicPrimitive
    : zeroContract #ZERO
    | oneContract Currency #ONE
    ;

zeroContract
    : ZeroKeyword;

oneContract
    : OneKeyword;

compositePrimitve
    : scale #SCALE_CONTRACT
    | give #GIVE_CONTRACT
    | truncate #TRUNCATE_CONTRACT
    | then #THEN_CONTRACT
    | get #GET_CONTRACT
    | anytime #ANYTIME_CONTRACT
    ;
//    | cond
//    | when
//    | until ;

scale
    : Scale ObsDouble '(' complexContract ')';

give
    : Give '(' complexContract ')';

truncate
    : Truncate Date '(' complexContract ')';

then
    : Then '(' complexContract complexContract ')';

get
    : Get '(' complexContract ')';

anytime
    : Anytime '(' complexContract ')';

//Lexer Rules
Operator
    : '`and`'
    | '`or`';

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
    : [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);