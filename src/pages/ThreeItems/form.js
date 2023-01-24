import React from "react";

const InputForm = (props) => {

    return (

        <>  

            <form id='formP' >
                <label>Enter your <span id='number'>first</span> positive item: <br></br>
                    <input
                        type="text" 
                        id="item"
                    />
                </label>
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