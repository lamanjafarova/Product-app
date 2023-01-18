import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteActions } from "../../redux/actions/products.actions";

const ProductsDetail = () => {
    const [detailsData, setDetailsData] = useState([]);
    const productsData = useSelector((state => state.productsReducer))
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`).then((response) => {
            setDetailsData(response.data)
        })  
    }, []);
    console.log(detailsData);
    const { id } = useParams()
    const navigate = useNavigate()
    const handleDelete = (id) => {
      dispatch(deleteActions(id))
      navigate("/")
    }
  return <div>
     <Card key={detailsData._id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={detailsData.imgUrl} />
    <Card.Body>
      <Card.Title>{detailsData.name}</Card.Title>
      <ListGroup className="list-group-flush">
      <ListGroup.Item>Productid: {detailsData._id}</ListGroup.Item>
      <ListGroup.Item>Price: {detailsData.price}</ListGroup.Item>
    </ListGroup>
      <Card.Text>
       Description: {detailsData.description}
      </Card.Text>
      <Button onClick={() => navigate(-1)} variant="outline-secondary">Back</Button>{' '}
      <Button onClick={() => handleDelete(detailsData._id)} variant="outline-secondary">Delete</Button>{' '}
    </Card.Body>
  </Card>
  </div>;
};

export default ProductsDetail;
