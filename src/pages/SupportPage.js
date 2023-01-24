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

    const setBoxType = (listItem, useBoxColor) => {

        if(listItem.boxType === "icon"){

            console.log(useBoxColor);

            return <IconContentBox name={listItem.supportName} imageFile={listItem.image} key={listItem.index} linkTarget={listItem.linkTarget} imageAlt={listItem.imageAlt} link={listItem.link} color={useBoxColor} height={listItem.boxHeight} heightType={listItem.boxHeightType} width={listItem.boxWidth} widthType={listItem.boxWidthType}/>; 

        }else if(listItem.boxType === "video"){

            return <VideoContentBox name={listItem.supportName} imageFile={listItem.image} key={listItem.index} linkTarget={listItem.linkTarget} imageAlt={listItem.imageAlt} link={listItem.link} color={useBoxColor} height={listItem.boxHeight} heightType={listItem.boxHeightType} width={listItem.boxWidth} widthType={listItem.boxWidthType}/>; 

        }else if(listItem.boxType === "blog"){

            return <BlogContentBox name={listItem.supportName} imageFile={listItem.image} key={listItem.index} linkTarget={listItem.linkTarget} imageAlt={listItem.imageAlt} link={listItem.link} color={useBoxColor} height={listItem.boxHeight} heightType={listItem.boxHeightType} width={listItem.boxWidth} widthType={listItem.boxWidthType}/>; 

        }

    }

    const generateList = (list) => {

        const boxColor = [

            {"Mental Health": "colorOneBgLight colorOneBorder"},
            {"Drug or Alcohol Abuse": "colorTwoBgLight colorTwoBorder"},
            {"Bereavement": "colorThreeBgLight colorThreeBorder"},
            {"Domestic Abuse or Violence": "colorFourBgLight colorFourBorder"},
            {"Financial Worries, Debt or Gambling": "colorFiveBgLight colorFiveBorder"}
    
        ];

        return list.map((listItem) => {

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

        if(supportType !== false){

            if(supportTypeName === "Mental Health"){

                component = generateList(mentalHealthList);

            }else if(supportTypeName === "Drug or Alcohol Abuse"){

                component = generateList(DrugAlcoholSupport);

            }else if(supportTypeName === "Bereavement"){

                component = generateList(Bereavement);

            }else if(supportTypeName === "Domestic Abuse or Violence"){

                component = generateList(DomesticAbuseViolence);

            }else if(supportTypeName === "Financial Worries, Debt or Gambling"){

                component = component = generateList(Finance);

            }

            return component;

        }else{


            let combinedLists = [].concat(mentalHealthList,DrugAlcoholSupport,Bereavement, DomesticAbuseViolence, Finance);

            let shuffled = combinedLists
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

            component = generateList(shuffled);

            return component;


        }

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