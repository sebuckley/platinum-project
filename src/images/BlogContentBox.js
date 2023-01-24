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

            

            <div className={ props.color + ' contentBox2'} style={ getStyle(require("./../images/" + props.imageFile))}>

                <a href={ props.link } target={props.linkTarget}>

                    <div className="nameBox5" style={getStyle2()}>

                        <div className={props.color + ' nameBox4'}>

                            <div >{ props.name }</div>

                        </div>

                    </div>

                </a>
                
            </div>
   
        </>
        
    );

}
  
export default BlogContentBox;