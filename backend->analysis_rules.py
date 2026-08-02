def check_arithmetic(ir):

    suggestions=[]

    if "add" in ir:
        suggestions.append(
            "Arithmetic instruction detected. Consider constant propagation."
        )

    return suggestions





def check_memory(ir):

    suggestions=[]

    if "alloca" in ir:

        suggestions.append(
            "Stack allocation detected. LLVM may optimize memory usage."
        )

    return suggestions





def check_function_size(ir):

    suggestions=[]

    lines=len(ir.splitlines())


    if lines > 50:

        suggestions.append(
            "Large function detected. Consider function splitting."
        )


    return suggestions





def check_return(ir):

    suggestions=[]


    if "ret i32" in ir:

        suggestions.append(
            "Return value optimization possible."
        )


    return suggestions
