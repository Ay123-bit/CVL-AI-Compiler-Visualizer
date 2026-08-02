import "./CompilerPipeline.css";


function CompilerPipeline({ active = true }) {


    const stages = [

        "C++ Source Code",

        "Clang Compiler",

        "LLVM IR Generation",

        "LLVM Optimization Pass",

        "AST Analysis 🌳",

        "LLM Optimization Analysis 🤖",

        "Executable Output"

    ];



    return (


        <div className="pipeline">


            <h2>
                Compiler Pipeline ⚙️
            </h2>




            <div className="pipeline-container">


                {

                    stages.map((stage,index)=>(


                        <div key={index}>


                            <div
                                className={
                                    active
                                    ?
                                    "stage active"
                                    :
                                    "stage"
                                }
                            >


                                <span>
                                    {index + 1}
                                </span>


                                {stage}


                            </div>





                            {

                                index !== stages.length-1 &&

                                <div className="arrow">

                                    ↓

                                </div>

                            }



                        </div>


                    ))

                }



            </div>



        </div>


    );

}


export default CompilerPipeline;
