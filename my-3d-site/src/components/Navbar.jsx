import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import products from "../data/products";
import "./Navbar.css";

function Navbar(){


const {
cart,
wishlist,
setCartOpen
}=useContext(CartContext);
const { user } = useContext(AuthContext);


const handleLogout = async()=>{

  await signOut(auth);

  navigate("/login");

};


const navigate = useNavigate();


const [search,setSearch]=useState("");





const cartCount = cart.reduce(

(total,item)=> total + item.quantity,

0

);



const wishlistCount = wishlist.length;





// LIVE SEARCH

const filteredProducts = products.filter(product =>

product.name
.toLowerCase()
.includes(search.toLowerCase())

);







const handleSearch=(e)=>{


e.preventDefault();


if(search.trim()){


navigate(`/search?q=${search}`);

setSearch("");

}


};







return(


<nav
className="navbar"
style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center",

padding:"18px 40px",

background:"rgba(15,23,42,0.95)",

backdropFilter:"blur(10px)",

color:"white",

position:"sticky",

top:0,

zIndex:1000,

gap:"30px"

}}

>








{/* LOGO */}



<Link

to="/"

style={{

display:"flex",

alignItems:"center",

gap:"12px",

color:"white",

textDecoration:"none",

fontSize:"30px",

fontWeight:"800"

}}

>


<img

src="/images/logo.png"

alt="logo"

style={{

width:"45px",

height:"45px",

objectFit:"contain"

}}

/>


HustleWear


</Link>












{/* SEARCH */}



<div

style={{

position:"relative",

flex:1,

maxWidth:"450px"

}}

>



<form

onSubmit={handleSearch}

style={{

display:"flex"

}}

>



<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search products..."

style={{

width:"100%",

padding:"12px 20px",

borderRadius:"25px 0 0 25px",

border:"none",

outline:"none",

fontSize:"15px"

}}

/>





<button

type="submit"

style={{

padding:"12px 20px",

border:"none",

background:"#38bdf8",

cursor:"pointer",

borderRadius:"0 25px 25px 0",

fontSize:"18px"

}}

>

🔍

</button>



</form>









{/* SEARCH DROPDOWN */}



{

search && filteredProducts.length > 0 &&

<div

style={{

position:"absolute",

top:"55px",

left:0,

width:"100%",

background:"white",

color:"black",

borderRadius:"15px",

overflow:"hidden",

boxShadow:"0 20px 40px rgba(0,0,0,.3)",

zIndex:2000

}}

>


{

filteredProducts.slice(0,5).map(product=>(


<Link

key={product.id}

to={`/product/${product.id}`}

onClick={()=>setSearch("")}

style={{

display:"flex",

alignItems:"center",

gap:"15px",

padding:"12px",

textDecoration:"none",

color:"black",

borderBottom:"1px solid #eee"

}}

>


<img

src={product.image}

alt={product.name}

style={{

width:"55px",

height:"55px",

objectFit:"cover",

borderRadius:"10px"

}}

/>





<div>


<h4 style={{margin:"0"}}>

{product.name}

</h4>



<p

style={{

margin:"5px 0 0",

color:"#64748b"

}}

>

৳ {product.price}

</p>


</div>




</Link>


))


}



</div>


}



</div>









{/* MENU */}



<div
className="navbar-menu"
style={{

display:"flex",

alignItems:"center",

gap:"25px"

}}

>





<NavLink to="/shirts">

Shirts

</NavLink>



<NavLink to="/tshirts">

T-Shirts

</NavLink>



<NavLink to="/jerseys">

Jerseys

</NavLink>



<NavLink to="/pants">

Pants

</NavLink>

<NavLink to="/">
  Home
</NavLink>

<NavLink to="/shop">
  Shop
</NavLink>

<NavLink to="/about">
  About
</NavLink>

<NavLink to="/contact">
  Contact
</NavLink>
{
  user?.uid === "3nwkoENLYGeoIHhRv3g7IPgTIV82" && (
    <Link
      to="/admin"
      style={{
        color: "white",
        textDecoration: "none",
        fontWeight: "600"
      }}
    >
      Admin
    </Link>
  )
}

{/* AUTH */}

{

user ? (

<>

<Link
to="/my-orders"
style={{
color:"white",
textDecoration:"none",
fontWeight:"600"
}}
>

👤 {user.displayName || "Account"}

</Link>


<button

onClick={handleLogout}

style={{
background:"transparent",
border:"none",
color:"white",
cursor:"pointer",
fontSize:"15px",
fontWeight:"600"
}}

>

Logout

</button>

</>

)

:

(

<>

<Link

to="/login"

style={{
color:"white",
textDecoration:"none",
fontWeight:"600"
}}

>

Login

</Link>


<Link

to="/register"

style={{
color:"white",
textDecoration:"none",
fontWeight:"600"
}}

>

Register

</Link>


</>

)

}




{/* WISHLIST */}



<Link

to="/wishlist"

style={iconStyle}

>


❤️


{

wishlistCount>0 &&

<span style={badgeStyle}>

{wishlistCount}

</span>

}


</Link>









{/* CART DRAWER BUTTON */}



<button

onClick={()=>setCartOpen(true)}

style={{

background:"none",

border:"none",

cursor:"pointer",

position:"relative",

fontSize:"25px",

color:"white"

}}

>


🛒


{

cartCount>0 &&

<span style={badgeStyle}>

{cartCount}

</span>

}


</button>







</div>







</nav>


)

}









function NavLink({to,children}){


return(

<Link

to={to}

style={{

color:"white",

textDecoration:"none",

fontWeight:"500",

fontSize:"16px"

}}

>

{children}

</Link>


)

}







const iconStyle={

position:"relative",

fontSize:"25px",

color:"white",

textDecoration:"none"

};








const badgeStyle={

position:"absolute",

top:"-12px",

right:"-15px",

background:"#ef4444",

color:"white",

width:"22px",

height:"22px",

borderRadius:"50%",

display:"flex",

alignItems:"center",

justifyContent:"center",

fontSize:"12px",

fontWeight:"bold"

};







export default Navbar;