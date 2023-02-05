import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 

const InputForm = (props) => {

    const selectMood = (e) =>{

        let activeValue;
        e.preventDefault();
        props.resetMood();
        
        if(e.target.className === "desciptionWord"){

            activeValue = e.target.parentElement.id;
            e.target.parentElement.className = "mood " + activeValue + "Btn";

        }else{

            activeValue = e.target.id;
            e.target.className = "mood " + activeValue + "Btn";

        } 

        props.setMood(activeValue);
 

    }

    return (

        <>  

            <form id='formP' >
                <label>Enter your situation, <span id='number'>{props.number + 1}</span>: <br></br><br></br>
                    <input type="text" id="item"/>
                </label>
                <br></br>
                <p>How does this make you feel?</p>
                <div className='btnGroup'>
                <button onClick={ selectMood } id="Positive" className="mood"><span className="desciptionWord">Positive</span> <FontAwesomeIcon icon={solid('thumbs-up')} /></button><button onClick={ selectMood } id="Indiferent"  className="mood"><span className="desciptionWord">Indiferent</span> <FontAwesomeIcon icon={solid('question')} /></button><button onClick={ selectMood } id="Negative" className="mood"><span className="desciptionWord">Negative</span> <FontAwesomeIcon icon={solid('thumbs-down')} /></button>
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