import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import pagamento from "../img1/img/cards.png";
import tdestino from "../img1/img/DESTINOSLOGO.png";
import Cartoes from "./Cards1/cartoes.js"


const Destino = () => {
    return (
        <div>
            <hr />
            <section class="container-destino">
                <div class="titulos">
                    <img src={tdestino} width={"350px"} alt="" class="img-fluid" />
                </div>
            </section>

            <Cartoes />


            <hr />
            <footer>
                <img src={pagamento} width={"550px"} alt="" class="img-fluid" />
            </footer>
        </div>
    )
}

export default Destino;