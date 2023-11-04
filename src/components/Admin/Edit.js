import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../../App";
import { Button, Container, Form } from "react-bootstrap";
import Main from "./Main";

const Edit = () => {
    const navigate=useNavigate();
  const { id } = useParams();
  const { product, setProduct } = useContext(userContext);
  const edit = product.find((item) => item.id === parseInt(id));

  const [image, setImage] = useState(edit.productImage)
  const [name, setName] = useState(edit.productName)
  const [price, setPrice] = useState(edit.Price)
  const [category, setCategory] = useState(edit.category)

  const submit = (e)=>{
    e.preventDefault();

    const subButton = {
        ...edit,
        productImage: image,
        productName: name,
        Price: price,
        baby: category
    }

    const update = product.map((item)=>
        item.id === parseInt(id)? subButton : item
        )
        setProduct(update)
        navigate('/product')
        
    }


  return (
    <div className="d-flex">
      <Main />

      <Container fluid className="mb-2" style={{ textAlign: "center" }}>
        <h1 className="mt-5" style={{ letterSpacing: "1rem" }}>
          EDIT PRODUCT
        </h1>
        
        <hr />

        <Form >
          <label htmlFor="Image" style={{ letterSpacing: "0.2rem" }}>
            Product image :
          </label><br />
          
          <input
            type="text"
            name="productImage"
            className="ms-3 my-2"
            style={{ width: "80vh", height: "5vh", borderRadius: "4px" }}
            defaultValue={edit.productImage}
            onChange={(e)=>setImage(e.target.value)}
          /><br />
          
          <br />
          <label htmlFor="" style={{ letterSpacing: "0.2rem" }}>
            Product Name :
          </label><br />
          
          <input
            type="text"
            name="productName"
            className="ms-3 my-2"
            style={{ width: "80vh", height: "5vh", borderRadius: "4px" }}
            defaultValue={edit.productName}
            onChange={(e)=>setName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="" style={{ letterSpacing: "0.2rem" }}>
            Product Price :
          </label>
          <br />
          <input
            type="text"
            name="Price"
            className="ms-3 my-2"
            style={{ width: "80vh", height: "5vh", borderRadius: "4px" }}
            defaultValue={edit.Price}
            onChange={(e)=>setPrice(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="" style={{ letterSpacing: "0.2rem" }}>
            Item Category :
          </label>
          <br />
          <input
            type="text"
            name="baby"
            className="ms-3 my-2"
            style={{ width: "80vh", height: "5vh", borderRadius: "4px" }}
            defaultValue={edit.baby}
            onChange={(e)=>setCategory(e.target.value)}
          />
          <br />
          <br />
        </Form>

        <Button className="bg-success" style={{ width: "50vh" }} onClick={submit}>
          Save
        </Button>
      </Container>
    </div>
  );
};

export default Edit;
