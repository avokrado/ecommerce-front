import React from "react";
import { API } from "../config";

const ProductImage = ({ item, url }) => (
  <div className="product-image">
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      style={{ maxHeight: "250px", maxWidth: "100%" }}
      className="mb-3 product-img"
    />
  </div>
);

export default ProductImage;
