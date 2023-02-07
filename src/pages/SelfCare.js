import IconContentBox2 from "../images/IconContentBox2.js";
import { SelfCareList } from "./SelfCareList.js";

const SelfCare = (props) => {

    const locationName = window.location.href.trim().split("/");
   
    const setBoxType = (listItem, useBoxColor) => {

        return <IconContentBox2 name={listItem.supportName} imageFile={listItem.image} key={listItem.index} linkTarget={listItem.linkTarget} imageAlt={listItem.imageAlt} link={listItem.link} color={useBoxColor} height={listItem.boxHeight} heightType={listItem.boxHeightType} width={listItem.boxWidth} widthType={listItem.boxWidthType}/>;        

    }

    const generateList = (list) => {

        const boxColor = [

            {"Mental Health": {"main": "colorOneBg", "light": "colorOneBgLight", "border": "colorOneBorder", "text": "colorOne"}},
            {"Drug or Alcohol Abuse": {"main": "colorTwoBg", "light": "colorTwoBgLight", "border": "colorTwoBorder", "text": "colorTwo"}},
            {"Bereavement": {"main": "colorThreeBg", "light": "colorThreeBgLight", "border": "colorThreeBorder", "text": "colorThree"}},
            {"Domestic Abuse or Violence": {"main": "colorFourBg", "light": "colorFourBgLight", "border": "colorFourBorder", "text": "colorfor"}},
            {"Financial Worries, Debt or Gambling": {"main": "colorFiveBg", "light": "colorFiveBgLight", "border": "colorFiveBorder", "text": "colorFive"}}
    
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

    return (

        <>
    
            
            <h1  className='selfCare colorOneBgLight'>Self Care</h1>

            <div className="contentWrapper">

                {  generateList(SelfCareList) }

                <div className="contentLast">
    
                    <img src={require("./../images/person-looking-right.png")} height="500px" width="auto" alt='woman'/>
                    

                </div>

            </div>

           

        </>
    
    
    )

};
  
export default SelfCare;