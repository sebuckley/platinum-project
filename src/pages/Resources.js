import { useState,  } from "react";
import Navigation from "./Navigation.js";
import ServicesContentBox from "../images/ServicesContentBox.js";
import { mentalHealthServices } from "./MentalHealthSupportServices.js";
import { DrugAlcoholSupportServices }  from "./DrugAlcoholSupportServices.js";
import { BereavementServices }  from "./BereavementServices.js";
import { DomesticAbuseViolenceServices }  from "./DomesticAbuseViolenceServices.js";
import { FinanceServices } from "./FinanceServices.js";

const Resources = (props) => {

    const [supportType, setSupportType] = useState(false);
    const [supportTypeName, setSupportTypeName] = useState("");
   
    const locationName = window.location.href.trim().split("/");
    let component;
    let useList;

    let combinedLists = [].concat(mentalHealthServices,DrugAlcoholSupportServices,BereavementServices, DomesticAbuseViolenceServices, FinanceServices);
   

    const setBoxType = (listItem, useBoxColor) => {

        return <ServicesContentBox name={listItem.supportName} supportType={listItem.supportType} imageFile={listItem.image} key={listItem.index} linkTarget={listItem.linkTarget} imageAlt={listItem.imageAlt} link={listItem.link} color={useBoxColor} />; 

    }

    const generateList = (newList) => {

        const boxColor = [

            {"Mental Health": {"main": "colorOneBg", "light": "colorOneBgLight", "border": "colorOneBorder", "text": "colorOne"}},
            {"Drug or Alcohol Abuse": {"main": "colorTwoBg", "light": "colorTwoBgLight", "border": "colorTwoBorder", "text": "colorTwo"}},
            {"Bereavement": {"main": "colorThreeBg", "light": "colorThreeBgLight", "border": "colorThreeBorder", "text": "colorThree"}},
            {"Domestic Abuse or Violence": {"main": "colorFourBg", "light": "colorFourBgLight", "border": "colorFourBorder", "text": "colorfor"}},
            {"Financial Worries, Debt or Gambling": {"main": "colorFiveBg", "light": "colorFiveBgLight", "border": "colorFiveBorder", "text": "colorFive"}}
    
        ];

        return newList.map((listItem) => {

            if (locationName[locationName.length - 2] === listItem.location || listItem.location === "national"){

                let useBoxColor;

                for(let i = 0; i < boxColor.length; i ++){

                    for ( let property in boxColor[i] ) {
                    
                        if (property === listItem.supportType){

                            useBoxColor = boxColor[i][listItem.supportType];

                        }

                    }

                }

                return setBoxType(listItem, useBoxColor); 
            
            }else{

                return null;

            }
        
        });

    }

    const setSupportView = () => {

        useList = window.sessionStorage.getItem("listResources");
        useList = JSON.parse(useList);
    
        if(supportType !== false){


            let filteredList = useList.filter(function (listItem) {

                return listItem.supportType ===  supportTypeName;

            });
              

            component = generateList(filteredList);

            return component;

        }else{

            component = generateList(useList);
            return component;

        }

    }

    const randomShuffle = (list) => {

        let shuffled = list
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

        return shuffled;

    }

    let checkSession = window.sessionStorage.getItem("listResources");

    if(checkSession === null){

        useList = randomShuffle(combinedLists);
        window.sessionStorage.setItem("listResources", JSON.stringify(useList));

    }

    return (

        <>
    
            <Navigation supportType={ supportType } setSupportType={ setSupportType } setSupportTypeName={ setSupportTypeName } supportTypeName={supportTypeName}/>

            <div className="contentWrapper">

                { setSupportView() }

            </div>

        </>
    
    
    )

};
  
export default Resources;