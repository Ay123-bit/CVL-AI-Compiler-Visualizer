import "./ErrorBox.css";


function ErrorBox({error}) {


    if(!error){

        return null;

    }


    return (

        <div className="error-box">

            <h2>
                Compiler Error ❌
            </h2>


            <pre>
                {error}
            </pre>


        </div>

    );

}


export default ErrorBox;
