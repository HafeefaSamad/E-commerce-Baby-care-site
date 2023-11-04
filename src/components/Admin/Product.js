import React, { useContext } from 'react'
import Main from './Main'
import { Button, Container, Table } from 'react-bootstrap'
import { userContext } from '../../App'
import { Link } from 'react-router-dom'

const Product = () => {
    const {product, setProduct} = useContext(userContext)
    const Remove = (id)=>{
        const removeItem = product.filter((item)=>item.id !==id)
        setProduct(removeItem)
    }
  return (
    <div className='d-flex'>
        <Main />

        <Container fluid className='mt-3' style={{overflow:'scroll', height:'90vh'}}>
            <h1 className='mb-4' style={{textAlign:'center'}}>All Products</h1><hr />
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                    </tr>
                {
                    product.map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.productName}</td>
                            <td><img alt='' style={{height:'3rem'}} src={item.productImage} /></td>
                            <td>{item.Price}</td>
                            <td >
                               <Link to={`/edit/${item.id}`}><Button className='mb-2 '>Edit</Button></Link>
                                <Button className='bg-danger'onClick={()=>Remove(item.id)}>Remove</Button>
                            </td>
                        </tr>
                    ))
                }

</thead>
            </Table>
        </Container>
    </div>
  )
}

export default Product