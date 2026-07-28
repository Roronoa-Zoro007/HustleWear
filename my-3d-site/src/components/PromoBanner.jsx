import { Link } from "react-router-dom";


function PromoBanner(){


return(

<section

style={{

padding:"50px 20px",

}}

>


<div

style={{

background:"linear-gradient(135deg,#0f172a,#334155)",

color:"white",

borderRadius:"25px",

padding:"50px",

textAlign:"center",

maxWidth:"1100px",

margin:"auto"

}}

>


<h1

style={{

fontSize:"45px"

}}

>

🔥 Summer Fashion Sale

</h1>



<h2>

Up To 40% OFF

</h2>



<p

style={{

fontSize:"18px"

}}

>

Upgrade your wardrobe with premium quality fashion.

</p>



<Link to="/tshirts">


<button

style={{

marginTop:"20px",

padding:"15px 40px",

background:"#38bdf8",

color:"black",

border:"none",

borderRadius:"10px",

fontSize:"18px",

cursor:"pointer"

}}

>

Shop Collection

</button>


</Link>



</div>


</section>


)

}


export default PromoBanner;