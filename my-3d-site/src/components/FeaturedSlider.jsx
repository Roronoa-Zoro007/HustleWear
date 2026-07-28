import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedSlider() {
  const products = [
    {
      id: 1,
      name: "Premium Shirt",
      image: "/images/shirt.jpg",
      price: 1499,
    },
    {
      id: 2,
      name: "Luxury T-Shirt",
      image: "/images/tshirt.jpg",
      price: 999,
    },
    {
      id: 3,
      name: "Sports Jersey",
      image: "/images/jersey.jpg",
      price: 1299,
    },
    {
      id: 4,
      name: "Street Pants",
      image: "/images/pant.jpg",
      price: 1699,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === products.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(slider);
  }, [products.length]);

  return (
    <section
      style={{
        background: "#020617",
        color: "white",
        padding: "80px 30px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginBottom: "50px",
        }}
      >
        Featured Products
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            borderRadius: "30px",
            overflow: "hidden",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: "300px",
            }}
          >
            <img
              src={products[current].image}
              alt={products[current].name}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              flex: 1,
              padding: "50px",
              minWidth: "300px",
            }}
          >
            <p
              style={{
                color: "#38bdf8",
              }}
            >
              NEW ARRIVAL
            </p>

            <h1>{products[current].name}</h1>

            <h2>
              ৳ {products[current].price}
            </h2>

            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.8",
              }}
            >
              Premium quality streetwear
              designed for everyday confidence.
            </p>

            <Link
              to={`/product/${products[current].id}`}
            >
              <button
                style={{
                  marginTop: "20px",
                  padding: "15px 35px",
                  border: "none",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                View Product
              </button>
            </Link>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "25px",
          }}
        >
          {products.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                cursor: "pointer",
                background:
                  current === index
                    ? "white"
                    : "#475569",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSlider;