import { ListGroup } from 'react-bootstrap';
import { useSelector } from "react-redux";


function Carrito(params) {
    const allCompras = useSelector((state) => state.compras)

    return (
        <>
            <ListGroup variant="flush">
                {allCompras.map((e) => {
                    return (
                        <ListGroup.Item>{e.name}</ListGroup.Item>
                    )
                })}
            </ListGroup>
        </>
    )
}
export default Carrito