import { useState,  } from "react";
import Navigation from "./Navigation.js";
import IconContentBox from "../images/IconContentBox.js";
import VideoContentBox from "../images/VideoContentBox.js";
import BlogContentBox from "../images/BlogContentBox.js";
import { mentalHealthList } from "./MentalHealthSupport.js";
import { DrugAlcoholSupport }  from "./DrugAlcoholSupport.js";
import { Bereavement }  from "./Bereavement.js";
import { DomesticAbuseViolence }  from "./DomesticAbuseViolence.js";
import { Finance } from "./Finance.js";

const SupportPages = (props) => {

    const [supportType, setSupportType] = useState(false);
    const [supportTypeName, setSupportTypeName] = useState("");
   
    const locationName = window.location.href.trim().split("/");
    let component;
    let useList;

    let combinedLists = [].concat(mentalHealthList,DrugAlcoholSupport,Bereavement, DomesticAbuseViolence, Finance);
   

    const setBoxType = (listItem, useBoxColor) => {

        if(listItem.boxType === "icon"){

            return <IconContentBox name={listItem.supportName} supportType={listItem.supportType} imageFile={listItem.image} key={listItem.index} linkTarget={listItem.linkTarget} imageAlt={listItem.imageAlt} link={listItem.link} color={useBoxColor} />; 

        }else if(listItem.boxType === "video"){

            return <VideoContentBox name={listItem.supportName} supportType={listItem.supportType} imageFile={listItem.image} key={listItem.index} linkTarget={listItem.linkTarget} imageAlt={listItem.imageAlt} link={listItem.link} color={useBoxColor} />; 

        }else if(listItem.boxType === "blog"){

            return <BlogContentBox name={listItem.supportName} supportType={listItem.supportType} imageFile={listItem.image} key={listItem.index} linkTarget={listItem.linkTarget} imageAlt={listItem.imageAlt} link={listItem.link} color={useBoxColor} />; 

        }

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

        useList = window.sessionStorage.getItem("list");
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

    let checkSession = window.sessionStorage.getItem("list");

    if(checkSession === null){

        useList = randomShuffle(combinedLists);
        window.sessionStorage.setItem("list", JSON.stringify(useList));

    }

    return (

        <>
    
            <Navigation supportType={ supportType } setSupportType={ setSupportType } setSupportTypeName={ setSupportTypeName }/>

            <div className="contentWrapper">

                { setSupportView() }

            </div>

        </>
    
    
    )

};
  
export default SupportPages;