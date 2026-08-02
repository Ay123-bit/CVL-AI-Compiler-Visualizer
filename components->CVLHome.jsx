import { useState } from "react";


function CVLHome() {


    const [cppCode, setCppCode] = useState(
`int main(){

    int a = 10;
    int b = 20;

    int c = a + b;

    return c;
}`
    );


    const [llvmIR, setLLVMIR] = useState("");

    const [optimizations, setOptimizations] = useState([]);

    const [metrics, setMetrics] = useState({});

    const [loading, setLoading] = useState(false);



    async function compileCode() {


        console.log("Compile button clicked");


        setLoading(true);


        try {


            const response = await fetch(
                "http://127.0.0.1:8000/compile",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        code: cppCode
                    })
                }
            );



            const data = await response.json();


            console.log(data);



            if(data.success) {


                setLLVMIR(
                    data.ir
                );


                setOptimizations(
                    data.optimizations || []
                );


                setMetrics(
                    data.metrics || {}
                );


            }
            else {


                setLLVMIR(
                    "Compiler Error:\n" + data.error
                );


            }



        }
        catch(error) {


            console.log(error);


            setLLVMIR(
                "Backend Connection Error:\n" + error.message
            );


        }


        setLoading(false);

    }




    return (

        <div style={{
            padding:"30px"
        }}>


            <h1>
                CVL Dashboard 🚀
            </h1>



            <h2>
                C++ Code Editor
            </h2>



            <textarea

                value={cppCode}

                onChange={
                    (e)=>setCppCode(e.target.value)
                }


                style={{
                    width:"700px",
                    height:"300px",
                    fontSize:"16px",
                    padding:"10px"
                }}

            />



            <br/>
            <br/>


            <button

                onClick={compileCode}

                style={{
                    padding:"10px 25px",
                    fontSize:"16px",
                    cursor:"pointer"
                }}

            >

                {
                    loading
                    ?
                    "Compiling..."
                    :
                    "Compile Code"
                }


            </button>




            <hr/>




            <h2>
                LLVM IR Viewer ⚙️
            </h2>


            <pre

                style={{
                    background:"#111",
                    color:"#00ff90",
                    padding:"20px",
                    width:"700px",
                    minHeight:"100px",
                    overflow:"auto"
                }}

            >

                {llvmIR}

            </pre>





            <h2>
                Optimization Analysis 🤖
            </h2>


            <ul>

            {

                optimizations.map(

                    (item,index)=>(

                        <li key={index}>
                            ✓ {item}
                        </li>

                    )

                )

            }

            </ul>






            <h2>
                Optimization Metrics 📊
            </h2>



            <p>

                Before Optimization Lines:

                {" "}

                {metrics.before_lines || 0}

            </p>



            <p>

                After Optimization Lines:

                {" "}

                {metrics.after_lines || 0}

            </p>



            <p>

                Code Reduction:

                {" "}

                {metrics.reduction || "0%"}

            </p>




        </div>

    );

}


export default CVLHome;
