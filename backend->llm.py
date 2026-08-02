def generate_suggestions(ir):

    suggestions = []


    # Addition / arithmetic optimization
    if "add" in ir or "mul" in ir or "sub" in ir:

        suggestions.append(
            "Apply constant folding to simplify arithmetic operations."
        )


    # Memory optimization
    if "alloca" in ir or "store" in ir:

        suggestions.append(
            "Reduce unnecessary memory allocation and improve cache utilization."
        )


    # Loop optimization check
    if "loop" in ir.lower():

        suggestions.append(
            "Apply loop unrolling for better execution speed."
        )


    else:

        suggestions.append(
            "Analyze loops and consider vectorization for performance improvement."
        )


    # General compiler optimization
    suggestions.append(
        "Replace repeated calculations with optimized instructions."
    )


    return suggestions
