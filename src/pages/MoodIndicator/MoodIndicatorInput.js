import React from "react";
import { useState, useEffect } from 'react';
import InputForm from "./form.js";
import BatteryTop from "./BatteryTop.js";
import BatteryBottom from "./BatteryBottom.js";



const MoodIndicatorInput = (props) => {

    let currentList = props.getStorage("moodlist");
    const [mood, setMood] = useState("");
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

        let newValue = document.getElementById("item").value

        if (newValue === "" || mood === ""){

            if(newValue === ""){

                document.getElementById("item").setAttribute('style', 'border-color: red');
                document.getElementById("item").setAttrelseibute('style', 'border-size: 1px');

            }else{



            }

        }else{


            document.getElementById("item").setAttribute('style', 'border-color: black');
            let newNumber = props.number + 1;
            let count;

            if(mood === "Negative"){

                count = newNumber + 20;

            }else if(mood === "Indiferent"){

                count = newNumber + 10;

            }else{

                count = newNumber;
            }

            let itemObject = {

                text: newValue,
                class: mood,
                order: count

            }

            let newArray = inputList.concat(itemObject);
            setInputList(newArray);
            props.setNumber(newNumber);

            if(newNumber <= 10){

                document.getElementById("number").innerText = newNumber + 1;

                document.getElementById("item").value = "";

            }

            if(newNumber === 10){

                document.getElementById("formP").hidden = true;

            }

            props.setStorage("moodlist", newArray);

            setMood("");

            resetMood();

            

        }

    }

    const resetMood = () => {

        const moodSelections = document.getElementsByClassName("mood");

        for(let i = 0; i < moodSelections.length; i ++){

            moodSelections[i].className = "mood";

        };

    }

    const removeList = () => {

        localStorage.removeItem('moodlist');
  
        setInputList([]);
        props.setNumber(0);
        newNumber = 0;
  
    }

    const sortList = (array) => {

        array.sort(function(a,b){
            return b.order  - a.order;
        });

    }

    const colorList = () =>{

        let greenItem = document.getElementsByClassName("Positive");
        let orangeItem = document.getElementsByClassName("Indiferent");
        let redItem = document.getElementsByClassName("Negative");
        let item;

        for( let i = 0; i < greenItem.length; i++){
    
            item = greenItem[i].children
            item[0].style.background = "green";

        }

        for( let i = 0; i < orangeItem.length; i++){
    
            item = orangeItem[i].children
            item[0].style.background = "orange";

        }

        for( let i = 0; i < redItem.length; i++){
    
            item = redItem[i].children
            item[0].style.background = "red";

        }

        if(orangeItem.length > 0){

            let firstItem = 0;
            let lastItem = orangeItem.length - 1;
            let children1 = orangeItem[firstItem].children;
            let children2 = orangeItem[lastItem].children;

            if(orangeItem.length === 1 ){

                children1[0].style.backgroundImage = "linear-gradient(red ,orange,green)";

            }else{

                if(greenItem.length > 0 && orangeItem.length > 0){

                    children2[0].style.backgroundImage = "linear-gradient(to bottom,orange 70%, green)";

                }


            }

        }

        if(redItem.length > 0){

            if(redItem.length > 0 && orangeItem.length > 1){

                let lastItem = redItem[redItem.length - 1];
                let children1 = lastItem.children;

                children1[0].style.backgroundImage = "linear-gradient(to bottom,red 70%,orange)";

            }

            if(greenItem.length > 0 && redItem.length > 0 && orangeItem.length === 0){

                let lastItem = redItem[redItem.length - 1];
                let children1 = lastItem.children;

                children1[0].style.backgroundImage = "linear-gradient(to bottom,red 90%,green)";

            }
            
        }


    }

    return (

        <>  


            { props.number === 10 ? "" : <InputForm addItem={addItem} setMood={setMood} resetMood={resetMood} number={props.number}/> }

            { props.number > 0 ? <BatteryTop /> : "" }
            
            <ol id='list' className="rounded-list">

                {
                    sortList(inputList)
                }

                {

                    inputList.map((subItems, sIndex) => {

                        let text = subItems.text;
                        let classText = subItems.class;

                        return <li key={sIndex} className={"item-" + (parseInt(sIndex) + 1 ) + " " + classText}><a href='#'>{text}</a></li>
                
                    })
                
                }

            </ol>
            
            { props.number > 0 ? <BatteryBottom /> : "" }

            { props.number === 10 ? <button onClick={removeList}>Reset List</button>: "" } 

            {
                useEffect(() => {

                    setTimeout(() => {

                        colorList()

                    }, 10)

                })
            }
            
        </>

    )

}
  
export default MoodIndicatorInput;