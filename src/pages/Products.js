import React, { useEffect, useState } from "react";
import axios from "axios";
import { ADD } from "./../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const [doc, setDoc] = useState();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.data);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchItems();
  }, []);

  function fetchItems() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      setDoc(response.data);
    });
  }

  const handleClick = () => {
    dispatch({
      type: ADD,
      payload: doc,
    });
  };

  console.log(counter.title);
  return (
    <div className="products">
      <button onClick={handleClick}> hello</button>
      <h1>Products</h1>
      {counter.map((el, index) => {
        return (
          <div key={index} className="products-info">
            <h1>{el.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
