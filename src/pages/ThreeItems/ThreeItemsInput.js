import React from "react";
import { useState } from 'react';
import InputForm from "./form.js";

const ThreeItemsInput = (props) => {

    let currentList = props.getStorage("list");
    let activeState = [];
    let newNumber;
    
    if(currentList.length > 0){

        activeState = currentList;
        newNumber = currentList.length;
        props.setNumber(newNumber);

    }

    let [inputList, setInputList] = useState(activeState);

    const addItem = (e) => {

        e.preventDefault();

        let newArray = inputList.concat(document.getElementById("item").value);

        setInputList(newArray);

        let newNumber = props.number + 1;
        props.setNumber(newNumber);

        console.log(props.number);

        if(newNumber <= 3){
        
            if(props.number === 0){

                document.getElementById("number").innerText = "second";

            }else{
                document.getElementById("number").innerText = "third";

            }

            document.getElementById("item").value = "";

        }

        if(newNumber === 3){

            document.getElementById("formP").hidden = true;

        }


        props.setStorage("list", newArray);

    }

    const removeList = () => {

        localStorage.removeItem('list');
  
        setInputList([]);
        props.setNumber(0);
        newNumber = 0;
  


    }

    return (

        <>  


            { props.number === 3 ? "" : <InputForm addItem={addItem} /> }

          

            <ol id='list' class="rounded-list">

            {

                inputList.map((subItems, sIndex) => {

                    let item;

                    return <li key={sIndex} className={"item-" + (parseInt(sIndex) + 1)}><a href='#'>{subItems}</a></li>
            
                })
            
            }

            </ol>

            { props.number === 3 ? <button onClick={removeList}>Reset List</button>: "" } 

            
        </>

    )

}
  
export default ThreeItemsInput;