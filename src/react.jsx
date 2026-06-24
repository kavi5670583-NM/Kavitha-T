import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Mobile", price: 20000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: 2000, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Smart Watch", price: 5000, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Keyboard", price: 1500, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Mouse", price: 800, image: "https://via.placeholder.com/150" },
  ];

  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className={darkMode ? "dark app" : "app"}>
      <header>
        <h1>🛒 My Shop</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </header>

      <h2>Products</h2>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <h2>🛒 Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>
                {item.name} x {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <button
            className="checkout"
            onClick={() =>
              alert("Order Placed Successfully ✅")
            }
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default App;