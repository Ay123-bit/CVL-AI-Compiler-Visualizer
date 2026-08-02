import re



def remove_comments(code):


    # Remove // comments

    code = re.sub(

        r'//.*',

        '',

        code

    )


    # Remove /* */ comments

    code = re.sub(

        r'/\*.*?\*/',

        '',

        code,

        flags=re.DOTALL

    )


    return code






def analyze_complexity(code):


    code = remove_comments(code)



    result = {


        "functions":0,


        "loops":0,


        "branches":0,


        "complexity":1,


        "quality_score":100


    }





    # =====================
    # Function Detection
    # =====================


    function_pattern = re.findall(


        r'\b[a-zA-Z_][a-zA-Z0-9_<>:]*\s+'


        r'[a-zA-Z_][a-zA-Z0-9_]*'


        r'\s*\([^;{}]*\)'


        r'\s*\{',


        code


    )



    result["functions"] = len(function_pattern)






    # =====================
    # Loop Detection
    # =====================


    loop_pattern = re.findall(


        r'\b(for|while|do)\b',


        code


    )



    result["loops"] = len(loop_pattern)







    # =====================
    # Branch Detection
    # =====================


    branch_pattern = re.findall(


        r'\b(if|else\s+if|switch|case)\b',


        code


    )



    result["branches"] = len(branch_pattern)







    # =====================
    # Cyclomatic Complexity
    # =====================


    result["complexity"] = (


        1

        +

        result["loops"]

        +

        result["branches"]


    )







    # =====================
    # Quality Score
    # =====================


    score = 100



    score -= result["loops"] * 5


    score -= result["branches"] * 3



    if result["complexity"] > 10:


        score -= 15



    if result["complexity"] > 20:


        score -= 20





    if result["functions"] > 10:


        score -= 10





    if score < 0:

        score = 0





    result["quality_score"] = score






    return result
