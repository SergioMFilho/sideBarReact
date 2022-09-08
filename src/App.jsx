
import './App.css';
import {useState} from 'react';

function App() {
  const [showButtonText,setShowButtonText] = useState(false)
  const altera_tamanho = () => {
    
    if (!showButtonText) {
      setTimeout(() => {
        setShowButtonText(!showButtonText)
        
      },500)
    } else{
      setTimeout(() => {
        setShowButtonText(!showButtonText)
        
      },200)
    }
  

    const x = document.getElementById('div')
    const menuIcon = document.getElementById('teste')
    if(x.style.width === "180px"){
        x.style.width = 70 + 'px'
        menuIcon.style.visibility = 'hidden'
    } else {
        x.style.width = 180 + 'px'

       setTimeout(() => {
        menuIcon.style.visibility = 'visible'
       },500)
    }

}

  return (
    <div className="App">
       <div className="container">
        <div id="div" className="aside">
            <button id="teste" ><img src="./images/logo.svg" alt=""/></button>
            <div id="divButton">
            <button id="buttonAction" onClick={altera_tamanho}><img src="./images/menu.svg" alt=""/></button>
            </div>
            
            <ul className="list">
                <li><img src="./images/search.svg" alt=""/> {showButtonText && "Buscar"}</li>
                <li><img src="./images/grid.svg" alt=""/>{showButtonText && "Dashboard"}</li>
                <li><img src="./images/pet.svg" alt=""/> {showButtonText && "Pets"}</li>
                <li><img src="./images/user.svg" alt=""/>{showButtonText && "Clientes"}</li>
                <li><img src="./images/vet.svg" alt=""/> {showButtonText && "Vets"}</li>
                <li><img src="./images/settings.svg" alt=""/> {showButtonText && "Ajustes"}</li>
            </ul>
        </div>
        <div className="dashBoard">swswsw</div>
     
    </div>
    </div>
  )
}

export default App
