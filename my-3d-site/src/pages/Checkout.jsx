import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
function Checkout() {
  const { cart } = useContext(CartContext);

  const [payment, setPayment] = useState("Cash On Delivery");
  const [order, setOrder] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [orderId] = useState(
    "HW-" +
      Math.floor(
        100000 + Math.random() * 900000
      )
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 80 : 0;
  const total = subtotal + shipping;

const placeOrder = async () => {

  if(!auth.currentUser){
    alert("Please login before placing order");
    return;
  }


  if (cart.length === 0) {
    alert("Your cart is empty");
    return;
  }

  if (
    !customerName.trim() ||
    !phone.trim() ||
    !address.trim()
  ) {
    alert("Please fill all required fields");
    return;
  }

  await addDoc(collection(db, "orders"), {
  orderId,
  customerName,
  phone,
  email,
  address,
  payment,
  total,
  cart,
  status: "Pending",

  userId: auth.currentUser.uid,

  createdAt: new Date()
});
  setOrder(true);
};

  if (order) {
    return (
      <>
        <Navbar />

        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "#f8fafc",
            padding: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "50px",
              borderRadius: "25px",
              boxShadow:
                "0 15px 40px rgba(0,0,0,.12)",
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontSize: "55px",
                color: "#16a34a",
              }}
            >
              ✓
            </h1>

            <h1>Order Confirmed</h1>

            <p
              style={{
                fontSize: "18px",
                color: "#64748b",
              }}
            >
              Thank you for shopping with
              HustleWear.
            </p>

            <h3>
              Order ID: {orderId}
            </h3>

            <p>
              Payment Method: {payment}
            </p>

            <p>
              Total Amount: ৳ {total}
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section
        style={{
          padding: "60px 20px",
          background: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
          }}
        >
          Checkout
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          {/* Delivery Info */}

          <div style={boxStyle}>
            <h2>
              Delivery Information
            </h2>

            <input
              placeholder="Full Name"
              value={customerName}
              onChange={(e) =>
                setCustomerName(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              style={inputStyle}
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              style={inputStyle}
            />

            <textarea
              placeholder="Full Address"
              rows="5"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              style={inputStyle}
            />
          </div>

          {/* Payment */}

          <div style={boxStyle}>
            <h2>Payment Method</h2>

            {[
              "Cash On Delivery",
              "Credit / Debit Card",
              "Mobile Banking",
            ].map((item) => (
              <div
                key={item}
                onClick={() =>
                  setPayment(item)
                }
                style={{
                  padding: "15px",
                  margin: "15px 0",
                  borderRadius: "12px",
                  cursor: "pointer",
                  border:
                    payment === item
                      ? "2px solid #0f172a"
                      : "1px solid #ddd",
                  background:
                    payment === item
                      ? "#e2e8f0"
                      : "white",
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Summary */}

          <div style={boxStyle}>
            <h2>Order Summary</h2>

            {cart.length === 0 ? (
              <p>No Product Added</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    marginBottom: "15px",
                  }}
                >
                  <span>
                    {item.name} ×{" "}
                    {item.quantity}
                  </span>

                  <span>
                    ৳{" "}
                    {item.price *
                      item.quantity}
                  </span>
                </div>
              ))
            )}

            <hr />

            <p>
              Subtotal: ৳ {subtotal}
            </p>

            <p>
              Shipping: ৳ {shipping}
            </p>

            <h2>
              Total: ৳ {total}
            </h2>

            <button
              onClick={placeOrder}
              style={{
                width: "100%",
                padding: "16px",
                background: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const boxStyle = {
  width: "350px",
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  boxShadow:
    "0 10px 30px rgba(0,0,0,.1)",
};

const inputStyle = {
  width: "100%",
  padding: "15px",
  margin: "10px 0",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "15px",
  boxSizing: "border-box",
};

export default Checkout;