import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";


function ProductCard({product}){


const {

addToWishlist,

wishlist,

addToCart

}=useContext(CartContext);



const [added,setAdded]=useState(false);



const liked = wishlist?.some(

item=>item.id===product.id

);






const handleQuickAdd=()=>{


addToCart({

...product,

size:"M",

quantity:1

});


setAdded(true);


setTimeout(()=>{

setAdded(false)

},1500);


};







return(


<div


style={{

width:"290px",

background:"white",

borderRadius:"22px",

overflow:"hidden",

boxShadow:"0 15px 35px rgba(0,0,0,.12)",

position:"relative",

transition:"0.4s"

}}



onMouseEnter={(e)=>{

e.currentTarget.style.transform="translateY(-12px)";

}}



onMouseLeave={(e)=>{

e.currentTarget.style.transform="translateY(0px)";

}}


>








{/* BADGE */}


<div

style={{

position:"absolute",

top:"15px",

left:"15px",

background:"#ef4444",

color:"white",

padding:"6px 12px",

borderRadius:"20px",

fontSize:"12px",

fontWeight:"bold",

zIndex:2

}}

>

NEW

</div>







{/* WISHLIST */}



<button


onClick={()=>addToWishlist(product)}



style={{

position:"absolute",

right:"15px",

top:"15px",

width:"40px",

height:"40px",

borderRadius:"50%",

border:"none",

background:"white",

fontSize:"22px",

cursor:"pointer",

zIndex:2,

boxShadow:"0 5px 15px rgba(0,0,0,.15)"

}}

>


{

liked

?

"❤️"

:

"♡"

}


</button>








<img

src={product.image}

alt={product.name}


style={{

width:"100%",

height:"320px",

objectFit:"cover"

}}

/>








<div

style={{

padding:"20px"

}}

>




<p

style={{

color:"#64748b",

fontSize:"14px"

}}

>

{product.category}

</p>






<h2

style={{

fontSize:"22px"

}}

>

{product.name}

</h2>






<div>

⭐⭐⭐⭐⭐

</div>






<h2>

৳ {product.price}

</h2>







<p>

📦 Stock: {product.stock}

</p>









<button

onClick={handleQuickAdd}

style={{

width:"100%",

padding:"13px",

border:"none",

borderRadius:"12px",

background:

added

?

"#16a34a"

:

"#0f172a",

color:"white",

cursor:"pointer",

fontSize:"15px",

marginBottom:"10px",

transition:"0.3s"

}}

>


{

added

?

"✓ Added"

:

"Quick Add"

}


</button>









<Link

to={`/product/${product.id}`}

>


<button

style={{

width:"100%",

padding:"13px",

borderRadius:"12px",

background:"white",

border:"2px solid #0f172a",

cursor:"pointer",

fontSize:"15px"

}}

>

View Product

</button>


</Link>







</div>







</div>


)

}


export default ProductCard;