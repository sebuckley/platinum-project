import { Link } from "react-router-dom";

const EmergencyRoute = () => {

    return (

    <>

    <main className='mainClass'>

        <Link to="/emergencyroute/barnsley/">
            <div className="quarter barnsley"><p>I<br></br> <span className="live">live</span><br></br> in <br></br><span className="live">Barnsley</span></p></div>
        </Link>
        <Link to="/emergencyroute/doncaster/">
            <div className="quarter doncaster"><p>I<br></br> <span className="live">live</span><br></br> in <br></br><span className="live">Doncaster</span></p></div>
        </Link>

        <Link to="/emergencyroute/rotherham/">
            <div className="quarter rotherham"><p>I<br></br> <span className="live">live</span><br></br> in <br></br><span className="live">Rotherham</span></p></div>
        </Link>

        <Link to="/emergencyroute/sheffield/">
            <div className="quarter sheffield"><p>I<br></br> <span className="live">live</span><br></br> in <br></br><span className="live">Sheffield</span></p></div>
        </Link>

    </main>
    
    </>
    
    
    )

};
  
export default EmergencyRoute;