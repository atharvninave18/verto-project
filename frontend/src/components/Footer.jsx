// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "#d1d5db",
        padding: "30px 20px",
        textAlign: "center",
        marginTop: "40px",
        fontSize: "0.95rem",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <p style={{ margin: "0 0 8px 0", color: "#9ca3af" }}>
        &copy; {new Date().getFullYear()} <strong style={{ color: "#fff" }}>ShopVerto</strong>. All Rights Reserved.
      </p>
      <p style={{ margin: 0, fontSize: "0.85rem" }}>
        Built with ❤️ by Atharv Ninave
      </p>
    </footer>
  );
};

export default Footer;
