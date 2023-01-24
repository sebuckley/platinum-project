import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 

const InputForm = (props) => {

    const selectMood = (e) =>{

        e.preventDefault();
        props.resetMood();
        let activeValue = e.target.innerText.trim();
        e.target.className = "mood " + activeValue
        props.setMood(activeValue);

    }

    return (

        <>  

            <form id='formP' >
                <label>Enter your situation, <span id='number'>{props.number + 1}</span>: <br></br>
                    <input
                        type="text" 
                        id="item"
                    />
                </label>
                <br></br>
                <p>How does this make you feel?</p>
                <div className='btnGroup'>
                <button onClick={ selectMood } className="mood">Positive <FontAwesomeIcon icon={solid('thumbs-up')} /></button><button onClick={ selectMood }  className="mood">Indiferent <FontAwesomeIcon icon={solid('question')} /></button><button onClick={ selectMood }  className="mood">Negative <FontAwesomeIcon icon={solid('thumbs-down')} /></button>
                </div>
               
                <br></br>
                <input
                    type="submit" 
                    value="+"
                    onClick={ props.addItem }
                />
                
            </form>

        </>

    )

}
  
export default InputForm;