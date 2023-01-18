import React from "react";
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { addProductsAction } from "../../redux/actions/products.actions";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
      imgUrl: '',
    },
    onSubmit: values => {
      dispatch(addProductsAction(values))
      console.log(values);
      // navigate("/")
    },
  });
  return <div>
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name">Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="price"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <label htmlFor="description">Description</label>
       <input
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.description}
       />
        <label htmlFor="imgUrl">Image Url</label>
       <input
         id="imgUrl"
         name="imgUrl"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.imgUrl}
       />
       <button type="submit">Submit</button>
     </form>
  </div>;
};

export default AddProducts;
