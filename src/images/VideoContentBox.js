const VideoContentBox = (props) => {

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

    const getStyle = (backgroundImage) => {

        let styleObject = {

            width: "" + actualWidth + actualType + "",
            height: "" + props.height + props.heightType + "",
            background: "url(" + backgroundImage + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"

        }

        return styleObject;

    }

    const getStyle2 = () => {

        let styleObject2 = {

            height: "" + props.height + props.heightType + "",
            width: "100%"

        }

        return styleObject2

    }

    const getStyle3 = () => {

        let styleObject3 = {

            width: "" + actualWidth + actualType + "",

        }

        return styleObject3

    }

    return (

        <>

            <div className="contentBoxWrapper">

                <div className={props.color.main + " " + props.color.border + ' whiteText contentBoxHeader'}>
                                
                    <div>{props.supportType}</div>

                </div>
                
                <div className={ props.color.border + ' contentBox2'} style={ getStyle(require("./../images/" + props.imageFile))}>

                    <a href={ props.link } target={props.linkTarget}>

                        <div className="nameBox" style={getStyle2()}>

                            <div className='nameBox1'>

                    

                            </div>

                            <div className='nameBox2'>

                                <img src={require("./../images/play-button.png")} width="90px" height="90px" alt="play button" />

                            </div>

                            <div className='nameBox3 blackText'>

                                <div >{ props.name }</div>

                            </div>

                        </div>

                    </a>
                    
                </div>

            </div>
   
        </>
        
    );

}
  
export default VideoContentBox;