import React from "react";

const GetDate = () => {

    const getDay = () => {

        let end;

        const d = new Date();
        let day = d.getDate();

        if(day === 1 ||  day === 21 || day === 31){

            end ="st";

        }else if(day === 2 ||  day === 22) {
            
            end ="nd";

        }else if(day === 3 ||  day === 23) {
     
            end ="rd";

        }else{

            end ="th";

        }

        return day + end;

    }


    const getDayName = () => {

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const d = new Date();
        let day = days[d.getDay()];

        return day;

    }

    const getMonth = () => {

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const d = new Date();
        let month = months[d.getMonth()];

        return month;
        
    }

    const getYear = () => {

        const d = new Date();
        let year =  d.getFullYear();
        return 	year;
        
    }
    

    return (

        <>  
            <p>

                { getDayName() + " " + getDay() + " " + getMonth() + " " + getYear() }

            </p>
           
        </>

    )

}
  
export default GetDate;