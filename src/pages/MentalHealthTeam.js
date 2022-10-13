const MentalHealthTeam = (props) => {

    return (

        <>

            <div className='callNowWrapperWhite'>

                <h3>Call the { props.location } Crisis team</h3>

                <p><a className='emergencyContactWhite' href={ "tel:" + props.number } > { props.number }</a></p>

                <p className="smallText">You can speak with your local mental health team for further support</p>
                
            </div>
   
        </>
        
    );

}
  
export default MentalHealthTeam;