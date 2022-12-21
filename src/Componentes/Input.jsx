import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Input = ({ nombre, setNombre, password, setPassword }) => {  

        return (
        <div>
            <Form>
                <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <input className="form-control mb-3" type="text" placeholder="Ingrese nombre" id="nombre" value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <input className="form-control" type="password" placeholder="Contraseña" id="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                
            </Form>
        </div>
    )
}

export default Input