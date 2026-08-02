import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Shirts(){


const shirtProducts = products.filter(
  item => item.category === "Shirt"
);


return(

<>

<Navbar/>


<div

style={{
padding:"50px 20px",
background:"#f8fafc"
}}

>


<h1
style={{
textAlign:"center"
}}
>

Shirts Collection

</h1>



<div

style={{
display:"flex",
justifyContent:"center",
gap:"30px",
flexWrap:"wrap"
}}

>


{
shirtProducts.map(product => (

<ProductCard

key={product.id}

product={product}

/>

))

}



</div>


</div>


</>

)

}


export default Shirts;