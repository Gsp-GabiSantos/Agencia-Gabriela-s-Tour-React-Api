import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import pagamento from "../img1/img/cards.png";
import promocaot from "../img1/img/logo3.png";
import promocaot1 from "../img1/img/nacional (1).jpg";
import promocaot2 from "../img1/img/nacional (2).jpg";
import promocaot3 from "../img1/img/nacional (4).jpg";





const Promocao = () => {
  return (
    <div>
      <hr />

      <section class="container-destino">
        <div class="titulos">
          <img src={promocaot} width={"550px"} alt="" class="img-fluid" />
        </div>

        <section class="destinos">

          <div class="card" style={{ width: "25rem" }}>
            <img src={promocaot1} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Pão de Açucar - RJ</p>
              <font size={"4"}><strike>R$ 10.000,00</strike></font><br />
              <font size={"5"} color={"red"}>R$ 5.100,00</font>
            </div>
          </div>
          <div class="card" style={{ width: "25rem" }}>
            <img src={promocaot2} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Chapada dos Veadeiros - GO</p>
              <font size={"4"}><strike>R$ 10.000,00</strike></font><br />
              <font size={"5"} color={"red"}>R$ 5.100,00</font>
            </div>
          </div>
          <div class="card" style={{ width: "25rem" }}>
            <img src={promocaot3} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Maragogi - AL</p>
              <font size={"4"}><strike>R$ 10.000,00</strike></font><br />
              <font size={"5"} color={"red"}>R$ 5.100,00</font>
            </div>
          </div>
        </section>
      </section>
      <hr />
      <footer>
        <img src={pagamento} width={"550px"} alt="" class="img-fluid" />
      </footer>
    </div>

  );
}

export default Promocao;