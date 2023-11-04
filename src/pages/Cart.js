import React, { useContext } from 'react';
import { userContext } from '../App';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './Cart.css'; // Create a new CSS file for the centered items design

const Cart = () => {
  const { cart, setCart } = useContext(userContext);

  const remove = (id) => {
    const filterRem = cart.filter((item) => item.id !== id);
    setCart(filterRem);
  };

  const clear = () => {
    setCart([]);
  };

  const increment = (id) => {
    const newIncre = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(newIncre);
  };

  const decrement = (id) => {
    const newDecre = cart.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    setCart(newDecre);
  };

  const totalCartPrice = (item) => {
    return item.Price * item.qty;
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.Price * item.qty,
    0
  );

  return (
    <Container className="cart-container">
      <Row xs={1} md={2} lg={3} className="g-4 centered-items">
        {cart.map((item) => (
          <Col key={item.id}>
            <Card className="cart-item">
              <Card.Img variant="top" src={item.productImage} />
              <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Text>
                  <p>Price: {item.Price}</p>
                  <p>Qty: {item.qty}</p>
                  <Button
                    className="quantity-button"
                    onClick={() => increment(item.id)}
                  >
                    +
                  </Button>
                  <Button
                    className="quantity-button"
                    onClick={() => decrement(item.id)}
                  >
                    -
                  </Button>
                  <p>Total: {totalCartPrice(item)}</p>
                </Card.Text>
                <div>
                  <Button
                    variant="outline-primary"
                    className="remove-button"
                    onClick={() => remove(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-3 " style={{alignItems:'center', justifyContent:'center'}}>
        <h4>Total Price: {totalPrice}</h4>
        <Button onClick={clear} variant="outline-danger">
          Clear Cart
        </Button>
        <Button variant="outline-danger" className="mt-2">
          Buy Now
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
