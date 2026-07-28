import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import products from "../data/products";


function Search(){


const [params]=useSearchParams();


const search=params.get("q") || "";



const result = products.filter(product=>

product.name

.toLowerCase()

.includes(search.toLowerCase())

);




return(

<>


<Navbar/>


<section

style={{

padding:"60px 30px",

background:"#f8fafc",

minHeight:"80vh"

}}

>


<h1

style={{

fontSize:"45px",

textAlign:"center"

}}

>

Search Result For "{search}"

</h1>







<div

style={{

display:"flex",

gap:"30px",

flexWrap:"wrap",

justifyContent:"center",

marginTop:"50px"

}}

>


{

result.map(product=>(


<div

key={product.id}

style={{

width:"280px",

background:"white",

borderRadius:"20px",

overflow:"hidden",

boxShadow:"0 10px 25px rgba(0,0,0,.1)"

}}

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




<Link

to={`/product/${product.id}`}

>


<button

style={{

width:"100%",

padding:"12px",

background:"#0f172a",

color:"white",

border:"none",

borderRadius:"10px"

}}

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

result.length===0 &&

<h2

style={{

textAlign:"center",

marginTop:"40px"

}}

>

No Product Found

</h2>

}



</section>


</>


)

}


export default Search;