import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";


function Login(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);



  const handleLogin = async(e)=>{

    e.preventDefault();


    try{

      setLoading(true);
      setError("");


      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );


      navigate("/");


    }
    catch(err){

      setError("Invalid email or password");

    }
    finally{

      setLoading(false);

    }

  };



  return(

    <div
    style={{
      minHeight:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"#0f172a",
      padding:"20px"
    }}
    >


      <div

      style={{
        width:"100%",
        maxWidth:"450px",
        padding:"40px",
        borderRadius:"25px",
        background:"rgba(255,255,255,0.1)",
        backdropFilter:"blur(15px)",
        color:"white",
        boxShadow:"0 20px 50px rgba(0,0,0,.3)"
      }}

      >


        <h1
        style={{
          textAlign:"center",
          fontSize:"40px"
        }}
        >
          HustleWear
        </h1>


        <p
        style={{
          textAlign:"center",
          color:"#cbd5e1",
          marginBottom:"30px"
        }}
        >
          Welcome Back
        </p>



        {
          error &&

          <p
          style={{
            background:"#fee2e2",
            color:"#dc2626",
            padding:"12px",
            borderRadius:"10px"
          }}
          >
            {error}
          </p>

        }




        <form onSubmit={handleLogin}>


          <input

          type="email"

          placeholder="Email Address"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          style={inputStyle}

          required

          />



          <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          style={inputStyle}

          required

          />




          <button

          type="submit"

          style={buttonStyle}

          >

          {
            loading
            ?
            "Logging in..."
            :
            "Login"
          }


          </button>



        </form>





        <p

        style={{
          textAlign:"center",
          marginTop:"25px"
        }}

        >

        Don't have an account?

        {" "}

        <Link

        to="/register"

        style={{
          color:"#38bdf8",
          fontWeight:"600"
        }}

        >

        Register

        </Link>


        </p>



      </div>


    </div>

  )

}



const inputStyle={

width:"100%",
padding:"15px",
margin:"10px 0",
borderRadius:"12px",
border:"none",
outline:"none",
fontSize:"15px"

};



const buttonStyle={

width:"100%",
padding:"15px",
marginTop:"20px",
borderRadius:"50px",
border:"none",
background:"#38bdf8",
color:"#0f172a",
fontSize:"17px",
fontWeight:"700",
cursor:"pointer"

};



export default Login;