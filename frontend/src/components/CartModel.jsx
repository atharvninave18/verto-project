import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  clearCart,
  deleteItem,
} from "../redux/cartSlice";
import axios from "axios";
import { toast } from 'react-toastify';
const CartModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const itemsArray = Object.values(cartItems);

  const total = itemsArray.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    setTimeout(() => setIsVisible(true), 50);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
   
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  const modalWidth = windowWidth < 500 ? "90%" : "400px";

  const handleCheckout = async () => {
    const formattedCart = itemsArray.map((item) => ({
      productId: item._id,
      name: item.name,
      quantity: item.quantity,
    }));

    try {
      const res = await axios.post("http://localhost:5001/api/checkout", {
        cartItems: formattedCart,
        total: total.toFixed(2),
      });
     toast.success(res.data.message);
      dispatch(clearCart());
      handleClose();
    } catch (error) {
      toast.error('Checkout failed. Please try again.');
      console.error("Checkout error:", error);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "10px",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
      onClick={handleClose}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          width: modalWidth,
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "20px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          transform: isVisible
            ? "translateY(0)"
            : "translateY(100vh)", // slide from bottom
          transition: "transform 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ marginBottom: "16px", color: "#111827" }}>Your Cart</h2>

        {itemsArray.length === 0 ? (
          <p style={{ color: "#6b7280" }}>Your cart is empty.</p>
        ) : (
          <>
            {itemsArray.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                  padding: "10px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1 1 60%" }}>
                  <h4
                    style={{
                      margin: "0 0 4px 0",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#111827",
                      wordBreak: "break-word",
                    }}
                  >
                    {item.name}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.9rem",
                      color: "#6b7280",
                    }}
                  >
                    ₹{item.price.toFixed(2)}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flex: "1 1 40%",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    onClick={() => dispatch(decrementQuantity(item))}
                    style={{
                      padding: "4px 8px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      cursor: "pointer",
                      backgroundColor: "#f3f4f6",
                    }}
                  >
                    -
                  </button>
                  <span style={{ minWidth: "20px", textAlign: "center" }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item))}
                    style={{
                      padding: "4px 8px",
                      border: "1px solid #d1d5db",
                      borderRadius: "6px",
                      cursor: "pointer",
                      backgroundColor: "#f3f4f6",
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => { 
  dispatch(deleteItem(item)); 
  toast.info(`${item.name} removed from cart`); 
}}
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.1rem",
                    }}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: "16px",
                padding: "10px",
                borderTop: "1px solid #e5e7eb",
                textAlign: "right",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                Total: ₹{total.toFixed(2)}
              </p>
            </div>
          </>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleClose}
            style={{
              backgroundColor: "#e5e7eb",
              color: "#111827",
              padding: "8px 14px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Close
          </button>
          {itemsArray.length > 0 && (
            <button
              onClick={handleCheckout}
              style={{
                backgroundColor: "#2563eb",
                color: "#fff",
                padding: "8px 14px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
