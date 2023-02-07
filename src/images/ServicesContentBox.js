const BlogContentBox = (props) => {

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

   

    return (

        <>

            <div className="contentBoxWrapper">

                <div className={props.color.main + " " + props.color.border + ' whiteText contentBoxHeader'}>
                                
                    <div>{props.supportType}</div>
        
                </div>

                <a href={ props.link } target={props.linkTarget}>

                    <div className={ props.color.border + ' contentBox2'} style={ getStyle(require("./../images/" + props.imageFile))}>
                    
                        
                    </div>

                </a>

            </div>
   
        </>
        
    );

}
  
export default BlogContentBox;