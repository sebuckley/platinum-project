const Navigation = (props) => {

    const selectionService = (e) => {

        resetClassName();

        const item = e.target;
        

        let clickedName = item.innerHTML;
        

        if(clickedName !== props.supportTypeName){

            props.setSupportType(true);
            props.setSupportTypeName(clickedName);

            let element = item.className;
            let elementSplit = element.split(" ");
            
            item.classList.remove(elementSplit[1]);
            item.classList.add(elementSplit[1].replace("Bg", ""));
            item.classList.add("whiteBg");

        }else{

            props.setSupportType(false);
            props.setSupportTypeName("");

        }

       

        

    }

    const resetClassName = () => {

        const numbers = ["One","Two","Three","Four","Five"];

        const navBtns = document.getElementsByClassName("navBtn");

        for(let i = 0; i < navBtns.length; i ++){

            navBtns[i].classList = "navBtn color" + numbers[i] + "Bg color" + numbers[i] + "Border"; 
  
            

        }

    }

    return (

        <>

            <nav>

                <button onClick={ selectionService } id='btnOne' className='navBtn colorOneBg colorOneBorder'>

                    Mental Health
                    
                </button>

                <button onClick={ selectionService } id='btnTwo' className='navBtn colorTwoBg colorTwoBorder'>

                    Drug or Alcohol Abuse
                
                </button>

                <button onClick={ selectionService } id='btnThree' className='navBtn colorThreeBg colorThreeBorder'>

                    Bereavement

                </button>

                <button onClick={ selectionService } id='btnFour' className='navBtn colorFourBg colorFourBorder'>

                    Domestic Abuse or Violence

                </button>

                <button onClick={ selectionService } id='btnFive' className='navBtn colorFiveBg colorFiveBorder'>

                    Financial Worries, Debt or Gambling

                </button>

            </nav>
   
        </>
        
    );

}
  
export default Navigation;