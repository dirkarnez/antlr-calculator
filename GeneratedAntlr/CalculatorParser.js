// Generated from Calculator.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CalculatorVisitor = require('./CalculatorVisitor').CalculatorVisitor;

var grammarFileName = "Calculator.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00035z\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "V\n\u0003\u0003\u0003\u0005\u0003Y\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003s\n\u0003\f\u0003",
    "\u000e\u0003v\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0002",
    "\u0003\u0004\u0005\u0002\u0004\u0006\u0002\u0007\u0003\u0002\u0006\u0007",
    "\u0004\u0002\b\b\u000f\u000f\u0003\u0002\t\n\u0003\u0002\u0011\u0012",
    "\u0003\u0002\u0013\u0014\u009e\u0002\b\u0003\u0002\u0002\u0002\u0004",
    "X\u0003\u0002\u0002\u0002\u0006w\u0003\u0002\u0002\u0002\b\t\u0005\u0004",
    "\u0003\u0002\t\n\u0005\u0006\u0004\u0002\n\u0003\u0003\u0002\u0002\u0002",
    "\u000b\f\b\u0003\u0001\u0002\f\r\u0007\u001b\u0002\u0002\rY\u0005\u0004",
    "\u0003*\u000e\u000f\u0007\u001c\u0002\u0002\u000fY\u0005\u0004\u0003",
    ")\u0010\u0011\u0007\u001d\u0002\u0002\u0011Y\u0005\u0004\u0003(\u0012",
    "\u0013\u0007\u001f\u0002\u0002\u0013Y\u0005\u0004\u0003&\u0014\u0015",
    "\u0007 \u0002\u0002\u0015Y\u0005\u0004\u0003%\u0016\u0017\u0007!\u0002",
    "\u0002\u0017Y\u0005\u0004\u0003$\u0018\u0019\u0007\"\u0002\u0002\u0019",
    "Y\u0005\u0004\u0003#\u001a\u001b\u0007#\u0002\u0002\u001bY\u0005\u0004",
    "\u0003\"\u001c\u001d\u0007$\u0002\u0002\u001dY\u0005\u0004\u0003!\u001e",
    "\u001f\u0007%\u0002\u0002\u001fY\u0005\u0004\u0003  !\u0007&\u0002\u0002",
    "!Y\u0005\u0004\u0003\u001f\"#\u0007\'\u0002\u0002#Y\u0005\u0004\u0003",
    "\u001e$%\u0007(\u0002\u0002%Y\u0005\u0004\u0003\u001d&\'\u0007)\u0002",
    "\u0002\'Y\u0005\u0004\u0003\u001c()\u0007*\u0002\u0002)Y\u0005\u0004",
    "\u0003\u001b*+\u0007,\u0002\u0002+Y\u0005\u0004\u0003\u0019,-\u0007",
    "-\u0002\u0002-Y\u0005\u0004\u0003\u0018./\u0007.\u0002\u0002/Y\u0005",
    "\u0004\u0003\u001701\u0007/\u0002\u00021Y\u0005\u0004\u0003\u001623",
    "\u00070\u0002\u00023Y\u0005\u0004\u0003\u001545\u00071\u0002\u00025",
    "Y\u0005\u0004\u0003\u001467\u00072\u0002\u00027Y\u0005\u0004\u0003\u0013",
    "89\u0007\u0019\u0002\u00029Y\u0005\u0004\u0003\u0012:;\u0007\u001a\u0002",
    "\u0002;Y\u0005\u0004\u0003\u0011<=\u0007\u0014\u0002\u0002=Y\u0005\u0004",
    "\u0003\u0004>?\u0007\u0013\u0002\u0002?Y\u0005\u0004\u0003\u0003@A\u0007",
    "\u001e\u0002\u0002AB\u0007\u0003\u0002\u0002BC\u0005\u0004\u0003\u0002",
    "CD\u0007\u0004\u0002\u0002DE\u0005\u0004\u0003\u0002EF\u0007\u0005\u0002",
    "\u0002FY\u0003\u0002\u0002\u0002GH\u0007+\u0002\u0002HI\u0007\u0003",
    "\u0002\u0002IJ\u0005\u0004\u0003\u0002JK\u0007\u0004\u0002\u0002KL\u0005",
    "\u0004\u0003\u0002LM\u0007\u0005\u0002\u0002MY\u0003\u0002\u0002\u0002",
    "NY\u0007\f\u0002\u0002OP\u0007\u0003\u0002\u0002PQ\u0005\u0004\u0003",
    "\u0002QR\u0007\u0005\u0002\u0002RY\u0003\u0002\u0002\u0002SU\u0007\u0015",
    "\u0002\u0002TV\u0007\u000b\u0002\u0002UT\u0003\u0002\u0002\u0002UV\u0003",
    "\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002WY\u0007\u0018\u0002\u0002",
    "X\u000b\u0003\u0002\u0002\u0002X\u000e\u0003\u0002\u0002\u0002X\u0010",
    "\u0003\u0002\u0002\u0002X\u0012\u0003\u0002\u0002\u0002X\u0014\u0003",
    "\u0002\u0002\u0002X\u0016\u0003\u0002\u0002\u0002X\u0018\u0003\u0002",
    "\u0002\u0002X\u001a\u0003\u0002\u0002\u0002X\u001c\u0003\u0002\u0002",
    "\u0002X\u001e\u0003\u0002\u0002\u0002X \u0003\u0002\u0002\u0002X\"\u0003",
    "\u0002\u0002\u0002X$\u0003\u0002\u0002\u0002X&\u0003\u0002\u0002\u0002",
    "X(\u0003\u0002\u0002\u0002X*\u0003\u0002\u0002\u0002X,\u0003\u0002\u0002",
    "\u0002X.\u0003\u0002\u0002\u0002X0\u0003\u0002\u0002\u0002X2\u0003\u0002",
    "\u0002\u0002X4\u0003\u0002\u0002\u0002X6\u0003\u0002\u0002\u0002X8\u0003",
    "\u0002\u0002\u0002X:\u0003\u0002\u0002\u0002X<\u0003\u0002\u0002\u0002",
    "X>\u0003\u0002\u0002\u0002X@\u0003\u0002\u0002\u0002XG\u0003\u0002\u0002",
    "\u0002XN\u0003\u0002\u0002\u0002XO\u0003\u0002\u0002\u0002XS\u0003\u0002",
    "\u0002\u0002XW\u0003\u0002\u0002\u0002Yt\u0003\u0002\u0002\u0002Z[\f",
    "\u0010\u0002\u0002[\\\t\u0002\u0002\u0002\\s\u0005\u0004\u0003\u0011",
    "]^\f\u000f\u0002\u0002^_\t\u0003\u0002\u0002_s\u0005\u0004\u0003\u0010",
    "`a\f\u000e\u0002\u0002ab\u0007\u0010\u0002\u0002bs\u0005\u0004\u0003",
    "\u000fcd\f\r\u0002\u0002de\t\u0004\u0002\u0002es\u0005\u0004\u0003\u000e",
    "fg\f\f\u0002\u0002gh\t\u0005\u0002\u0002hs\u0005\u0004\u0003\rij\f\u000b",
    "\u0002\u0002jk\t\u0006\u0002\u0002ks\u0005\u0004\u0003\flm\f\u0007\u0002",
    "\u0002mn\u0007\u0016\u0002\u0002ns\u0005\u0004\u0003\bop\f\u0006\u0002",
    "\u0002pq\u0007\u0017\u0002\u0002qs\u0005\u0004\u0003\u0007rZ\u0003\u0002",
    "\u0002\u0002r]\u0003\u0002\u0002\u0002r`\u0003\u0002\u0002\u0002rc\u0003",
    "\u0002\u0002\u0002rf\u0003\u0002\u0002\u0002ri\u0003\u0002\u0002\u0002",
    "rl\u0003\u0002\u0002\u0002ro\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002",
    "\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002u\u0005\u0003",
    "\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wx\u0007\u0002\u0002\u0003",
    "x\u0007\u0003\u0002\u0002\u0002\u0006UXrt"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "';'", "')'", "'^'", "'**'", "'%'", "'~'", 
                     "'//'", "'()'", null, null, null, null, null, "'*'", 
                     "'/'", "'+'", "'-'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "NUMBER", "FLOAT", "DIGIT", "MOD", "WHOLE", 
                      "MUL", "DIV", "ADD", "SUB", "PI", "EXPONENT", "NEGEXPONENT", 
                      "EULER", "SQRT", "SQR", "FLOOR", "CEIL", "ABS", "ROUNDK", 
                      "ROUND", "TRUNC", "SIN", "COS", "TAN", "COT", "SINH", 
                      "COSH", "TANH", "ARCSIN", "ARCCOS", "ARCTAN", "ARCTAN2", 
                      "ARCCOT", "EXP", "LN", "EEX", "LOG", "RAD", "DEG", 
                      "WS", "COM", "INVALID" ];

var ruleNames =  [ "calculator", "expression", "compileUnit" ];

function CalculatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CalculatorParser.prototype = Object.create(antlr4.Parser.prototype);
CalculatorParser.prototype.constructor = CalculatorParser;

Object.defineProperty(CalculatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.NUMBER = 10;
CalculatorParser.FLOAT = 11;
CalculatorParser.DIGIT = 12;
CalculatorParser.MOD = 13;
CalculatorParser.WHOLE = 14;
CalculatorParser.MUL = 15;
CalculatorParser.DIV = 16;
CalculatorParser.ADD = 17;
CalculatorParser.SUB = 18;
CalculatorParser.PI = 19;
CalculatorParser.EXPONENT = 20;
CalculatorParser.NEGEXPONENT = 21;
CalculatorParser.EULER = 22;
CalculatorParser.SQRT = 23;
CalculatorParser.SQR = 24;
CalculatorParser.FLOOR = 25;
CalculatorParser.CEIL = 26;
CalculatorParser.ABS = 27;
CalculatorParser.ROUNDK = 28;
CalculatorParser.ROUND = 29;
CalculatorParser.TRUNC = 30;
CalculatorParser.SIN = 31;
CalculatorParser.COS = 32;
CalculatorParser.TAN = 33;
CalculatorParser.COT = 34;
CalculatorParser.SINH = 35;
CalculatorParser.COSH = 36;
CalculatorParser.TANH = 37;
CalculatorParser.ARCSIN = 38;
CalculatorParser.ARCCOS = 39;
CalculatorParser.ARCTAN = 40;
CalculatorParser.ARCTAN2 = 41;
CalculatorParser.ARCCOT = 42;
CalculatorParser.EXP = 43;
CalculatorParser.LN = 44;
CalculatorParser.EEX = 45;
CalculatorParser.LOG = 46;
CalculatorParser.RAD = 47;
CalculatorParser.DEG = 48;
CalculatorParser.WS = 49;
CalculatorParser.COM = 50;
CalculatorParser.INVALID = 51;

CalculatorParser.RULE_calculator = 0;
CalculatorParser.RULE_expression = 1;
CalculatorParser.RULE_compileUnit = 2;

function CalculatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_calculator;
    return this;
}

CalculatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CalculatorContext.prototype.constructor = CalculatorContext;

CalculatorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CalculatorContext.prototype.compileUnit = function() {
    return this.getTypedRuleContext(CompileUnitContext,0);
};

CalculatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCalculator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.CalculatorContext = CalculatorContext;

CalculatorParser.prototype.calculator = function() {

    var localctx = new CalculatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CalculatorParser.RULE_calculator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.expression(0);
        this.state = 7;
        this.compileUnit();
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

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function TanContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TanContext.prototype = Object.create(ExpressionContext.prototype);
TanContext.prototype.constructor = TanContext;

CalculatorParser.TanContext = TanContext;

TanContext.prototype.TAN = function() {
    return this.getToken(CalculatorParser.TAN, 0);
};

TanContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
TanContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitTan(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CoshContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CoshContext.prototype = Object.create(ExpressionContext.prototype);
CoshContext.prototype.constructor = CoshContext;

CalculatorParser.CoshContext = CoshContext;

CoshContext.prototype.COSH = function() {
    return this.getToken(CalculatorParser.COSH, 0);
};

CoshContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
CoshContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCosh(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SqRootContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SqRootContext.prototype = Object.create(ExpressionContext.prototype);
SqRootContext.prototype.constructor = SqRootContext;

CalculatorParser.SqRootContext = SqRootContext;

SqRootContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
SqRootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSqRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegExponentContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegExponentContext.prototype = Object.create(ExpressionContext.prototype);
NegExponentContext.prototype.constructor = NegExponentContext;

CalculatorParser.NegExponentContext = NegExponentContext;

NegExponentContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

NegExponentContext.prototype.NEGEXPONENT = function() {
    return this.getToken(CalculatorParser.NEGEXPONENT, 0);
};
NegExponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitNegExponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExponentContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExponentContext.prototype = Object.create(ExpressionContext.prototype);
ExponentContext.prototype.constructor = ExponentContext;

CalculatorParser.ExponentContext = ExponentContext;

ExponentContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExponentContext.prototype.EXPONENT = function() {
    return this.getToken(CalculatorParser.EXPONENT, 0);
};
ExponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitExponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function Arctan2Context(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

Arctan2Context.prototype = Object.create(ExpressionContext.prototype);
Arctan2Context.prototype.constructor = Arctan2Context;

CalculatorParser.Arctan2Context = Arctan2Context;

Arctan2Context.prototype.ARCTAN2 = function() {
    return this.getToken(CalculatorParser.ARCTAN2, 0);
};

Arctan2Context.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
Arctan2Context.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitArctan2(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulDivContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivContext.prototype = Object.create(ExpressionContext.prototype);
MulDivContext.prototype.constructor = MulDivContext;

CalculatorParser.MulDivContext = MulDivContext;

MulDivContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MulDivContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitMulDiv(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArcsinContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArcsinContext.prototype = Object.create(ExpressionContext.prototype);
ArcsinContext.prototype.constructor = ArcsinContext;

CalculatorParser.ArcsinContext = ArcsinContext;

ArcsinContext.prototype.ARCSIN = function() {
    return this.getToken(CalculatorParser.ARCSIN, 0);
};

ArcsinContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ArcsinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitArcsin(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryPlusContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryPlusContext.prototype = Object.create(ExpressionContext.prototype);
UnaryPlusContext.prototype.constructor = UnaryPlusContext;

CalculatorParser.UnaryPlusContext = UnaryPlusContext;

UnaryPlusContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
UnaryPlusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitUnaryPlus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArccotContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArccotContext.prototype = Object.create(ExpressionContext.prototype);
ArccotContext.prototype.constructor = ArccotContext;

CalculatorParser.ArccotContext = ArccotContext;

ArccotContext.prototype.ARCCOT = function() {
    return this.getToken(CalculatorParser.ARCCOT, 0);
};

ArccotContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ArccotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitArccot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArccosContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArccosContext.prototype = Object.create(ExpressionContext.prototype);
ArccosContext.prototype.constructor = ArccosContext;

CalculatorParser.ArccosContext = ArccosContext;

ArccosContext.prototype.ARCCOS = function() {
    return this.getToken(CalculatorParser.ARCCOS, 0);
};

ArccosContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ArccosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitArccos(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EulerContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EulerContext.prototype = Object.create(ExpressionContext.prototype);
EulerContext.prototype.constructor = EulerContext;

CalculatorParser.EulerContext = EulerContext;

EulerContext.prototype.EULER = function() {
    return this.getToken(CalculatorParser.EULER, 0);
};
EulerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitEuler(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArctanContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArctanContext.prototype = Object.create(ExpressionContext.prototype);
ArctanContext.prototype.constructor = ArctanContext;

CalculatorParser.ArctanContext = ArctanContext;

ArctanContext.prototype.ARCTAN = function() {
    return this.getToken(CalculatorParser.ARCTAN, 0);
};

ArctanContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ArctanContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitArctan(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenthesisContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesisContext.prototype = Object.create(ExpressionContext.prototype);
ParenthesisContext.prototype.constructor = ParenthesisContext;

CalculatorParser.ParenthesisContext = ParenthesisContext;

ParenthesisContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenthesisContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitParenthesis(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AbsContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AbsContext.prototype = Object.create(ExpressionContext.prototype);
AbsContext.prototype.constructor = AbsContext;

CalculatorParser.AbsContext = AbsContext;

AbsContext.prototype.ABS = function() {
    return this.getToken(CalculatorParser.ABS, 0);
};

AbsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
AbsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitAbs(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumberContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberContext.prototype = Object.create(ExpressionContext.prototype);
NumberContext.prototype.constructor = NumberContext;

CalculatorParser.NumberContext = NumberContext;

NumberContext.prototype.NUMBER = function() {
    return this.getToken(CalculatorParser.NUMBER, 0);
};
NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SinhContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SinhContext.prototype = Object.create(ExpressionContext.prototype);
SinhContext.prototype.constructor = SinhContext;

CalculatorParser.SinhContext = SinhContext;

SinhContext.prototype.SINH = function() {
    return this.getToken(CalculatorParser.SINH, 0);
};

SinhContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SinhContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSinh(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RoundContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RoundContext.prototype = Object.create(ExpressionContext.prototype);
RoundContext.prototype.constructor = RoundContext;

CalculatorParser.RoundContext = RoundContext;

RoundContext.prototype.ROUND = function() {
    return this.getToken(CalculatorParser.ROUND, 0);
};

RoundContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
RoundContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitRound(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TruncContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TruncContext.prototype = Object.create(ExpressionContext.prototype);
TruncContext.prototype.constructor = TruncContext;

CalculatorParser.TruncContext = TruncContext;

TruncContext.prototype.TRUNC = function() {
    return this.getToken(CalculatorParser.TRUNC, 0);
};

TruncContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
TruncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitTrunc(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PiContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PiContext.prototype = Object.create(ExpressionContext.prototype);
PiContext.prototype.constructor = PiContext;

CalculatorParser.PiContext = PiContext;

PiContext.prototype.PI = function() {
    return this.getToken(CalculatorParser.PI, 0);
};
PiContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitPi(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TanhContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TanhContext.prototype = Object.create(ExpressionContext.prototype);
TanhContext.prototype.constructor = TanhContext;

CalculatorParser.TanhContext = TanhContext;

TanhContext.prototype.TANH = function() {
    return this.getToken(CalculatorParser.TANH, 0);
};

TanhContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
TanhContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitTanh(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FloorContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FloorContext.prototype = Object.create(ExpressionContext.prototype);
FloorContext.prototype.constructor = FloorContext;

CalculatorParser.FloorContext = FloorContext;

FloorContext.prototype.FLOOR = function() {
    return this.getToken(CalculatorParser.FLOOR, 0);
};

FloorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
FloorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitFloor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LnContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LnContext.prototype = Object.create(ExpressionContext.prototype);
LnContext.prototype.constructor = LnContext;

CalculatorParser.LnContext = LnContext;

LnContext.prototype.LN = function() {
    return this.getToken(CalculatorParser.LN, 0);
};

LnContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
LnContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitLn(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ModContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ModContext.prototype = Object.create(ExpressionContext.prototype);
ModContext.prototype.constructor = ModContext;

CalculatorParser.ModContext = ModContext;

ModContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ModContext.prototype.MOD = function() {
    return this.getToken(CalculatorParser.MOD, 0);
};
ModContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitMod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogContext.prototype = Object.create(ExpressionContext.prototype);
LogContext.prototype.constructor = LogContext;

CalculatorParser.LogContext = LogContext;

LogContext.prototype.LOG = function() {
    return this.getToken(CalculatorParser.LOG, 0);
};

LogContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
LogContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitLog(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddSubContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubContext.prototype = Object.create(ExpressionContext.prototype);
AddSubContext.prototype.constructor = AddSubContext;

CalculatorParser.AddSubContext = AddSubContext;

AddSubContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AddSubContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitAddSub(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CosContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CosContext.prototype = Object.create(ExpressionContext.prototype);
CosContext.prototype.constructor = CosContext;

CalculatorParser.CosContext = CosContext;

CosContext.prototype.COS = function() {
    return this.getToken(CalculatorParser.COS, 0);
};

CosContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
CosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCos(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DegContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DegContext.prototype = Object.create(ExpressionContext.prototype);
DegContext.prototype.constructor = DegContext;

CalculatorParser.DegContext = DegContext;

DegContext.prototype.DEG = function() {
    return this.getToken(CalculatorParser.DEG, 0);
};

DegContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
DegContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitDeg(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SqrtContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SqrtContext.prototype = Object.create(ExpressionContext.prototype);
SqrtContext.prototype.constructor = SqrtContext;

CalculatorParser.SqrtContext = SqrtContext;

SqrtContext.prototype.SQRT = function() {
    return this.getToken(CalculatorParser.SQRT, 0);
};

SqrtContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SqrtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSqrt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CotContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CotContext.prototype = Object.create(ExpressionContext.prototype);
CotContext.prototype.constructor = CotContext;

CalculatorParser.CotContext = CotContext;

CotContext.prototype.COT = function() {
    return this.getToken(CalculatorParser.COT, 0);
};

CotContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
CotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WholeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WholeContext.prototype = Object.create(ExpressionContext.prototype);
WholeContext.prototype.constructor = WholeContext;

CalculatorParser.WholeContext = WholeContext;

WholeContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

WholeContext.prototype.WHOLE = function() {
    return this.getToken(CalculatorParser.WHOLE, 0);
};
WholeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitWhole(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnaryContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryContext.prototype = Object.create(ExpressionContext.prototype);
UnaryContext.prototype.constructor = UnaryContext;

CalculatorParser.UnaryContext = UnaryContext;

UnaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
UnaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitUnary(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RadContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RadContext.prototype = Object.create(ExpressionContext.prototype);
RadContext.prototype.constructor = RadContext;

CalculatorParser.RadContext = RadContext;

RadContext.prototype.RAD = function() {
    return this.getToken(CalculatorParser.RAD, 0);
};

RadContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
RadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitRad(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SqrContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SqrContext.prototype = Object.create(ExpressionContext.prototype);
SqrContext.prototype.constructor = SqrContext;

CalculatorParser.SqrContext = SqrContext;

SqrContext.prototype.SQR = function() {
    return this.getToken(CalculatorParser.SQR, 0);
};

SqrContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SqrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSqr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SinContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SinContext.prototype = Object.create(ExpressionContext.prototype);
SinContext.prototype.constructor = SinContext;

CalculatorParser.SinContext = SinContext;

SinContext.prototype.SIN = function() {
    return this.getToken(CalculatorParser.SIN, 0);
};

SinContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
SinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitSin(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EexContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EexContext.prototype = Object.create(ExpressionContext.prototype);
EexContext.prototype.constructor = EexContext;

CalculatorParser.EexContext = EexContext;

EexContext.prototype.EEX = function() {
    return this.getToken(CalculatorParser.EEX, 0);
};

EexContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
EexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitEex(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PowContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowContext.prototype = Object.create(ExpressionContext.prototype);
PowContext.prototype.constructor = PowContext;

CalculatorParser.PowContext = PowContext;

PowContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
PowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitPow(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CeilContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CeilContext.prototype = Object.create(ExpressionContext.prototype);
CeilContext.prototype.constructor = CeilContext;

CalculatorParser.CeilContext = CeilContext;

CeilContext.prototype.CEIL = function() {
    return this.getToken(CalculatorParser.CEIL, 0);
};

CeilContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
CeilContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCeil(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpContext.prototype = Object.create(ExpressionContext.prototype);
ExpContext.prototype.constructor = ExpContext;

CalculatorParser.ExpContext = ExpContext;

ExpContext.prototype.EXP = function() {
    return this.getToken(CalculatorParser.EXP, 0);
};

ExpContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ExpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitExp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RoundkContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RoundkContext.prototype = Object.create(ExpressionContext.prototype);
RoundkContext.prototype.constructor = RoundkContext;

CalculatorParser.RoundkContext = RoundkContext;

RoundkContext.prototype.ROUNDK = function() {
    return this.getToken(CalculatorParser.ROUNDK, 0);
};

RoundkContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
RoundkContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitRoundk(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CalculatorParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, CalculatorParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        switch(this._input.LA(1)) {
        case CalculatorParser.FLOOR:
            localctx = new FloorContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 10;
            this.match(CalculatorParser.FLOOR);
            this.state = 11;
            this.expression(40);
            break;
        case CalculatorParser.CEIL:
            localctx = new CeilContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 12;
            this.match(CalculatorParser.CEIL);
            this.state = 13;
            this.expression(39);
            break;
        case CalculatorParser.ABS:
            localctx = new AbsContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 14;
            this.match(CalculatorParser.ABS);
            this.state = 15;
            this.expression(38);
            break;
        case CalculatorParser.ROUND:
            localctx = new RoundContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 16;
            this.match(CalculatorParser.ROUND);
            this.state = 17;
            this.expression(36);
            break;
        case CalculatorParser.TRUNC:
            localctx = new TruncContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 18;
            this.match(CalculatorParser.TRUNC);
            this.state = 19;
            this.expression(35);
            break;
        case CalculatorParser.SIN:
            localctx = new SinContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 20;
            this.match(CalculatorParser.SIN);
            this.state = 21;
            this.expression(34);
            break;
        case CalculatorParser.COS:
            localctx = new CosContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 22;
            this.match(CalculatorParser.COS);
            this.state = 23;
            this.expression(33);
            break;
        case CalculatorParser.TAN:
            localctx = new TanContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 24;
            this.match(CalculatorParser.TAN);
            this.state = 25;
            this.expression(32);
            break;
        case CalculatorParser.COT:
            localctx = new CotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 26;
            this.match(CalculatorParser.COT);
            this.state = 27;
            this.expression(31);
            break;
        case CalculatorParser.SINH:
            localctx = new SinhContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 28;
            this.match(CalculatorParser.SINH);
            this.state = 29;
            this.expression(30);
            break;
        case CalculatorParser.COSH:
            localctx = new CoshContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 30;
            this.match(CalculatorParser.COSH);
            this.state = 31;
            this.expression(29);
            break;
        case CalculatorParser.TANH:
            localctx = new TanhContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 32;
            this.match(CalculatorParser.TANH);
            this.state = 33;
            this.expression(28);
            break;
        case CalculatorParser.ARCSIN:
            localctx = new ArcsinContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 34;
            this.match(CalculatorParser.ARCSIN);
            this.state = 35;
            this.expression(27);
            break;
        case CalculatorParser.ARCCOS:
            localctx = new ArccosContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 36;
            this.match(CalculatorParser.ARCCOS);
            this.state = 37;
            this.expression(26);
            break;
        case CalculatorParser.ARCTAN:
            localctx = new ArctanContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 38;
            this.match(CalculatorParser.ARCTAN);
            this.state = 39;
            this.expression(25);
            break;
        case CalculatorParser.ARCCOT:
            localctx = new ArccotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 40;
            this.match(CalculatorParser.ARCCOT);
            this.state = 41;
            this.expression(23);
            break;
        case CalculatorParser.EXP:
            localctx = new ExpContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 42;
            this.match(CalculatorParser.EXP);
            this.state = 43;
            this.expression(22);
            break;
        case CalculatorParser.LN:
            localctx = new LnContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 44;
            this.match(CalculatorParser.LN);
            this.state = 45;
            this.expression(21);
            break;
        case CalculatorParser.EEX:
            localctx = new EexContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 46;
            this.match(CalculatorParser.EEX);
            this.state = 47;
            this.expression(20);
            break;
        case CalculatorParser.LOG:
            localctx = new LogContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 48;
            this.match(CalculatorParser.LOG);
            this.state = 49;
            this.expression(19);
            break;
        case CalculatorParser.RAD:
            localctx = new RadContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 50;
            this.match(CalculatorParser.RAD);
            this.state = 51;
            this.expression(18);
            break;
        case CalculatorParser.DEG:
            localctx = new DegContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 52;
            this.match(CalculatorParser.DEG);
            this.state = 53;
            this.expression(17);
            break;
        case CalculatorParser.SQRT:
            localctx = new SqrtContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 54;
            this.match(CalculatorParser.SQRT);
            this.state = 55;
            this.expression(16);
            break;
        case CalculatorParser.SQR:
            localctx = new SqrContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 56;
            this.match(CalculatorParser.SQR);
            this.state = 57;
            this.expression(15);
            break;
        case CalculatorParser.SUB:
            localctx = new UnaryContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 58;
            this.match(CalculatorParser.SUB);
            this.state = 59;
            this.expression(2);
            break;
        case CalculatorParser.ADD:
            localctx = new UnaryPlusContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 60;
            this.match(CalculatorParser.ADD);
            this.state = 61;
            this.expression(1);
            break;
        case CalculatorParser.ROUNDK:
            localctx = new RoundkContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 62;
            this.match(CalculatorParser.ROUNDK);
            this.state = 63;
            this.match(CalculatorParser.T__0);
            this.state = 64;
            this.expression(0);
            this.state = 65;
            this.match(CalculatorParser.T__1);
            this.state = 66;
            this.expression(0);
            this.state = 67;
            this.match(CalculatorParser.T__2);
            break;
        case CalculatorParser.ARCTAN2:
            localctx = new Arctan2Context(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 69;
            this.match(CalculatorParser.ARCTAN2);
            this.state = 70;
            this.match(CalculatorParser.T__0);
            this.state = 71;
            this.expression(0);
            this.state = 72;
            this.match(CalculatorParser.T__1);
            this.state = 73;
            this.expression(0);
            this.state = 74;
            this.match(CalculatorParser.T__2);
            break;
        case CalculatorParser.NUMBER:
            localctx = new NumberContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 76;
            this.match(CalculatorParser.NUMBER);
            break;
        case CalculatorParser.T__0:
            localctx = new ParenthesisContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 77;
            this.match(CalculatorParser.T__0);
            this.state = 78;
            this.expression(0);
            this.state = 79;
            this.match(CalculatorParser.T__2);
            break;
        case CalculatorParser.PI:
            localctx = new PiContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 81;
            this.match(CalculatorParser.PI);
            this.state = 83;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            if(la_===1) {
                this.state = 82;
                this.match(CalculatorParser.T__8);

            }
            break;
        case CalculatorParser.EULER:
            localctx = new EulerContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 85;
            this.match(CalculatorParser.EULER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 114;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 112;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 88;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 89;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.T__3 || _la===CalculatorParser.T__4)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 90;
                    this.expression(15);
                    break;

                case 2:
                    localctx = new ModContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 91;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 92;
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.T__5 || _la===CalculatorParser.MOD)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 93;
                    this.expression(14);
                    break;

                case 3:
                    localctx = new WholeContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 94;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 95;
                    this.match(CalculatorParser.WHOLE);
                    this.state = 96;
                    this.expression(13);
                    break;

                case 4:
                    localctx = new SqRootContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 97;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 98;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.T__6 || _la===CalculatorParser.T__7)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 99;
                    this.expression(12);
                    break;

                case 5:
                    localctx = new MulDivContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 100;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 101;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.MUL || _la===CalculatorParser.DIV)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 102;
                    this.expression(11);
                    break;

                case 6:
                    localctx = new AddSubContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 103;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 104;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===CalculatorParser.ADD || _la===CalculatorParser.SUB)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 105;
                    this.expression(10);
                    break;

                case 7:
                    localctx = new ExponentContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 106;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 107;
                    this.match(CalculatorParser.EXPONENT);
                    this.state = 108;
                    this.expression(6);
                    break;

                case 8:
                    localctx = new NegExponentContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
                    this.state = 109;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 110;
                    this.match(CalculatorParser.NEGEXPONENT);
                    this.state = 111;
                    this.expression(5);
                    break;

                } 
            }
            this.state = 116;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function CompileUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CalculatorParser.RULE_compileUnit;
    return this;
}

CompileUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompileUnitContext.prototype.constructor = CompileUnitContext;

CompileUnitContext.prototype.EOF = function() {
    return this.getToken(CalculatorParser.EOF, 0);
};

CompileUnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CalculatorVisitor ) {
        return visitor.visitCompileUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CalculatorParser.CompileUnitContext = CompileUnitContext;

CalculatorParser.prototype.compileUnit = function() {

    var localctx = new CompileUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CalculatorParser.RULE_compileUnit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(CalculatorParser.EOF);
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


CalculatorParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CalculatorParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
		case 4:
			return this.precpred(this._ctx, 10);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 5);
		case 7:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CalculatorParser = CalculatorParser;
