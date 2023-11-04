import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Main from './Main'
import { userContext } from '../../App'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddProducts = () => {
  const nav = useNavigate()

  const {product, setProduct} = useContext(userContext)
  const [newproduct, setNewProduct] = useState({
    id: product.length+1,
    productImage: '',
        productName: '',
        Price: '',
        baby: ''
  })
 
const change = (e)=>{
 const {name,value} = e.target;
 setNewProduct({...newproduct, [name]:value,})
}


const addProduct = ()=>{
if(newproduct.productName && newproduct.Price && newproduct.baby){
  setProduct([...product,newproduct])
  setNewProduct({
    id: product.length+1,
    productImage: '',
        productName: '',
        Price: '',
        baby: ''
  }) 
  nav('/product')
  
}
else{
    toast.warning('please fill in all required fields')
   
}

}
  return (
    <div className="d-flex">
      <Main />

      <Container fluid className="mb-2" style={{ textAlign: "center" }}>
        <h1 className="mt-5" style={{ letterSpacing: "1rem" }}>
          ADD PRODUCT
        </h1>
        
        <hr />

        <Form >
          <label htmlFor="Image" style={{ letterSpacing: "0.2rem" }}>
            Product image :
          </label><br />
          
          <input
            type="text"
            name='productImage'
            value={newproduct.productImage}
            onChange={change}
            required
            className="ms-3 my-2"
            style={{ width: "80vh", height: "5vh", borderRadius: "4px" }}
          /><br />
          
          <br />
          <label htmlFor="" style={{ letterSpacing: "0.2rem" }}>
            Product Name :
          </label><br />
          
          <input
            type="text"
            name='productName'
            value={newproduct.productName}
            onChange={change}
            required
            className="ms-3 my-2"
            style={{ width: "80vh", height: "5vh", borderRadius: "4px" }}
          />
          <br />
          <br />
          <label htmlFor="" style={{ letterSpacing: "0.2rem" }}>
            Product Price :
          </label>
          <br />
          <input
            type="text"
            name='Price'
            value={newproduct.Price}
            onChange={change}
            required
            className="ms-3 my-2"
            style={{ width: "80vh", height: "5vh", borderRadius: "4px" }}
          />
          <br />
          <br />
          <label htmlFor="" style={{ letterSpacing: "0.2rem" }}>
            Item Category :
          </label>
          <br />
          <input
            type="text"
            name='baby'
            value={newproduct.category}
            onChange={change}
            required
            className="ms-3 my-2"
            style={{ width: "80vh", height: "5vh", borderRadius: "4px" }}
          />
          <br />
          <br />
        </Form>

        <Button className="bg-success" style={{ width: "50vh" }} onClick={addProduct}>
          Save
        </Button>
      </Container>
    </div>
  )
}

export default AddProducts