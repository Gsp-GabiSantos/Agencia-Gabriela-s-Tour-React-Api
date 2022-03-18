import React, { useRef } from "react"
import { Modal, Button } from "react-bootstrap"
import api from '../../api'




export default function ModalEditar(props) {


  const nome = useRef()
  const foto = useRef()
  const preco = useRef()

  function UpdateDestino(event) {
    event.preventDefault()
    api.put("/destinos/update", {
      id: props.destino.id,
      nome: nome.current.value,
      foto: foto.current.value,
      preco: preco.current.value
    }).then(() => window.location.reload()).catch((err) => console.log(err))



  }




  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.destino.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body><form className="card-fix" onSubmit={UpdateDestino}>
        <label className="labels" for="Destino">Nome do destino:</label><br></br>
        <input required type="text" name="destinos" placeholder="Digite destino" ref={nome} defaultValue={props.destino.nome} /><br></br>

        <label className="labels" for="Nome">Valor do Destino:</label><br></br>
        <input required type="text" name="destinos" placeholder="Valor Destino" ref={preco} step="000.03" defaultValue={props.destino.preco} /><br></br>

        <label className="labels" for="tarifa">Imagem do Destino:</label><br></br>
        <input required type="text" name="tarifa" placeholder="Link da imagem" ref={foto} defaultValue={props.destino.foto} />

        <div>
          <img className="imagemAltered" src="https://viagemeturismo.abril.com.br/wp-content/uploads/2015/12/188153847.jpg?quality=70&strip=info" />
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="bi bi-trash"></i></a>
        </div>

        <Button variant="secondary" type="submit" >
          Enviar
        </Button>

      </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

  )

}





