import './cartoes.css'
import api from '../../api'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import ModalEditar from '../ModalDestino'

const Cartoes = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (destino) => {
        setShow(true);
        setDestinoUpdate(destino)
    }


    const [destino, setDestino] = useState([])
    const [destinoUpdate, setDestinoUpdate] = useState()







    const nome = useRef()
    const foto = useRef()
    const preco = useRef()



    function enviar(event) {
        event.preventDefault()

        api.post("/destinos/", {
            nome: nome.current.value,
            foto: foto.current.value,
            preco: preco.current.value
        }).then(() => window.location.reload()).catch((err) => console.log(err))


    }

    useEffect(() => {
        api.get('/destinos')
            .then((res) => {
                setDestino(res.data)

            })
            .catch((erro) => console.log(erro))

    }, [])

    function deletar(btn) {
        api.delete(`/destinos/${btn.target.value}`)
            .then(() => api.get('/destinos').then((res) => setDestino(res.data))
                .catch((err) => console.log(err))).catch((err) => console.log(err))

    }









    return (

        <div class="cards-cadastros">
            <div class="card-int">

                <form className="card-fix" onSubmit={enviar}>
                    <label className="labels" for="Destino">Nome do destino:</label>
                    <input required type="text" name="destinos" placeholder="Digite destino" ref={nome} />

                    <label className="labels" for="Nome">Valor do Destino:</label>
                    <input required type="text" name="destinos" placeholder="Valor Destino" ref={preco} step="000.03" />

                    <label className="labels" for="tarifa">Imagem do Destino:</label>
                    <input required type="text" name="tarifa" placeholder="Link da imagem" ref={foto} />

                    <div >
                        <img className="imagemAltered" src="https://viagemeturismo.abril.com.br/wp-content/uploads/2015/12/188153847.jpg?quality=70&strip=info" />
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="bi bi-trash"></i></a>
                    </div>
                    <input type="submit" class="btn" value="CADASTRAR" />
                    <br></br>
                </form>
            </div>
            <br></br>



            <div class="card-int">
                {destino.map((destino) => (

                    <form className="card-fix" key={destino.id} onClick={() => handleShow(destino)}>
                        <label className="labels" class="fontelabel" for="Destino: ">{destino.nome}</label>


                        <label className="labels" class="fontelabel" for="Nome: ">R$ {destino.preco}</label>



                        <div class="botao">
                            <img src={destino.foto} alt="..." class="img-thumbnail" style={{ width: "30rem" }} />
                            <br></br>
                            <button type="button" class="btn btn-link large material-icons"
                                value={destino.id} onClick={(btn) => deletar(btn)}

                            >
                                delete
                            </button>

                        </div>

                    </form>
                ))}

                {show ? < ModalEditar show={show} handleClose={handleClose} destino={destinoUpdate} /> : <> </>}
            </div>
        </div>

    )
}
export default Cartoes