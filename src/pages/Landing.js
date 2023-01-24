import { Link } from "react-router-dom";

const Landing = () => {

  return (  
    
    <>

    <main className='mainClass'>

        
       
                
            <div className="emergency flex-bottom">

            <Link to="/emergency">
                    <div className="emergencyBtn flex-center">

                   
                    
                        <p>I need <span className='live'>help</span> now</p>

                    </div>

                    </Link>
                
             
            </div>

       
                
       

       

            <div className="route flex-bottom">
                
                <Link to="/support">

                    <div className="routeBtn flex-center">
                    
                        <p>what <span className='live'>support</span> is available</p>
                
                    </div>

                </Link>
            
            </div>

     

    </main>

    </>

  );

};

export default Landing;