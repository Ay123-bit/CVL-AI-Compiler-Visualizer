const API_URL = "http://127.0.0.1:8000";



async function compileCode(code) {


    let controller;
    let timeout;


    try {


        controller = new AbortController();


        timeout = setTimeout(() => {


            controller.abort();


        }, 30000);






        const response = await fetch(


            `${API_URL}/compile`,


            {

                method:"POST",


                headers:{


                    "Content-Type":"application/json"

                },


                body:JSON.stringify({


                    code:code

                }),


                signal:controller.signal


            }


        );





        clearTimeout(timeout);





        if(!response.ok){


            throw new Error(

                `Server Error : ${response.status}`

            );


        }






        const data = await response.json();





        return {


            success:data.success === true,



            ir:data.ir || "",



            ast:data.ast || null,



            output:data.output || "",






            optimizations:

                Array.isArray(data.optimizations)

                ?

                data.optimizations

                :

                [],






            ai_suggestions:


                Array.isArray(data.ai_suggestions)

                ?

                data.ai_suggestions

                :

                [],






            complexity:


                data.complexity || {


                    functions:0,

                    loops:0,

                    branches:0,

                    complexity:0,

                    quality_score:0

                },







            metrics:


                data.metrics || {


                    before_lines:0,

                    after_lines:0,

                    reduction:"0%"

                },






            error:data.error || ""



        };





    }





    catch(error){



        console.error(

            "Compiler API Error:",

            error

        );







        let message = error.message;





        if(error.name === "AbortError"){


            message =

            "Compiler timeout. Backend took too long.";


        }








        return {


            success:false,



            ir:"",



            ast:null,



            output:"",



            optimizations:[],



            ai_suggestions:[],



            complexity:{


                functions:0,

                loops:0,

                branches:0,

                complexity:0,

                quality_score:0

            },





            metrics:{


                before_lines:0,

                after_lines:0,

                reduction:"0%"

            },





            error:message



        };



    }



    finally{


        if(timeout){


            clearTimeout(timeout);


        }


    }



}



export default compileCode;
