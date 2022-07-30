import { Row, Card, Col, Container, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Compras} from '../redux/actions/index'

function Productos(params) {

    const allProducts = useSelector((state) => state.products)

    const dispatch = useDispatch();

    function handleClick(el) {
        console.log(el.target.id)
        const obj = [allProducts.find(e=>e.id===parseInt(el.target.id))]
        console.log(obj)
        dispatch(Compras(obj))
    }

    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {allProducts.map((e) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={e.image} height="150px"/>
                            <Card.Body>
                                <Card.Title>{e.name}</Card.Title>
                                <Card.Text>
                                <ProgressBar animated max={5} min={0} now={e.qualification} />
                                    <p>{e.qualification} ★</p>
                                    <p>tiempo de espera: {e.time}</p>
                                <Button onClick={handleClick} id={e.id}>adquirir</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}


export default Productos