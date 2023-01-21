import { useState } from 'react';
import ThreeItemsInput from "./ThreeItemsInput.js";

const ThreeItems = () => {

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
                //window.localStorage.removeItem('list')
                //setNumber(0)

            }

            {

                
                checkStorage()

            }



            <div className='wrapper'>

                { number === 3 ? <h2> { getStorage("username") }, these are the three things you have told us you are greatful for...</h2> : <h2> { getStorage("username") }, what three things are you thankful for?</h2> }
                
                <ThreeItemsInput number={number} setNumber={setNumber} setStorage={setStorage} getStorage={getStorage}/>
          
            </div>
   
        
        </>
        
    );

}
  
export default ThreeItems;