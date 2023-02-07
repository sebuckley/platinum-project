const BlogContentBox = (props) => { 

    const getStyle = (backgroundImage) => {

        let styleObject = {

            background: "url(" + backgroundImage + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"

        }

        return styleObject;

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