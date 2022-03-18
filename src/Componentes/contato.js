import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import cards from "../img1/img/cards.png";
import contato from "../img1/img/faleconosco.png";
import email from "../img1/img/mail.png";
import telefone from "../img1/img/telefone logo.png";
import zap from "../img1/img/zap.png";
import pagamento from "../img1/img/cards.png";




const Contato = () => {
    return (
        <div>
            <hr />
            <section class="form">
                <div>
                    <img src={contato} width={"350px"} alt="" class="img-fluid" />
                </div>
                <div class="form-box">
                    <div class="mb-2">
                        <label for="exampleFormControlInput1" class="form-label">Nome completo:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="gabriela cristina da silva" />
                        <label for="exampleFormControlInput1" class="form-label">Email address:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-1">
                        <label for="exampleFormControlTextarea1" class="form-label">Tire suas dúvidas conosco</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                        <input type="button" class="button" value="Enviar" />
                    </div>
                </div>



            </section>
            <hr />
            <section class="contatos">
                <div class="contact-img">
                    <img src={email} class="img-fluid" alt="" />
                    <p>contatogabrielatour@gmail.com</p>
                </div>

                <div class="contact-img">
                    <img src={telefone} class="img-fluid" alt="" />
                    <p>55 +21 9 9234-5678</p>
                </div>

                <div class="contact-img">
                    <img src={zap} class="img-fluid" alt="" />
                    <p>55 +21 7894-1234</p>
                </div>
            </section>



            <footer>
                <img src={pagamento} width={"550px"} alt="" class="img-fluid" />
            </footer>
            <div />
        </div>
    );
}

export default Contato;


