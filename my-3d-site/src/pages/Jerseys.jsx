import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";


function Jerseys(){


const jerseys=[

{
id:8,
name:"Football Jersey",
price:999,
image:"/images/jersey1.jpg"
},


{
id:9,
name:"Sports Jersey",
price:1099,
image:"/images/jersey2.jpg"
},


{
id:10,
name:"Custom Jersey",
price:1299,
image:"/images/jersey3.jpg"
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

Jerseys Collection

</h1>



<p

style={{
textAlign:"center",
fontSize:"18px"
}}

>

Premium Sports Jerseys

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

jerseys.map((product)=>(


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



export default Jerseys;