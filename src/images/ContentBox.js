import { Link } from 'react-router-dom';

const IconContentBox = (props) => {

    console.log(props.heightType);

    const getStyle = () => {

        let styleObject = {

            width: "" + props.width + props.widthType + "",
            height: "" + props.height + props.heightType + "",
        }

        return styleObject;

    }

    return (

        <>
            

            <div className={ props.color.main + ' contentBox'} style={ getStyle()}>

                <Link to={ props.link } target={props.linkTarget}>

                    <div className="leftBox">

                        <img  className="boxImage" src={require("./../images/" + props.imageFile)} width='auto' height='100%' alt={props.imageAlt}/>

                    </div>

                    <div className="rightBox">

                        <div>

                            <span>{ props.name }</span>

                        </div>

                    </div>

                </Link>
                
            </div>

           
   
        </>
        
    );

}
  
export default IconContentBox;