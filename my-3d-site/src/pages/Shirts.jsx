import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";


function Shirts(){


const products=[

{
id:1,
name:"Premium Casual Shirt",
price:899,
image:"/images/shirt1.jpg"
},


{
id:2,
name:"White Formal Shirt",
price:999,
image:"/images/shirt2.jpg"
},


{
id:3,
name:"Black Stylish Shirt",
price:1099,
image:"/images/shirt3.jpg"
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
products.map(product=>(

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