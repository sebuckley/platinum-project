import { useState } from "react";
import SamaritansPartPhone from "./SamaritansPhone.js";
import SamaritansPartEmail from "./SamaritansEmail.js";
import UnsafeLifeAtRisk from "./UnsafeLifeAtRisk.js";
import ShoutPart from "./Shout.js";
import NHSPart from "./NHS.js";
import MentalHealthTeam from "./MentalHealthTeam.js";

const EmergencyRouteRotherham = () => {

    const [route, setRoute] = useState("");
    
    const setPart =  () => {

        if(route !== ""){

            if(route === "critical"){

                return <UnsafeLifeAtRisk />

            }else{

                return (

                    <>
                
                    <SamaritansPartPhone />

                    <div className="thirdWrapper">

                        <ShoutPart />

                        <NHSPart />

                        <SamaritansPartEmail />

                    </div>

                    <MentalHealthTeam location='Rotherham' number="0800 804 8999"/>

                    </>


                );

            }

        }

    }

    return (

        <>
    
            <main className="pageWrapper">

                <h1 class='emergencyHeaderText'>Rotherham Emergency Support</h1>

                <div className='emergencyButtonsWrapperOuter'>

                    <label className="emergencyText">Is this an <b>EMERGENCY</b> where you or someone else is unsafe or life is at risk?</label>

                    <div className='emergencyButtonWrapper'>

                        <button type="button" onClick={()=> setRoute("critical")} className='emergencyButton yes'>Yes</button><button type="button" onClick={()=> setRoute("nonecritical")} className='emergencyButton no'>No</button>

                    </div>

                </div>

                

                { 
                
                   setPart()
                
                }

                

            </main>

        </>
    
    
    )

};
  
export default EmergencyRouteRotherham;