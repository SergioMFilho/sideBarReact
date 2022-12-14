import "./App.css";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Promo from "./components/Promo";

function App() {
  const toggle = document.getElementById("toggle");
  const [showButtonText, setShowButtonText] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  useEffect(() => {
    console.log(isToggleOpen);
  }, [isToggleOpen]);

  const altera_tamanho = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!showButtonText) {
      setTimeout(() => {
        setShowButtonText(!showButtonText);
      }, 500);
    } else {
      setTimeout(() => {
        setShowButtonText(!showButtonText);
      }, 200);
    }

    const x = document.getElementById("div");
    const menuIcon = document.getElementById("teste");
    const menuIcon2 = document.getElementById("teste2");
    const listItem = document.getElementById("listItem");

    if (x.style.width === "200px") {
      x.style.width = 70 + "px";
      menuIcon.style.visibility = "hidden";
      menuIcon2.style.visibility = "hidden";
    } else {
      x.style.width = 200 + "px";

      setTimeout(() => {
        menuIcon.style.visibility = "visible";
        menuIcon2.style.visibility = "visible";
      }, 500);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div id="div" className="aside">
          <button id="teste">
            <img src="./images/logo.svg" alt="" />
          </button>
          <div id="divButton">
            <button id="buttonAction" onClick={altera_tamanho}>
              <img src="./images/menu.svg" alt="" />
            </button>
          </div>

          <ul className="list">
            <li
              style={{ justifyContent: isMenuOpen ? "flex-start" : "center" }}
            >
              <img src="./images/search.svg" alt="" />{" "}
              <span>{isMenuOpen && "Buscar"}</span>
            </li>
            <li
              style={{ justifyContent: isMenuOpen ? "flex-start" : "center" }}
            >
              <img src="./images/grid.svg" alt="" />
              <span>{isMenuOpen && "Dashboard"}</span>
            </li>
            <li
              style={{ justifyContent: isMenuOpen ? "flex-start" : "center" }}
            >
              <img src="./images/pet.svg" alt="" />{" "}
              <span>{isMenuOpen && "Pets"}</span>
            </li>
            <li
              style={{ justifyContent: isMenuOpen ? "flex-start" : "center" }}
            >
              <img src="./images/user.svg" alt="" />
              <span>{isMenuOpen && "Clientes"}</span>
            </li>
            <li
              style={{ justifyContent: isMenuOpen ? "flex-start" : "center" }}
            >
              <img src="./images/vet.svg" alt="" />{" "}
              <span>{isMenuOpen && "Vets"}</span>
            </li>
            <li
              style={{ justifyContent: isMenuOpen ? "flex-start" : "center" }}
            >
              <img src="./images/settings.svg" alt="" />{" "}
              <span>{isMenuOpen && "Ajustes"}</span>
            </li>
          </ul>
          <div className="divMeio"></div>

          <button id="teste2">
            <img src="./images/photo.jpg" alt="" />
            <span>{"Veterin??rio\nS??rgio"}</span>
          </button>
          <div id="divButton2">
            <button id="buttonAction2" onClick={altera_tamanho}>
              <img src="./images/log-out.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="div2">
          <main>
            <section
              style={{ backgroundColor: isToggleOpen ? "gray" : "#2b2b2b" }}
            >
              {" "}
              <Switch
                onChange={(e) => {
                  setIsToggleOpen(e.target.checked);
                }}
                size="large"
              />
            </section>
            <section
              id="meio"
              style={{ backgroundColor: isToggleOpen ? "gray" : "#2b2b2b" }}
            >
              <h1>Conhe??a nossos planos</h1>
              <p id="pMeio">
                Conhe??a nossos servi??os e escolha o plano ideal para o seu pet.
              </p>
              <div id="content">
                <Promo
                  planType="Free"
                  benefits={["Tratamento B??sico"]}
                  price={0}
                />
                <Promo
                  planType="B??sico"
                  hasCustomHeader
                  benefits={["Tratamento B??sico", "Banho e tosa"]}
                  price={50}
                />{" "}
                {/* hasCutomHeader ?? igual hasCustomHeader = true*/}
                <Promo
                  planType="Profissional"
                  benefits={[
                    "Tratamento B??sico",
                    "Banho e tosa",
                    "Passeio especial",
                  ]}
                  price={100}
                />
              </div>
            </section>

            <section
              style={{ backgroundColor: isToggleOpen ? "gray" : "#2b2b2b" }}
            ></section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
