import { Link } from 'react-router-dom';

const IconContentBox = (props) => {

    let windowWidth = window.innerWidth;
    let actualWidth;
    let actualType;

    if(windowWidth < 1250){

        actualWidth = 100;
        actualType = "%";

    }else{

        actualWidth = props.width;
        actualType = props.widthType ;

    }

    const getStyle = () => {

        let styleObject = {

            width: "" + actualWidth + actualType + "",
            height: "" + props.height + props.heightType + "",
        }

        return styleObject;

    }

    return (

        <>
            

            <div className={ props.color + ' contentBox'} style={ getStyle()}>

                <a href={ props.link } target={props.linkTarget}>

                    <div className="leftBox">

                        <img  className="boxImage" src={require("./../images/" + props.imageFile)} width='90%' height='auto' alt={props.imageAlt}/>

                    </div>

                    <div className="rightBox">

                        <div>

                            <span>{ props.name }</span>

                        </div>

                    </div>

                </a>
                
            </div>

           
   
        </>
        
    );

}
  
export default IconContentBox;