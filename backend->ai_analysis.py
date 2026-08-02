import re



def analyze_ir(ir):


    suggestions = []



    # -------------------------
    # Constant Folding Detection
    # -------------------------

    constant_operations = re.findall(

        r'(add|sub|mul|sdiv).*?(\d+).*?(\d+)',

        ir

    )


    if constant_operations:

        suggestions.append(

            "Constant expression detected. Compiler can evaluate values at compile time."

        )




    # -------------------------
    # Arithmetic Analysis
    # -------------------------

    add_count = len(

        re.findall(

            r'\badd\b',

            ir

        )

    )


    mul_count = len(

        re.findall(

            r'\bmul\b',

            ir

        )

    )


    div_count = len(

        re.findall(

            r'\bsdiv\b',

            ir

        )

    )



    if add_count > 3:

        suggestions.append(

            "Multiple addition operations detected. Consider algebraic simplification."

        )


    if mul_count > 0:

        suggestions.append(

            "Multiplication instructions detected. Check strength reduction opportunities."

        )


    if div_count > 0:

        suggestions.append(

            "Division operation detected. Division by constants can be optimized."

        )





    # -------------------------
    # Memory Analysis
    # -------------------------

    alloc_count = len(

        re.findall(

            r'\balloca\b',

            ir

        )

    )


    load_count = len(

        re.findall(

            r'\bload\b',

            ir

        )

    )


    store_count = len(

        re.findall(

            r'\bstore\b',

            ir

        )

    )



    if alloc_count > 2:

        suggestions.append(

            "Multiple stack allocations detected. Consider reducing local variables."

        )


    if load_count > store_count + 5:

        suggestions.append(

            "High memory read activity detected. Consider caching frequently used values."

        )





    # -------------------------
    # Control Flow Analysis
    # -------------------------

    branch_count = len(

        re.findall(

            r'\bbr\b',

            ir

        )

    )



    if branch_count > 1:

        suggestions.append(

            "Conditional control flow detected. Branch optimization may improve performance."

        )





    # -------------------------
    # Loop Detection
    # -------------------------

    labels = len(

        re.findall(

            r'^[a-zA-Z0-9_.]+:',

            ir,

            re.MULTILINE

        )

    )



    if labels > 2 and branch_count > 2:

        suggestions.append(

            "Possible loop structure detected. Loop unrolling or invariant code motion may help."

        )





    # -------------------------
    # Return Analysis
    # -------------------------

    return_count = len(

        re.findall(

            r'\bret\b',

            ir

        )

    )


    if return_count == 1:

        suggestions.append(

            "Single return path detected. Return value optimization applied."

        )


    elif return_count > 1:

        suggestions.append(

            "Multiple return paths detected. Control flow simplification is possible."

        )





    # -------------------------
    # Function Size
    # -------------------------

    instruction_count = len(

        ir.splitlines()

    )



    if instruction_count > 30:

        suggestions.append(

            "Large function detected. Function splitting or inline optimization may improve performance."

        )





    # -------------------------
    # Default
    # -------------------------

    if not suggestions:

        suggestions.append(

            "No major optimization opportunities detected."

        )




    return suggestions
