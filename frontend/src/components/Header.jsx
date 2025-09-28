
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartModal from "./CartModel";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = Object.values(cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <>
      <header
        style={{
          backgroundColor: "#111827",
          color: "#fff",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
       
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
        >
          🛍 ShopVerto
        </span>

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
       

          
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              position: "relative",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
              color: "#fff",
            }}
          >
            🛒
            {totalItems > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 7px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                {totalItems}
              </span>
            )}
          </button>
        </nav>
      </header>

     
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Header;
