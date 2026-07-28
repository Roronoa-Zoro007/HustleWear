import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";



function Wishlist(){


const {

wishlist,

removeFromWishlist,

addToCart

} = useContext(CartContext);






return(

<>


<Navbar/>





{/* Header */}


<section

style={{

height:"300px",

background:

"linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)), url('/images/banner.jpg')",

backgroundSize:"cover",

backgroundPosition:"center",

display:"flex",

alignItems:"center",

justifyContent:"center",

color:"white",

textAlign:"center"

}}

>


<div>


<h1

style={{

fontSize:"55px",

margin:"0"

}}

>

My Wishlist

</h1>



<p

style={{

fontSize:"20px"

}}

>

Your favourite HustleWear products

</p>


</div>


</section>









<section

style={{

padding:"60px 30px",

background:"#f8fafc",

minHeight:"70vh"

}}

>





{

wishlist.length === 0

?


<div

style={{

textAlign:"center"

}}

>


<h1>

Your Wishlist is Empty 🤍

</h1>


<p>

Add your favourite products here

</p>


</div>



:





<div

style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",

gap:"35px"

}}

>



{

wishlist.map((product)=>(



<div

key={product.id}


style={{


background:"white",

borderRadius:"20px",

overflow:"hidden",

boxShadow:"0 15px 35px rgba(0,0,0,.12)",

transition:"0.3s"


}}



onMouseEnter={(e)=>{

e.currentTarget.style.transform="translateY(-10px)"

}}



onMouseLeave={(e)=>{

e.currentTarget.style.transform="translateY(0)"

}}



>



<img

src={product.image}

alt={product.name}


style={{


width:"100%",

height:"350px",

objectFit:"cover"


}}


/>




<div

style={{

padding:"25px"

}}

>



<h2>

{product.name}

</h2>



<h3>

৳ {product.price}

</h3>





<div

style={{

display:"flex",

gap:"10px",

marginTop:"20px"

}}

>



<button


onClick={()=>addToCart(product)}


style={{


flex:1,

padding:"12px",

background:"#0f172a",

color:"white",

border:"none",

borderRadius:"8px",

cursor:"pointer"


}}


>

Add Cart

</button>






<button


onClick={()=>removeFromWishlist(product.id)}


style={{


flex:1,

padding:"12px",

background:"#ef4444",

color:"white",

border:"none",

borderRadius:"8px",

cursor:"pointer"


}}


>

Remove

</button>





</div>



</div>




</div>


))


}



</div>


}




</section>



</>


)


}



export default Wishlist;