import "./ComplexityAnalysis.css";


function ComplexityAnalysis({complexity}){


    if(!complexity){

        return (

            <div className="complexity-box">

                <h2>
                    Code Complexity 🧠
                </h2>


                <p>
                    No analysis available
                </p>


            </div>

        );

    }




    return (

        <div className="complexity-box">


            <h2>
                Code Complexity 🧠
            </h2>



            <div className="complex-grid">



                <div className="complex-card">

                    <h3>
                        {complexity.functions ?? 0}
                    </h3>

                    <p>
                        Functions
                    </p>

                </div>





                <div className="complex-card">

                    <h3>
                        {complexity.loops ?? 0}
                    </h3>

                    <p>
                        Loops
                    </p>

                </div>





                <div className="complex-card">

                    <h3>
                        {complexity.branches ?? 0}
                    </h3>

                    <p>
                        Branches
                    </p>

                </div>






                <div className="complex-card">

                    <h3>
                        {complexity.complexity ?? 0}
                    </h3>

                    <p>
                        Cyclomatic Complexity
                    </p>

                </div>







                <div className="complex-card score">


                    <h3>

                        {complexity.quality_score ?? 0}%

                    </h3>


                    <p>
                        Code Quality
                    </p>


                </div>




            </div>



        </div>

    );



}


export default ComplexityAnalysis;
