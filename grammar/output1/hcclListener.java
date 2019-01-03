// Generated from hccl.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link hcclParser}.
 */
public interface hcclListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link hcclParser#complexContract}.
	 * @param ctx the parse tree
	 */
	void enterComplexContract(hcclParser.ComplexContractContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#complexContract}.
	 * @param ctx the parse tree
	 */
	void exitComplexContract(hcclParser.ComplexContractContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#basicContract}.
	 * @param ctx the parse tree
	 */
	void enterBasicContract(hcclParser.BasicContractContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#basicContract}.
	 * @param ctx the parse tree
	 */
	void exitBasicContract(hcclParser.BasicContractContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ZERO}
	 * labeled alternative in {@link hcclParser#basicPrimitive}.
	 * @param ctx the parse tree
	 */
	void enterZERO(hcclParser.ZEROContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ZERO}
	 * labeled alternative in {@link hcclParser#basicPrimitive}.
	 * @param ctx the parse tree
	 */
	void exitZERO(hcclParser.ZEROContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ONE}
	 * labeled alternative in {@link hcclParser#basicPrimitive}.
	 * @param ctx the parse tree
	 */
	void enterONE(hcclParser.ONEContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ONE}
	 * labeled alternative in {@link hcclParser#basicPrimitive}.
	 * @param ctx the parse tree
	 */
	void exitONE(hcclParser.ONEContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#zeroContract}.
	 * @param ctx the parse tree
	 */
	void enterZeroContract(hcclParser.ZeroContractContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#zeroContract}.
	 * @param ctx the parse tree
	 */
	void exitZeroContract(hcclParser.ZeroContractContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#oneContract}.
	 * @param ctx the parse tree
	 */
	void enterOneContract(hcclParser.OneContractContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#oneContract}.
	 * @param ctx the parse tree
	 */
	void exitOneContract(hcclParser.OneContractContext ctx);
	/**
	 * Enter a parse tree produced by the {@code SCALE_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void enterSCALE_CONTRACT(hcclParser.SCALE_CONTRACTContext ctx);
	/**
	 * Exit a parse tree produced by the {@code SCALE_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void exitSCALE_CONTRACT(hcclParser.SCALE_CONTRACTContext ctx);
	/**
	 * Enter a parse tree produced by the {@code GIVE_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void enterGIVE_CONTRACT(hcclParser.GIVE_CONTRACTContext ctx);
	/**
	 * Exit a parse tree produced by the {@code GIVE_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void exitGIVE_CONTRACT(hcclParser.GIVE_CONTRACTContext ctx);
	/**
	 * Enter a parse tree produced by the {@code TRUNCATE_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void enterTRUNCATE_CONTRACT(hcclParser.TRUNCATE_CONTRACTContext ctx);
	/**
	 * Exit a parse tree produced by the {@code TRUNCATE_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void exitTRUNCATE_CONTRACT(hcclParser.TRUNCATE_CONTRACTContext ctx);
	/**
	 * Enter a parse tree produced by the {@code THEN_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void enterTHEN_CONTRACT(hcclParser.THEN_CONTRACTContext ctx);
	/**
	 * Exit a parse tree produced by the {@code THEN_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void exitTHEN_CONTRACT(hcclParser.THEN_CONTRACTContext ctx);
	/**
	 * Enter a parse tree produced by the {@code GET_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void enterGET_CONTRACT(hcclParser.GET_CONTRACTContext ctx);
	/**
	 * Exit a parse tree produced by the {@code GET_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void exitGET_CONTRACT(hcclParser.GET_CONTRACTContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ANYTIME_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void enterANYTIME_CONTRACT(hcclParser.ANYTIME_CONTRACTContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ANYTIME_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void exitANYTIME_CONTRACT(hcclParser.ANYTIME_CONTRACTContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AND_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void enterAND_CONTRACT(hcclParser.AND_CONTRACTContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AND_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void exitAND_CONTRACT(hcclParser.AND_CONTRACTContext ctx);
	/**
	 * Enter a parse tree produced by the {@code OR_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void enterOR_CONTRACT(hcclParser.OR_CONTRACTContext ctx);
	/**
	 * Exit a parse tree produced by the {@code OR_CONTRACT}
	 * labeled alternative in {@link hcclParser#compositePrimitve}.
	 * @param ctx the parse tree
	 */
	void exitOR_CONTRACT(hcclParser.OR_CONTRACTContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#scale}.
	 * @param ctx the parse tree
	 */
	void enterScale(hcclParser.ScaleContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#scale}.
	 * @param ctx the parse tree
	 */
	void exitScale(hcclParser.ScaleContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#give}.
	 * @param ctx the parse tree
	 */
	void enterGive(hcclParser.GiveContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#give}.
	 * @param ctx the parse tree
	 */
	void exitGive(hcclParser.GiveContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#truncate}.
	 * @param ctx the parse tree
	 */
	void enterTruncate(hcclParser.TruncateContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#truncate}.
	 * @param ctx the parse tree
	 */
	void exitTruncate(hcclParser.TruncateContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#then}.
	 * @param ctx the parse tree
	 */
	void enterThen(hcclParser.ThenContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#then}.
	 * @param ctx the parse tree
	 */
	void exitThen(hcclParser.ThenContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#get}.
	 * @param ctx the parse tree
	 */
	void enterGet(hcclParser.GetContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#get}.
	 * @param ctx the parse tree
	 */
	void exitGet(hcclParser.GetContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#anytime}.
	 * @param ctx the parse tree
	 */
	void enterAnytime(hcclParser.AnytimeContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#anytime}.
	 * @param ctx the parse tree
	 */
	void exitAnytime(hcclParser.AnytimeContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#and}.
	 * @param ctx the parse tree
	 */
	void enterAnd(hcclParser.AndContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#and}.
	 * @param ctx the parse tree
	 */
	void exitAnd(hcclParser.AndContext ctx);
	/**
	 * Enter a parse tree produced by {@link hcclParser#or}.
	 * @param ctx the parse tree
	 */
	void enterOr(hcclParser.OrContext ctx);
	/**
	 * Exit a parse tree produced by {@link hcclParser#or}.
	 * @param ctx the parse tree
	 */
	void exitOr(hcclParser.OrContext ctx);
}