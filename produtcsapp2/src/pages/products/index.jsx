import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getDataProductsActions, sortedByPriceActions } from "../../redux/actions/products.actions";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './index.scss'
const Products = () => {
  const productsData = useSelector((state => state.productsReducer))
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getDataProductsActions(''))
  }, []);
  const [objData, setObjData] = useState([])
  const handleSearch = (name) => {
   dispatch(getDataProductsActions(name))
  }
  const handleSortByPrice = (obj) => {
    setObjData(obj.sort((a, b) => +a.price - +b.price))
    dispatch(sortedByPriceActions(objData))
  }
 
  return <div className="">
    <input type="text" placeholder="Search products" onChange={(e) => handleSearch(e.target.value)} />
    <button onClick={() => handleSortByPrice(productsData.data)}>Sort by Price</button>
 {productsData.loading 
 ? 
 'loading'
 : 
 <><div className="products">
  
  {productsData?.data?.map((element) => {
    return <div className="product">
       <Card key={element._id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={element.imgUrl} style={{ width: '250px' }} />
    <Card.Body>
      <Card.Title>{element.name}</Card.Title>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Productid: {element._id}</ListGroup.Item>
      <ListGroup.Item>Price: {element.price}</ListGroup.Item>
    </ListGroup>
      <Card.Text>
       Description: {element.description}
      </Card.Text>
      <Link to={`/products/${element._id}`}><Button variant="outline-info">View Details</Button>{' '}</Link>
    </Card.Body>
  </Card>
    </div>
  })}</div></>
 }

  </div>;
};

export default Products;
