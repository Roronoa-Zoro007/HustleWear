import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Tshirts() {

const products = [

{
id:5,
name:"Oversized Black T-Shirt",
price:500,
image:"/images/tshirt1.jpg"
},

{
id:6,
name:"Premium White T-Shirt",
price:500,
image:"/images/tshirt3.jpg"
},

{
id:7,
name:"Street Style T-Shirt",
price:500,
image:"/images/tshirt5.jpg"
},

{
id:14,
name:"Premium Red T-Shirt",
price:899,
image:"/images/tshirt7.jpg"
},

{
id:15,
name:"Oversized Beige T-Shirt",
price:500,
image:"/images/tshirt9.jpg"
}

];

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
textAlign:"center",
fontSize:"40px",
marginBottom:"10px"
}}
>
T-Shirts Collection
</h1>

<p
style={{
textAlign:"center",
fontSize:"18px"
}}
>
Premium Quality T-Shirts
</p>

<div
style={{
display:"flex",
gap:"30px",
justifyContent:"center",
flexWrap:"wrap",
marginTop:"40px"
}}
>

{
products.map(product => (

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

export default Tshirts;