import { useState } from "react";


import Sidebar from "../components/Sidebar";
import CodeEditor from "../components/CodeEditor";
import IRViewer from "../components/IRViewer";
import ASTViewer from "../components/ASTViewer";
import CompilerPipeline from "../components/CompilerPipeline";
import ErrorBox from "../components/ErrorBox";
import AIAnalysis from "../components/AIAnalysis";
import ComplexityAnalysis from "../components/ComplexityAnalysis";


import compileCode from "../services/compilerAPI";


import "./Dashboard.css";



function Dashboard(){


    const [irCode,setIrCode] = useState("");

    const [astTree,setAstTree] = useState(null);

    const [programOutput,setProgramOutput] = useState("");

    const [optimizations,setOptimizations] = useState([]);

    const [aiSuggestions,setAiSuggestions] = useState([]);

    const [complexity,setComplexity] = useState(null);

    const [compilerError,setCompilerError] = useState("");

    const [loading,setLoading] = useState(false);



    const [metrics,setMetrics] = useState({

        before_lines:0,

        after_lines:0,

        reduction:"0%"

    });






    const handleCompile = async(code)=>{


        try{


            setLoading(true);

            setCompilerError("");



            const result = await compileCode(code);




            if(result.success){



                setIrCode(
                    result.ir || ""
                );



                let tree=result.ast;



                if(typeof tree==="string"){


                    try{

                        tree=JSON.parse(tree);

                    }

                    catch{

                        tree=null;

                    }

                }



                setAstTree(tree);



                setProgramOutput(

                    result.output || ""

                );





                setOptimizations(

                    Array.isArray(result.optimizations)

                    ?

                    result.optimizations

                    :

                    []

                );







                let ai=result.ai_suggestions || [];



                if(typeof ai==="string"){

                    ai=[ai];

                }



                setAiSuggestions(ai);







                setComplexity(

                    result.complexity || null

                );







                setMetrics(

                    result.metrics ||

                    {

                        before_lines:0,

                        after_lines:0,

                        reduction:"0%"

                    }

                );



            }

            else{


                setCompilerError(

                    result.error ||

                    "Compilation Failed"

                );


                clearData();

            }



        }


        catch(error){


            setCompilerError(

                "Backend Connection Failed\n\n"+

                error.message

            );


            clearData();

        }



        finally{


            setLoading(false);

        }


    };









    function clearData(){


        setIrCode("");

        setAstTree(null);

        setProgramOutput("");

        setOptimizations([]);

        setAiSuggestions([]);

        setComplexity(null);



        setMetrics({

            before_lines:0,

            after_lines:0,

            reduction:"0%"

        });


    }







    return (

        <div className="dashboard-layout">


            <Sidebar />



            <main className="dashboard">



                <h1>
                    CVL Dashboard 🚀
                </h1>


                <p>
                    AI Compiler Visualizer + LLVM Optimizer
                </p>






                <div className="cards">



                    <div className="card">

                        <h2>
                            86
                        </h2>

                        <p>
                            LLVM Builds
                        </p>

                    </div>






                    <div className="card">

                        <h2>
                            {optimizations.length}
                        </h2>

                        <p>
                            Optimizations
                        </p>

                    </div>







                    <div className="card">

                        <h2>
                            {aiSuggestions.length}
                        </h2>

                        <p>
                            AI Suggestions
                        </p>

                    </div>







                    <div className="card">

                        <h2>
                            {metrics.reduction}
                        </h2>

                        <p>
                            Efficiency
                        </p>

                    </div>



                </div>








                {
                    loading &&

                    <div className="loading">

                        ⚙️ Compiling C++ → LLVM IR...

                    </div>

                }








                <CodeEditor

                    onCompile={handleCompile}

                />








                <ErrorBox

                    error={compilerError}

                />








                <IRViewer

                    irCode={irCode}

                    programOutput={programOutput}

                    optimizations={optimizations}

                    metrics={metrics}

                />








                <ASTViewer

                    astTree={astTree}

                />








                <AIAnalysis

                    suggestions={aiSuggestions}

                />








                <ComplexityAnalysis

                    complexity={complexity}

                />








                <CompilerPipeline />




            </main>



        </div>

    );


}



export default Dashboard;
