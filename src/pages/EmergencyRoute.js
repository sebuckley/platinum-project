import { Link } from "react-router-dom";

const EmergencyRoute = () => {

    return (

    <>

    <main className='mainClass'>

        <Link to="/emergency/barnsley/">
            <div className="quarter barnsley"><div className='plateName'>I <span className="live">LIVE</span> IN <span className="live">BARNSLEY</span></div></div>
        </Link>
        <Link to="/emergency/doncaster/">
            <div className="quarter doncaster"><div className='plateName'>I <span className="live">LIVE</span> IN <span className="live">DONCASTER</span></div></div>
        </Link>

        <Link to="/emergency/rotherham/">
            <div className="quarter rotherham"><div className='plateName'>I <span className="live">LIVE</span> IN <span className="live">ROTHERHAM</span></div></div>
        </Link>

        <Link to="/emergency/sheffield/">
            <div className="quarter sheffield"><div className='plateName'>I <span className="live">LIVE</span> IN <span className="live">SHEFFIELD</span></div></div>
        </Link>

    </main>
    
    </>
    
    
    )

};
  
export default EmergencyRoute;