import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
function ProductDetails(){
const {id}=useParams();
const {
addToCart,
addToWishlist,
wishlist
}=useContext(CartContext);
const product = products.find(
item=>item.id===Number(id)
);
const [mainImage,setMainImage]=useState(
product?.image
);
const [color,setColor]=useState(
product?.colors?.[0]
);
const [size,setSize]=useState("M");
const [quantity,setQuantity]=useState(1);
const [added,setAdded]=useState(false);
const [showImage, setShowImage] = useState(false);
if(!product){
return(
<>
<Navbar/>
<h1 style={{
textAlign:"center",
marginTop:"50px"
}}>
Product Not Found

</h1>

</>

)

}






const liked = wishlist?.some(
item=>item.id===product.id
);





const handleCart=()=>{


addToCart({

...product,

selectedColor:color,

size,

quantity

});



setAdded(true);



setTimeout(()=>{

setAdded(false)

},2000);



};







return(

<>


<Navbar/>




<section style={{
padding:"70px 30px"
}}>


<div style={{
maxWidth:"1200px",
margin:"auto"
}}>





<div style={{

display:"flex",
gap:"60px",
flexWrap:"wrap"

}}>







{/* IMAGE */}

<div>

<div
style={{
display:"flex",
gap:"20px",
flexWrap:"wrap",
position:"relative"
}}
>


<button

onClick={()=>addToWishlist(product)}

style={{

position:"absolute",
right:"20px",
top:"20px",
zIndex:2,

width:"50px",
height:"50px",

borderRadius:"50%",
border:"none",

background:"white",

fontSize:"25px",

cursor:"pointer",

boxShadow:"0 5px 20px rgba(0,0,0,.2)"

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



{

product.images?.map((img,index)=>(


<img
  key={index}
  src={img}
  alt={product.name}
  onClick={() => {
    setMainImage(img);
    setShowImage(true);
  }}
  style={{
    width: "220px",
    height: "280px",
    objectFit: "cover",
    borderRadius: "25px",
    boxShadow: "0 10px 30px rgba(0,0,0,.15)",
    cursor: "zoom-in"
  }}
/>


))

}



</div>


</div>








{/* DETAILS */}



<div style={{

flex:1,
minWidth:"320px"

}}>



<p style={{
color:"#64748b"
}}>

{product.category}

</p>




<h1 style={{
fontSize:"42px"
}}>

{product.name}

</h1>




<h2>

৳ {product.price}

</h2>



<p>

⭐⭐⭐⭐⭐ (120 Reviews)

</p>




<p style={{
lineHeight:"1.8"
}}>

{product.description}

</p>








<h3>Color</h3>


<div>


{

product.colors?.map(item=>(


<button

key={item}

onClick={()=>setColor(item)}

style={{

padding:"12px 22px",

margin:"5px",

borderRadius:"20px",

cursor:"pointer",

background:"white",

border:

color===item

?

"2px solid black"

:

"1px solid #ddd"

}}

>

{item}

</button>


))

}


</div>








<h3>Size</h3>


<div>


{

["S","M","L","XL"].map(item=>(


<button

key={item}

onClick={()=>setSize(item)}

style={{

padding:"12px 22px",

margin:"5px",

borderRadius:"10px",

cursor:"pointer",

background:

size===item

?

"#0f172a"

:

"white",

color:

size===item

?

"white"

:

"black",

border:"1px solid #ddd"

}}

>

{item}

</button>


))

}


</div>







<h3>Quantity</h3>



<button

onClick={()=>{

if(quantity>1)

setQuantity(quantity-1)

}}

>

-

</button>



<span style={{
margin:"0 20px",
fontSize:"20px"
}}>

{quantity}

</span>



<button

onClick={()=>setQuantity(quantity+1)}

>

+

</button>






<br/><br/>





<button

onClick={handleCart}

style={{

padding:"18px 60px",

borderRadius:"35px",

border:"none",

background:

added

?

"#16a34a"

:

"#0f172a",

color:"white",

fontSize:"17px",

cursor:"pointer"

}}

>


{

added

?

"✓ Added To Cart"

:

"Add To Cart"

}


</button>







<div style={{

marginTop:"35px",

background:"#f8fafc",

padding:"25px",

borderRadius:"20px"

}}>


<p>
📦 Stock Available: {product.stock}
</p>


<p>
🚚 Free Delivery Available
</p>


<p>
↩ 7 Days Easy Return
</p>


<p>
🔒 Secure Payment
</p>


</div>





</div>



</div>









{/* RELATED PRODUCTS */}



<section style={{
marginTop:"80px"
}}>


<h2>
You May Also Like
</h2>




<div style={{

display:"flex",

gap:"25px",

flexWrap:"wrap"

}}>


{

products

.filter(item=>

item.category===product.category &&

item.id!==product.id

)

.slice(0,4)

.map(item=>(



<div

key={item.id}

style={{

width:"250px",

borderRadius:"18px",

overflow:"hidden",

boxShadow:"0 10px 25px rgba(0,0,0,.12)"

}}

>


<img

src={item.image}

alt={item.name}

style={{

width:"100%",

height:"280px",

objectFit:"cover"

}}

/>




<div style={{
padding:"15px"
}}>


<h3>

{item.name}

</h3>


<p>

৳ {item.price}

</p>



<Link to={`/product/${item.id}`}>

<button style={{

width:"100%",

padding:"12px",

background:"#0f172a",

color:"white",

border:"none",

borderRadius:"10px"

}}>

View Product

</button>

</Link>



</div>


</div>


))


}


</div>


</section>









{/* REVIEWS */}



<section style={{

marginTop:"80px",

background:"#f8fafc",

padding:"40px",

borderRadius:"25px"

}}>



<h2>

Customer Reviews

</h2>




<div style={{

display:"flex",

gap:"25px",

flexWrap:"wrap"

}}>



<Review

name="Rahim"

text="Excellent quality. Fabric feels premium."

/>


<Review

name="Sakib"

text="Perfect fitting and fast delivery."

/>


<Review

name="Nayeem"

text="Good product. Recommended."

/>



</div>


</section>





</div>


</section>

{showImage && (

<div

onClick={()=>setShowImage(false)}

style={{

position:"fixed",

top:0,

left:0,

width:"100%",

height:"100%",

background:"rgba(0,0,0,.9)",

display:"flex",

justifyContent:"center",

alignItems:"center",

zIndex:9999

}}

>

<img

src={mainImage}

alt={product.name}

onClick={(e)=>e.stopPropagation()}

style={{

maxWidth:"90%",

maxHeight:"90%",

borderRadius:"20px"

}}

/>

<button

onClick={()=>setShowImage(false)}

style={{

position:"absolute",

top:"20px",

right:"30px",

fontSize:"40px",

color:"white",

background:"transparent",

border:"none",

cursor:"pointer"

}}

>

✕

</button>

</div>

)}

</>

)

}




function Review({name,text}){


return(

<div style={reviewCard}>


<h3>
{name}
</h3>


<p>
⭐⭐⭐⭐⭐
</p>


<p>
{text}
</p>


</div>

)


}






const reviewCard={

width:"280px",

background:"white",

padding:"25px",

borderRadius:"15px",

boxShadow:"0 5px 20px rgba(0,0,0,.1)"

};



export default ProductDetails;