const Navigation = (props) => {

    const selectionService = (e) => {

        const item = e.target;
        props.setSupportType(true);
        props.setSupportTypeName(item.innerHTML);

    }

    return (

        <>

            <nav>

                <button onClick={ selectionService } className='navBtn colorOneBg colorOneBorder'>

                    Mental Health
                    
                </button>

                <button onClick={ selectionService }  className='navBtn colorTwoBg colorTwoBorder'>

                    Drug or Alcohol Abuse
                
                </button>

                <button onClick={ selectionService }  className='navBtn colorThreeBg colorThreeBorder'>

                    Bereavement

                </button>

                <button onClick={ selectionService }  className='navBtn colorFourBg colorFourBorder'>

                    Domestic Abuse or Violence

                </button>

                <button onClick={ selectionService }  className='navBtn colorFiveBg colorFiveBorder'>

                    Financial Worries, Debt or Gambling

                </button>

            </nav>
   
        </>
        
    );

}
  
export default Navigation;