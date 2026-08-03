import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";


function Register(){

  const navigate = useNavigate();


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);



  const handleRegister = async(e)=>{

    e.preventDefault();


    if(password !== confirmPassword){
      setError("Password does not match");
      return;
    }


    try{

      setLoading(true);
      setError("");


      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );


      await updateProfile(result.user,{
        displayName:name
      });


      navigate("/");


    }
    catch(err){

      setError(err.message);

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
        background:"rgba(255,255,255,0.1)",
        backdropFilter:"blur(15px)",
        padding:"40px",
        borderRadius:"25px",
        color:"white",
        boxShadow:"0 20px 50px rgba(0,0,0,.3)"
      }}
      >


        <h1
        style={{
          textAlign:"center",
          fontSize:"40px",
          marginBottom:"10px"
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
          Create your account
        </p>



        {
          error &&
          <p
          style={{
            background:"#fee2e2",
            color:"#dc2626",
            padding:"12px",
            borderRadius:"10px",
            marginBottom:"15px"
          }}
          >
            {error}
          </p>
        }



        <form onSubmit={handleRegister}>


          <input
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={inputStyle}
          required
          />



          <input
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={inputStyle}
          required
          />



          <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={inputStyle}
          required
          />



          <input
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
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
            "Creating..."
            :
            "Create Account"
          }

          </button>


        </form>



        <p
        style={{
          textAlign:"center",
          marginTop:"25px"
        }}
        >

        Already have account?

        {" "}

        <Link
        to="/login"
        style={{
          color:"#38bdf8",
          fontWeight:"600"
        }}
        >
          Login
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



export default Register;
