import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      title: "Shirts",
      image: "/images/shirt.jpg",
      link: "/shirts",
    },
    {
      title: "T-Shirts",
      image: "/images/tshirt.jpg",
      link: "/tshirts",
    },
    {
      title: "Jerseys",
      image: "/images/jersey.jpg",
      link: "/jerseys",
    },
    {
      title: "Pants",
      image: "/images/pant.jpg",
      link: "/pants",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 30px",
        background: "#020617",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#38bdf8",
            letterSpacing: "3px",
          }}
        >
          SHOP BY CATEGORY
        </p>

        <h2
          style={{
            textAlign: "center",
            fontSize: "55px",
            marginBottom: "60px",
          }}
        >
          Explore Collections
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {categories.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "420px",
                  overflow: "hidden",
                  borderRadius: "30px",
                  cursor: "pointer",
                  background: "#1e293b",
                  boxShadow:
                    "0 20px 40px rgba(0,0,0,.35)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.5s",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top,rgba(0,0,0,.8),transparent)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "25px",
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      fontSize: "32px",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <span
                    style={{
                      color: "#38bdf8",
                    }}
                  >
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;