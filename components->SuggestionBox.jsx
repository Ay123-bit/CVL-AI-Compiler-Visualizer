import "./SuggestionBox.css";


function SuggestionBox({ suggestions }) {


  return (

    <div className="suggestion-box">


      <h2>
        LLM Optimization Suggestions 🤖
      </h2>



      {
        suggestions.length === 0 ? (

          <p>
            Compile code to get AI optimization suggestions.
          </p>

        ) : (


          suggestions.map((item, index) => (

            <div 
              className="suggestion"
              key={index}
            >

              <h3>
                Optimization {index + 1}
              </h3>


              <p>
                {item}
              </p>


            </div>

          ))


        )
      }



    </div>

  );

}


export default SuggestionBox;
