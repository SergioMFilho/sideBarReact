
import './App.css';
import {useState} from 'react';

function App() {
  const [showButtonText,setShowButtonText] = useState(false)
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const altera_tamanho = () => {
    setIsMenuOpen(!isMenuOpen)

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
    const menuIcon2 = document.getElementById('teste2')
    const listItem = document.getElementById('listItem')

    if(x.style.width === "180px"){
        // listItem.style.justifyContent = "flex-start"
        x.style.width = 70 + 'px'
        menuIcon.style.visibility = 'hidden'
        menuIcon2.style.visibility = 'hidden'
    } else {
        // listItem.style.justifyContent = "center"
        x.style.width = 180 + 'px'

       setTimeout(() => {
        menuIcon.style.visibility = 'visible'
        menuIcon2.style.visibility = 'visible'
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
                <li style={{justifyContent: isMenuOpen ? "flex-start" : "center"}}><img src="./images/search.svg" alt=""/> {isMenuOpen && "Buscar"}</li>
                <li style={{justifyContent: isMenuOpen ? "flex-start" : "center"}}><img src="./images/grid.svg" alt=""/>{isMenuOpen && "Dashboard"}</li>
                <li style={{justifyContent: isMenuOpen ? "flex-start" : "center"}}><img src="./images/pet.svg" alt=""/> {isMenuOpen && "Pets"}</li>
                <li style={{justifyContent: isMenuOpen ? "flex-start" : "center"}}><img src="./images/user.svg" alt=""/>{isMenuOpen && "Clientes"}</li>
                <li style={{justifyContent: isMenuOpen ? "flex-start" : "center"}}><img src="./images/vet.svg" alt=""/> {isMenuOpen && "Vets"}</li>
                <li style={{justifyContent: isMenuOpen ? "flex-start" : "center"}}><img src="./images/settings.svg" alt=""/> {isMenuOpen && "Ajustes"}</li>
            </ul>
            <div className='divMeio'></div>
            
            <button id='teste2'><img src="./images/photo.jpg" alt="" /><span>{'Veterinário\nSérgio'}</span></button>
            <div id='divButton2'>
            <button id="buttonAction2" onClick={altera_tamanho}><img src="./images/log-out.svg" alt=""/></button>
            </div>
        
        </div>
        <div className='div2'></div>
    </div>
   
    </div>
  )
}

export default App
