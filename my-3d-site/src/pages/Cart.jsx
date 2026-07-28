import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 120 : 0;
  const grandTotal = total + shipping;

  return (
    <>
      <Navbar />

      <section
        style={{
          padding: "60px 30px",
          minHeight: "100vh",
          background: "#0f172a",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "50px",
          }}
        >
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            <h1 style={{ fontSize: "80px" }}>🛒</h1>

            <h2>Your Cart Is Empty</h2>

            <p style={{ color: "#94a3b8" }}>
              Add products to start shopping.
            </p>

            <Link to="/shop">
              <button
                style={{
                  marginTop: "20px",
                  padding: "15px 35px",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "700px",
              }}
            >
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "20px",
                    background: "#1e293b",
                    padding: "20px",
                    borderRadius: "20px",
                    marginBottom: "20px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "140px",
                      height: "160px",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <h2>{item.name}</h2>

                    <p>Size: {item.size}</p>

                    <p>Color: {item.selectedColor}</p>

                    <h3>৳ {item.price}</h3>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        marginTop: "15px",
                      }}
                    >
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        -
                      </button>

                      <strong>{item.quantity}</strong>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      style={{
                        marginTop: "15px",
                        background: "#ef4444",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                width: "350px",
                background: "#1e293b",
                padding: "30px",
                borderRadius: "25px",
                height: "fit-content",
              }}
            >
              <h2>Order Summary</h2>

              <hr />

              <p>Subtotal: ৳ {total}</p>

              <p>Shipping: ৳ {shipping}</p>

              <hr />

              <h1>৳ {grandTotal}</h1>

              <Link to="/checkout">
                <button
                  style={{
                    width: "100%",
                    padding: "15px",
                    marginTop: "20px",
                    border: "none",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Cart;