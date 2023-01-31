import { Link } from "react-router-dom";

const Support = () => {

    return (

        <>

            <main className='mainClass2'>
    
                <Link to="/support/barnsley/">
                    <div className="quarter barnsley"><div className='plateName'>I <span className="live">LIVE</span> IN <span className="live">BARNSLEY</span></div></div>
                </Link>
                <Link to="/support/doncaster/">
                    <div className="quarter doncaster"><div className='plateName'>I <span className="live">LIVE</span> IN <span className="live">DONCASTER</span></div></div>
                </Link>
        
                <Link to="/support/rotherham/">
                    <div className="quarter rotherham"><div className='plateName'>I <span className="live">LIVE</span> IN <span className="live">ROTHERHAM</span></div></div>
                </Link> 
        
                <Link to="/support/sheffield/">
                    <div className="quarter sheffield"><div className='plateName'>I <span className="live">LIVE</span> IN <span className="live">SHEFFIELD</span></div></div>
                </Link>

            </main>
        
        </>
        
        
        )

};
  
export default Support;