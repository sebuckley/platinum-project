import { useState } from 'react';
import MoodIndicatorInput from "./MoodIndicatorInput.js";
import GetDate from "./Date.js";

const MoodIndicator = () => {

    const [number, setNumber] = useState(0);
    const [storageWelcome, setStorageWelcome] = useState(0);
 
    const checkStorage = () => {

        if(storageWelcome === 0){

            let user = getStorage("username");
            setStorageWelcome(1);

            if(user === ""){

                user = prompt("Please enter your name:", "");
                if (user !== "" && user !== null) {

                    setStorage("username", user);

                }

            }

        }

    }

    const getStorage = (name) => {

        let storageName = localStorage.getItem(name);
        let returnName = ""
      
        if (storageName) {

            returnName = JSON.parse(storageName);

        } 

        return returnName;

    }

    const setStorage = (name, value) => {

        localStorage.setItem(name, JSON.stringify(value));

    }

    

    return (

        <>
            {
                //window.localStorage.removeItem('username')
                //window.localStorage.removeItem('moodlist')
               
                //setNumber(0)

            }

            {

                
                checkStorage()

            }



            <div className='wrapper'>

                { number === 10 ? <h2> { getStorage("username") }, this is how your mood is looking today...</h2> : <h2> { getStorage("username") }, tell us 10 things that are happening at the moment?</h2> }
            
                { number === 10 ? <GetDate /> : ""}
                <MoodIndicatorInput number={number} setNumber={setNumber} setStorage={setStorage} getStorage={getStorage}/>
                
            </div>
   
        
        </>
        
    );

}
  
export default MoodIndicator;