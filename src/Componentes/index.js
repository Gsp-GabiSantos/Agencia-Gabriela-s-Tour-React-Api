
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import pagamento from "../img1/img/cards.png";
import logo1 from "../img1/img/logo2.png";
import foto1 from "../img1/img/img1 (1).jpg";
import foto2 from "../img1/img/img1 (2).jpg";
import foto3 from "../img1/img/img1 (3).jpg";

const Index = () => {
    return (
        <div>
            <hr />

            <section class="main-section">
                <div class="top-sec">
                    <img src={logo1} alt="" width={"630px"} class="img-fluid" />
                    <h2>Só aqui você encontra os melhores destinos e preços para sua viagem!</h2>
                    <h3>Viva essas experiências você também!
                    </h3>
                </div>
            </section>


            <section class="cards">
                <div class="card" style={{ width: "28rem" }}>
                    <img src={foto1} class="card-img-top" alt="..." />
                </div>
                <div class="card" style={{ width: "28rem" }}>
                    <img src={foto2} class="card-img-top" alt="..." />
                </div>
                <div class="card" style={{ width: "28rem" }}>
                    <img src={foto3} class="card-img-top" alt="..." />
                </div>
            </section>


            <section class="about">
                <div class="sobre">
                    <h3>"Viajar: primeiro te deixa sem palavras, depois te torna um contador de histórias."</h3>
                </div>
            </section>



            <footer>
                <img src={pagamento} width={"550px"} alt="" class="img-fluid" />
            </footer>
        </div>

    );
}

export default Index;
