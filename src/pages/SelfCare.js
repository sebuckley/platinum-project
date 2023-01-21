import IconContentBox from "../images/IconContentBox.js";
import { SelfCareList } from "./SelfCareList.js";

const SelfCare = (props) => {

    const locationName = window.location.href.trim().split("/");
   
    const setBoxType = (listItem, useBoxColor) => {

        return <IconContentBox name={listItem.supportName} imageFile={listItem.image} key={listItem.index} linkTarget={listItem.linkTarget} imageAlt={listItem.imageAlt} link={listItem.link} color={useBoxColor} height={listItem.boxHeight} heightType={listItem.boxHeightType} width={listItem.boxWidth} widthType={listItem.boxWidthType}/>;        

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