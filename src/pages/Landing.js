import { Link } from "react-router-dom";


const Landing = () => {



  return (  
    
    <>

    <main className='mainClass'>

        <Link to="/emergencyroute">

            <div className="emergency flex-bottom">
                
                <div className="emergencyBtn flex-center">
                
                    <p>I need<br></br> <span className='live'>help</span> <br></br>now</p>
            
                </div>
                
            </div>

        </Link>

        <Link to="/normalroute">

            <div className="route flex-top">
                
                <div className="routeBtn flex-center">
                
                    <p>what<br></br><span className='live'>support</span><br></br>  is available</p>
            
                </div>
            
            </div>

        </Link>

    </main>

    </>

  );

};

export default Landing;