import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


function OrderSuccess(){

  const orderId = Math.floor(
    Math.random() * 90000
  ) + 10000;


  return(

    <>

    <Navbar/>


    <div
    style={{
      minHeight:"80vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"40px"
    }}
    >


      <div

      style={{
        width:"450px",
        textAlign:"center",
        padding:"40px",
        background:"#f8fafc",
        borderRadius:"20px",
        boxShadow:"0 10px 30px rgba(0,0,0,0.1)"
      }}

      >


        <h1
        style={{
          fontSize:"40px"
        }}
        >
          ✅
        </h1>


        <h1>
          Order Successful!
        </h1>


        <p
        style={{
          fontSize:"18px"
        }}
        >
          Thank you for shopping with HustleWear.
        </p>



        <h3>
          Your Order ID:
        </h3>


        <h2>
          #{orderId}
        </h2>



        <p>
          We will contact you soon for delivery confirmation.
        </p>



        <Link to="/">

          <button

          style={{
            padding:"15px 35px",
            background:"#0f172a",
            color:"white",
            border:"none",
            borderRadius:"8px",
            cursor:"pointer",
            fontSize:"16px"
          }}

          >

          Back To Home

          </button>

        </Link>



      </div>


    </div>


    </>

  )

}


export default OrderSuccess;