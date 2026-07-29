import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      name: "Shirts",
      image: "/images/shirt1.jpg",
      link: "/shirts",
    },
    {
      name: "T-Shirts",
      image: "/images/tshirt1.jpg",
      link: "/tshirts",
    },
    {
      name: "Jerseys",
      image: "/images/jersey1.jpg",
      link: "/jerseys",
    },
    {
      name: "Pants",
      image: "/images/pant1.jpg",
      link: "/pants",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Explore Collections
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {categories.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                position: "relative",
                height: "350px",
                borderRadius: "25px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 15px 35px rgba(0,0,0,.15)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,.2))",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "25px",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    fontSize: "28px",
                    margin: 0,
                  }}
                >
                  {item.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;