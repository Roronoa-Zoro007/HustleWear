import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


function CartDrawer(){


const {
cart,
cartOpen,
setCartOpen,
removeFromCart
}=useContext(CartContext);



const navigate = useNavigate();



const total = cart.reduce(

(sum,item)=>

sum + item.price * item.quantity

,0);



return(


<>


{/* OVERLAY */}

{

cartOpen &&

<div

onClick={()=>setCartOpen(false)}

style={{

position:"fixed",

inset:0,

background:"rgba(0,0,0,0.45)",

backdropFilter:"blur(5px)",

zIndex:9998

}}

></div>

}




{/* DRAWER */}



<div

style={{

position:"fixed",

top:0,

right:cartOpen ? "0":"-450px",

width:"420px",

height:"100vh",

background:"#ffffff",

zIndex:9999,

transition:"0.4s ease",

padding:"30px",

boxSizing:"border-box",

overflowY:"auto",

borderRadius:"25px 0 0 25px"

}}

>


<div

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}

>


<h1>

Cart

</h1>


<button

onClick={()=>setCartOpen(false)}

style={{

fontSize:"25px",

border:"none",

background:"none",

cursor:"pointer"

}}

>

✕

</button>


</div>







{

cart.length===0

?


<h3>

Your cart is empty

</h3>


:


cart.map(item=>(


<div

key={item.id}

style={{

display:"flex",

gap:"15px",

padding:"20px 0",

borderBottom:"1px solid #ddd"

}}

>


<img

src={item.image}

alt={item.name}

style={{

width:"90px",

height:"100px",

objectFit:"cover",

borderRadius:"15px"

}}

/>



<div

style={{

flex:1

}}

>


<h3>

{item.name}

</h3>


<p>

৳ {item.price}

</p>


<p>

Quantity: {item.quantity}

</p>




<button

onClick={()=>removeFromCart(item.id)}

style={{

border:"none",

background:"#ef4444",

color:"white",

padding:"6px 15px",

borderRadius:"20px",

cursor:"pointer"

}}

>

Remove

</button>



</div>



</div>


))


}






<div

style={{

marginTop:"30px",

padding:"20px",

background:"#f8fafc",

borderRadius:"20px"

}}

>


<h2>

Total

</h2>


<h1>

৳ {total}

</h1>


</div>







<button

onClick={()=>{

setCartOpen(false);

navigate("/checkout");

}}

style={{

width:"100%",

marginTop:"25px",

padding:"16px",

background:"#0f172a",

color:"white",

border:"none",

borderRadius:"35px",

fontSize:"17px",

cursor:"pointer"

}}

>

Proceed To Checkout

</button>





</div>


</>


)

}



export default CartDrawer;