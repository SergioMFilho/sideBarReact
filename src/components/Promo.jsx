import './Promo.css';
import Button from '@mui/material/Button';

export default function Promo(props) {

    return (
        <div className='promo'>
            
            <div style={{backgroundColor: props.hasCustomHeader?'#FFCC29': '#fff'}} className='customHeader'>
                <h1 id='h1Component'> {props.planType} </h1>
                {props.hasCustomHeader && <button id='popularButton'> <span>Popular</span> </button>}
            </div>
            <div className='cardBody'>
                <h2>R$ {props.price}<span>,00</span><span>/mês</span> </h2>

                    <p id='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div className = 'bar'/>
                <div className='checks'>        
                    {props.benefits.map((item) => {
                       return    <p><img src="./images/check.svg" alt="" />{item}</p>
                    })}
                    
                </div>
                <div className='divButtonFree'>
                    <Button variant={props.hasCustomHeader ? 'contained':'outlined'} >Subscribe</Button>
                    </div>
                
            </div>
        </div>
    )
}

