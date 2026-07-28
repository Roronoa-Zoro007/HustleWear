import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";


function Pants(){


const pants=[

{
id:11,
name:"Cargo Pant",
price:1200,
image:"/images/pant1.jpg"
},


{
id:12,
name:"Classic Black Pant",
price:999,
image:"/images/pant2.jpg"
},


{
id:13,
name:"Street Wear Pant",
price:1400,
image:"/images/pant3.jpg"
}


];



return(

<>

<Navbar />



<div

style={{
padding:"50px 20px",
background:"#f8fafc"
}}

>


<h1

style={{
textAlign:"center",
fontSize:"40px"
}}

>

Pants Collection

</h1>



<p

style={{
textAlign:"center",
fontSize:"18px"
}}

>

Premium Quality Pants

</p>




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

pants.map((product)=>(


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



export default Pants;