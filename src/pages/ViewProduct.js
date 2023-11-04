import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../App";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";

const ViewProduct = () => {
  const nav = useNavigate();
  const { login,cart,setCart,product } = useContext(userContext);
  const { id } = useParams();
  const findId = product.filter((item) => item.id === parseInt(id));

    const addCart=()=>{
        if(login){
            const [newAr]=findId
            const filterCart = cart.filter((item)=>item.id===newAr.id)
            if(filterCart.length>0){
                toast.warning('Product is already added')
            }
            else{
                setCart(prevState=>[...prevState,newAr])
                toast.success('Success fully added')
                nav('/cart')
            }
        }
        else{
          toast.warn('Please Login')
            nav('/login')
        }
    }

  return (
    <div className="d-flex align-items-center justify-content-center flex-wrap">
      {findId.map((item) => (
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          <Card
            className="p-3 m-2"
            style={{
              width: "18rem",
              height: "28rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Card.Img
              variant="top"
              src={item.productImage}
              style={{ height: "18rem" }}
            />
            <Card.Body>
              <Card.Title>{item.productName}</Card.Title>
              <Card.Title>
                <p>Price:{item.Price}</p>
              </Card.Title>
              <Button variant="primary" onClick={addCart}>
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ViewProduct;
