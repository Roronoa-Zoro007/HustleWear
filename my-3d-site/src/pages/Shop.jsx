import { useSearchParams, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import products from "../data/products";


function Shop(){


const [searchParams] = useSearchParams();

const searchText = searchParams.get("search") || "";



const [category,setCategory] = useState("All");

const [price,setPrice] = useState(1500);

const [size,setSize] = useState("");

const [color,setColor] = useState("");

const [sort,setSort] = useState("default");







let filteredProducts = products.filter(product=>{


const searchMatch = product.name

.toLowerCase()

.includes(searchText.toLowerCase());





const categoryMatch =

category==="All"

?

true

:

product.category===category;





const priceMatch =

product.price <= price;






const sizeMatch =

size===""

?

true

:

product.sizes?.includes(size);






const colorMatch =

color===""

?

true

:

product.colors.includes(color);






return(

searchMatch &&

categoryMatch &&

priceMatch &&

sizeMatch &&

colorMatch

);


});







if(sort==="low"){

filteredProducts.sort(

(a,b)=>a.price-b.price

);

}



if(sort==="high"){

filteredProducts.sort(

(a,b)=>b.price-a.price

);

}









return(

<>


<Navbar/>





<div

style={{

display:"flex",

gap:"40px",

padding:"50px",

background:"#f8fafc"

}}

>








{/* FILTER */}



<aside

style={{

width:"280px",

background:"white",

padding:"30px",

borderRadius:"20px",

height:"fit-content",

boxShadow:"0 10px 25px rgba(0,0,0,.08)"

}}

>


<h2>

Filters

</h2>






<h3>

Category

</h3>


<select

onChange={(e)=>setCategory(e.target.value)}

style={inputStyle}

>


<option>

All

</option>

<option>

Shirt

</option>

<option>

T-Shirt

</option>

<option>

Jersey

</option>

<option>

Pant

</option>


</select>









<h3>

Price

</h3>



<p>

৳ 0 - ৳ {price}

</p>


<input

type="range"

min="500"

max="1500"

value={price}

onChange={(e)=>setPrice(Number(e.target.value))}

style={{

width:"100%"

}}

/>









<h3>

Size

</h3>



<div>


{

["S","M","L","XL"].map(item=>(


<button

key={item}

onClick={()=>setSize(item)}

style={{

padding:"8px 15px",

margin:"5px",

borderRadius:"8px",

border:"1px solid #ddd",

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

"black"

}}

>


{item}


</button>


))


}



</div>









<h3>

Color

</h3>



{

["Black","White","Blue","Red","Grey","Green"].map(item=>(


<button

key={item}

onClick={()=>setColor(item)}

style={{

display:"block",

width:"100%",

padding:"10px",

margin:"8px 0",

borderRadius:"10px",

border:"1px solid #ddd",

background:

color===item

?

"#0f172a"

:

"white",

color:

color===item

?

"white"

:

"black"

}}

>

{item}

</button>


))


}





</aside>









{/* PRODUCTS */}





<section

style={{

flex:1

}}

>


<div

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}

>


<h1

style={{

fontSize:"45px"

}}

>

Shop

</h1>





<select

onChange={(e)=>setSort(e.target.value)}

style={inputStyle}

>


<option value="default">

Sort

</option>


<option value="low">

Price Low To High

</option>


<option value="high">

Price High To Low

</option>


</select>



</div>









<div

style={{

display:"flex",

gap:"30px",

flexWrap:"wrap",

marginTop:"40px"

}}

>



{

filteredProducts.map(product=>(



<div

key={product.id}

style={cardStyle}

>



<img

src={product.image}

alt={product.name}

style={{

width:"100%",

height:"300px",

objectFit:"cover"

}}

/>






<div

style={{

padding:"20px"

}}

>


<h2>

{product.name}

</h2>



<h3>

৳ {product.price}

</h3>




<p>

Stock: {product.stock}

</p>





<Link

to={`/product/${product.id}`}

>


<button

style={buttonStyle}

>

View Product

</button>


</Link>



</div>



</div>



))


}



</div>





{

filteredProducts.length===0 &&

<h2>

No Product Found

</h2>

}



</section>





</div>



</>


)

}






const cardStyle={

width:"280px",

background:"white",

borderRadius:"20px",

overflow:"hidden",

boxShadow:"0 10px 25px rgba(0,0,0,.1)",

transition:"0.3s"

};





const buttonStyle={

width:"100%",

padding:"12px",

background:"#0f172a",

color:"white",

border:"none",

borderRadius:"10px",

cursor:"pointer"

};





const inputStyle={

width:"100%",

padding:"12px",

borderRadius:"10px",

border:"1px solid #ddd"

};





export default Shop;