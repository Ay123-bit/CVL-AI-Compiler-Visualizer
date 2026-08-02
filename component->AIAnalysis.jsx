import "./AIAnalysis.css";


function AIAnalysis({ suggestions }) {


    let analysis = [];


    if(Array.isArray(suggestions)){

        analysis = suggestions;

    }

    else if(typeof suggestions === "string"){

        analysis = [suggestions];

    }



    return (

        <div className="ai-analysis">


            <h2>
                AI Optimization Analysis 🤖
            </h2>




            {

                analysis.length > 0 ?


                (

                    <div className="ai-list">


                        {

                            analysis.map(

                                (item,index)=>(


                                    <div

                                        className="ai-item"

                                        key={index}

                                    >

                                        <span>
                                            ✨
                                        </span>


                                        <p>
                                            {item}
                                        </p>


                                    </div>


                                )

                            )

                        }


                    </div>


                )


                :


                (

                    <p className="empty">

                        No AI suggestions available...

                    </p>

                )


            }


        </div>

    );


}


export default AIAnalysis;
