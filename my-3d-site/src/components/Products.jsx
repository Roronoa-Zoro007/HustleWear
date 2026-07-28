import ProductCard from "./ProductCard";


function Products(){

const products=[

{
id:1,
name:"Premium Casual Shirt",
price:899,
image:"/images/shirt1.jpg"
},

{
id:5,
name:"Oversized Black T-Shirt",
price:799,
image:"/images/tshirt1.jpg"
},

{
id:8,
name:"Football Jersey",
price:999,
image:"/images/jersey1.jpg"
},

{
id:11,
name:"Cargo Pant",
price:1200,
image:"/images/pant1.jpg"
}

];


return(

<section

style={{

padding:"60px 20px",

background:"#f8fafc"

}}

>


<h1

style={{

textAlign:"center",

fontSize:"40px"

}}

>

Featured Products

</h1>



<div

style={{

display:"flex",

justifyContent:"center",

gap:"30px",

flexWrap:"wrap",

marginTop:"40px"

}}

>


{

products.map((product)=>(

<ProductCard

key={product.id}

product={product}

/>

))

}


</div>


</section>


)

}


export default Products;