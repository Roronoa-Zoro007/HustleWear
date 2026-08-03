import { useEffect, useState, useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function MyOrders(){

  const { user } = useContext(AuthContext);

  const [orders,setOrders] = useState([]);
  const [loading,setLoading] = useState(true);



  useEffect(()=>{

    const fetchOrders = async()=>{

      if(!user) return;


      const q = query(
        collection(db,"orders"),
        where(
          "userId",
          "==",
          user.uid
        )
      );


      const snapshot = await getDocs(q);


      const orderList=[];


      snapshot.forEach((doc)=>{

        orderList.push({
          id:doc.id,
          ...doc.data()
        });

      });


      setOrders(orderList);

      setLoading(false);

    };


    fetchOrders();


  },[user]);





  if(loading){

    return(
      <>
      <Navbar/>

      <h2
      style={{
        textAlign:"center",
        marginTop:"100px"
      }}
      >
        Loading Orders...
      </h2>

      </>
    )

  }



  return(

    <>

    <Navbar/>


    <section
    style={{
      minHeight:"80vh",
      padding:"60px 20px",
      background:"#f8fafc"
    }}
    >


    <h1
    style={{
      textAlign:"center",
      fontSize:"45px",
      marginBottom:"40px"
    }}
    >

    My Orders

    </h1>



    {
      orders.length === 0 ?

      (

      <h2
      style={{
        textAlign:"center",
        color:"#64748b"
      }}
      >

      No Orders Found

      </h2>

      )

      :

      (

      <div
      style={{
        maxWidth:"900px",
        margin:"auto"
      }}
      >


      {
        orders.map((order)=>(


          <div

          key={order.id}

          style={{
            background:"white",
            padding:"30px",
            marginBottom:"25px",
            borderRadius:"20px",
            boxShadow:
            "0 10px 30px rgba(0,0,0,.1)"
          }}

          >


          <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            flexWrap:"wrap"
          }}
          >

          <h3>
          {order.orderId}
          </h3>


          <span
          style={{
            background:"#e0f2fe",
            padding:"8px 15px",
            borderRadius:"20px",
            color:"#0369a1",
            fontWeight:"600"
          }}
          >

          {order.status}

          </span>


          </div>



          <hr
          style={{
            margin:"20px 0"
          }}
          />



          <h3>
          Products
          </h3>


          {
            order.cart?.map((item)=>(

              <div

              key={item.id}

              style={{
                display:"flex",
                justifyContent:"space-between",
                margin:"15px 0"
              }}

              >

              <span>
              {item.name} × {item.quantity}
              </span>


              <span>
              ৳ {item.price * item.quantity}
              </span>


              </div>


            ))
          }




          <hr/>

          <p>
          Payment: {order.payment}
          </p>


          <p>
          Total: ৳ {order.total}
          </p>



          <p>
          Date:{" "}

          {
            order.createdAt?.seconds

            ?

            new Date(
              order.createdAt.seconds * 1000
            ).toLocaleString()

            :

            "N/A"
          }

          </p>



          </div>


        ))
      }


      </div>

      )

    }


    </section>


    <Footer/>

    </>

  )

}


export default MyOrders;