// components/ProductCard.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
 
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
      }}
    >
     
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      />


      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "600",
          color: "#111827",
          marginBottom: "8px",
        }}
      >
        {product.name}
      </h3>
      <p
        style={{
          fontSize: "0.9rem",
          color: "#6b7280",
          flexGrow: 1,
          marginBottom: "12px",
        }}
      >
        {product.description}
      </p>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "1rem",
          marginBottom: "12px",
          color: "#111827",
        }}
      >
        ₹{product.price.toFixed(2)}
      </p>


      <button
        onClick={() => (
            toast.success(`${product.name} added to cart!`),
            dispatch(addToCart(product)))}
        style={{
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "0.95rem",
          fontWeight: "500",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
