import { Nav } from 'react-bootstrap'
import { useSelector } from "react-redux";


function Categorias(params) {

    const allCategories = useSelector((state) => state.categories)
    console.log(allCategories)

    return (
        <>
            <Nav fill variant="tabs" >
                {allCategories.map((e) => {
                    return (
                        <Nav.Item>
                            <Nav.Link key={e.id} eventKey={e.id}>{e.name}</Nav.Link>
                        </Nav.Item>
                    )
                })}
            </Nav>

        </>
    )
}
export default Categorias