import React, { useContext } from "react";
import { userContext } from "../App";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BabyCloths = () => {
  const nav = useNavigate();

  const { product } = useContext(userContext);
  const cloth = product.filter((item) => item.category === "cloth");
  return (
    <div className="d-flex align-items-center justify-content-center flex-wrap">
      {cloth.map((item) => (
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
            <Card.Body style={{textAlign:'center'}}>
              <Card.Title>{item.productName}</Card.Title>
              <Card.Title>
                <p>Price:{item.Price}</p>
              </Card.Title>
              <Button variant="primary" onClick={() => nav(`/view/${item.id}`)}>
                View product
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default BabyCloths;
