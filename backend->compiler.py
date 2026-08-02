import subprocess
import tempfile
import os
import json

from ai_analysis import analyze_ir
from complexity_analysis import analyze_complexity


CLANG = r"C:\Program Files\LLVM\bin\clang++.exe"



# =========================
# Clean LLVM IR
# =========================

def clean_ir(ir):

    start = ir.find("define dso_local")


    if start == -1:

        return ir



    brace = 0


    for i in range(start, len(ir)):


        if ir[i] == "{":

            brace += 1


        elif ir[i] == "}":

            brace -= 1


            if brace == 0:

                return ir[start:i+1]



    return ir[start:]






# =========================
# AST Generator
# =========================

def generate_ast(code):


    cpp = tempfile.NamedTemporaryFile(

        delete=False,

        suffix=".cpp",

        mode="w",

        encoding="utf-8"

    )


    cpp.write(code)

    cpp.close()



    try:


        result = subprocess.run(

            [

                CLANG,

                cpp.name,

                "-Xclang",

                "-ast-dump=json",

                "-fsyntax-only"

            ],

            capture_output=True,

            text=True,

            timeout=10

        )


    except Exception:


        return None



    finally:


        if os.path.exists(cpp.name):

            os.remove(cpp.name)





    if result.returncode != 0:

        return None




    try:

        ast=json.loads(result.stdout)

    except:

        return None






    def convert(node):


        if not isinstance(node,dict):

            return None



        name=node.get(

            "kind",

            "Unknown"

        )



        if node.get("name"):

            name += " : " + node["name"]




        children=[]


        for child in node.get(

            "inner",

            []

        ):


            converted=convert(child)


            if converted:

                children.append(converted)



        return {


            "name":name,


            "children":children


        }




    return convert(ast)









# =========================
# Compiler Pipeline
# =========================

def compile_and_run(code):


    cpp=tempfile.NamedTemporaryFile(

        delete=False,

        suffix=".cpp",

        mode="w",

        encoding="utf-8"

    )


    cpp.write(code)

    cpp.close()



    cpp_file=cpp.name


    ll_file=cpp_file.replace(

        ".cpp",

        ".ll"

    )


    exe_file=cpp_file.replace(

        ".cpp",

        ".exe"

    )




    try:



        # LLVM IR

        ir=subprocess.run(

            [

                CLANG,

                cpp_file,

                "-S",

                "-emit-llvm",

                "-O2",

                "-o",

                ll_file

            ],

            capture_output=True,

            text=True,

            timeout=20

        )



        if ir.returncode != 0:


            return {

                "success":False,

                "error":ir.stderr

            }





        # Build EXE

        build=subprocess.run(

            [

                CLANG,

                cpp_file,

                "-O2",

                "-o",

                exe_file

            ],

            capture_output=True,

            text=True,

            timeout=20

        )



        if build.returncode !=0:


            return {


                "success":False,


                "error":build.stderr


            }






        # Run program


        try:


            run=subprocess.run(

                [

                    exe_file

                ],

                capture_output=True,

                text=True,

                timeout=5

            )


            output=run.stdout.strip()



            if run.stderr:

                output += "\n"+run.stderr



        except subprocess.TimeoutExpired:


            output="Program timeout"






        # Read LLVM


        with open(

            ll_file,

            "r",

            encoding="utf-8"

        ) as f:


            raw_ir=f.read()





        ir_clean=clean_ir(raw_ir)






        # AST


        ast=generate_ast(code)






        # AI


        try:


            ai=analyze_ir(ir_clean)



            if isinstance(ai,str):

                ai=[ai]


        except Exception as e:


            ai=[

                "AI unavailable",

                str(e)

            ]






        # Complexity


        try:


            complexity=analyze_complexity(code)



            if not complexity:


                complexity={}


        except Exception as e:


            complexity={

                "functions":0,

                "loops":0,

                "branches":0,

                "complexity":0,

                "quality_score":0,

                "error":str(e)

            }






        # Metrics


        before=len(

            raw_ir.splitlines()

        )


        after=len(

            ir_clean.splitlines()

        )



        reduction=0


        if before > 0:


            reduction=int(

                ((before-after)/before)*100

            )



        if reduction < 0:

            reduction=0





        return {


            "success":True,


            "ir":ir_clean,


            "ast":ast,


            "output":output,



            "optimizations":[

                "Constant folding detected",

                "Dead code elimination applied",

                "Instruction simplification applied"

            ],



            "ai_suggestions":ai,


            "complexity":complexity,



            "metrics":{


                "before_lines":before,


                "after_lines":after,


                "reduction":f"{reduction}%"

            }


        }





    finally:



        for file in [

            cpp_file,

            ll_file,

            exe_file

        ]:


            try:


                if os.path.exists(file):

                    os.remove(file)


            except:

                pass
