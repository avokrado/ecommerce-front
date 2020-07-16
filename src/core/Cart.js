import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getCart, removeItem } from "./cartHelpers";
import Card from "./Card";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [run, setRun] = useState(false);
  useEffect(() => {
    setProducts(getCart());
  }, [run]);

  const noProductsMessage = () => {
    return (
      <h2>
        Your cart is empty <br />
        <Link to="/shop">Continue shopping</Link>
      </h2>
    );
  };
  const showProducts = (products) => {
    return (
      <div>
        <h2>Your cart has {`${products.length}`} products</h2>
        {products.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  return (
    <Layout
      title="Shopping Cart"
      description="Manage your cart items"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-6">
          {products.length > 0 ? showProducts(products) : noProductsMessage()}
        </div>
        <div className="col-6">
          <h2 className="mb-4">Your cart summary</h2>
          <hr />
          <Checkout products={products} setRun={setRun} run={run} />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
