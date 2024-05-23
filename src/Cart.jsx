import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, []);
  return <div>cart</div>;
};

export default Cart;
