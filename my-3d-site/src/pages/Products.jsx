import { Link } from "react-router-dom";
import { useState } from "react";


function Products() {


  const products = [

    {
      id: 1,
      name: "Oversized Black T-Shirt",
      price: 799,
      image: "/images/tshirt1.jpg",
      category:"T-Shirt"
    },


    {
      id: 2,
      name: "Premium White T-Shirt",
      price: 699,
      image: "/images/tshirt2.jpg",
      category:"T-Shirt"
    },


    {
      id: 3,
      name: "Football Jersey",
      price: 999,
      image: "/images/jersey1.jpg",
      category:"Jersey"
    },


    {
      id: 4,
      name: "Cargo Pant",
      price: 1200,
      image: "/images/pant1.jpg",
      category:"Pant"
    },


  ];



  return (


    <section

    style={{
      padding:"60px 20px",
      background:"#f8fafc"
    }}

    >



    <h1

    style={{
      textAlign:"center",
      fontSize:"42px",
      marginBottom:"40px"
    }}

    >

    Our Products

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
      products.map((product)=>(


        <ProductCard 
        key={product.id}
        product={product}
        />


      ))
    }



    </div>



    </section>


  );

}





function ProductCard({product}){


const [hover,setHover]=useState(false);



return(


<div


onMouseEnter={()=>setHover(true)}

onMouseLeave={()=>setHover(false)}


style={{

width:"280px",

background:"white",

borderRadius:"18px",

overflow:"hidden",

boxShadow:hover
?
"0 20px 45px rgba(0,0,0,0.2)"
:
"0 10px 25px rgba(0,0,0,0.1)",


transform:hover
?
"translateY(-10px)"
:
"translateY(0)",


transition:"0.3s"

}}


>



<div

style={{
position:"relative",
overflow:"hidden"
}}

>



<img

src={product.image}

alt={product.name}


style={{

width:"100%",

height:"300px",

objectFit:"cover",

transform:hover
?
"scale(1.1)"
:
"scale(1)",


transition:"0.4s"

}}


/>



<span

style={{

position:"absolute",

top:"15px",

left:"15px",

background:"#0f172a",

color:"white",

padding:"6px 12px",

borderRadius:"20px",

fontSize:"14px"

}}

>

{product.category}

</span>



</div>





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




<Link to={`/product/${product.id}`}>


<button


style={{

width:"100%",

padding:"12px",

background:"#0f172a",

color:"white",

border:"none",

borderRadius:"10px",

cursor:"pointer",

fontSize:"16px"

}}


>

View Product

</button>


</Link>



</div>




</div>


)


}



export default Products;