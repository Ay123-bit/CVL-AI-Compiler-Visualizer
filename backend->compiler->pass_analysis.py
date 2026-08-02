import subprocess



OPT = r"C:\Program Files\LLVM\bin\opt.exe"



def analyze_passes(ir_file):

    try:

        result = subprocess.run(

            [
                OPT,
                "-passes=default<O2>",
                "-disable-output",
                "-debug-pass-manager",
                ir_file
            ],

            capture_output=True,

            text=True

        )


        output = result.stderr



        passes=[]


        for line in output.splitlines():

            if "Running pass:" in line:

                name = line.split(
                    "Running pass:"
                )[1].strip()


                passes.append(name)



        return passes



    except Exception as e:


        return [

            "Pass analysis unavailable",

            str(e)

        ]
