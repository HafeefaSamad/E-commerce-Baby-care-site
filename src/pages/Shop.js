import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';
import './Shop.css'; 
import {AiOutlineSearch} from 'react-icons/ai'

const Shop = () => {
  const { product, search, setSearch } = useContext(userContext);
  const nav = useNavigate();
  const searches = product.filter((item)=>{
    if(search===''){
    return item;
    }
    else if (item.productName.toLowerCase().includes(search.toLowerCase())){
      return item;
    }
    else{
      return '';
    }
  })

  return (
    <div>
      <div className=''>
       <div className='search mt-3'> 
              <input className='search-bar w-50' type='search'placeholder='search all products' aria-label='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
              <button className=' search-btn'><AiOutlineSearch/></button>
            </div>
            </div>

      <div className="d-flex align-items-center justify-content-center flex-wrap">
        {searches.map((item) => (
          <div
            className="d-flex align-items-center justify-content-center flex-wrap"
            key={item.id}
          >
            <Card
              className="p-3 m-2 product-card" 
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
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>{item.productName}</Card.Title>
                <Card.Title>
                  <p>Price: {item.Price}</p>
                </Card.Title>
                <Button variant="primary" onClick={() => nav(`/view/${item.id}`)}>
                  View product
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
