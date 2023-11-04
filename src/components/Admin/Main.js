
import "./main.css";
import {BsPeopleFill} from 'react-icons/bs'

import {BiSolidShoppingBags, BiSolidHome, BiSolidUserDetail, BiCartAdd} from 'react-icons/bi'
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <container className="sideBar d-flex">

    <div className="sideContents">
          <div className="head">
            <h4>DASH BOARD</h4>
          </div>

            <ul>
          <div id="features">
              <li><Link to={'/customers'} className="text-decoration-none"><BsPeopleFill className=" mx-2"/>Customers</Link></li>
              <li><Link to={'/product'} className="text-decoration-none"><BiSolidShoppingBags className=" mx-2 fs-4"/>Products</Link></li>
              <li><Link to={"/"} className="text-decoration-none"><BiSolidHome className=" mx-2 fs-4" />Home</Link></li>
              <li><Link to={'/addproduct'} className="text-decoration-none"><BiCartAdd className="mx-2 fs-4"/>Add Product</Link></li>
              <li><Link to={'/about'} className="text-decoration-none"><BiSolidUserDetail className="mx-2 fs-3"/>About</Link></li>
          </div>
            </ul>
        </div>
      </container>
    </>
  )
  }
export default Main;
