import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import Categories from "../components/Categories";
import FeaturedSlider from "../components/FeaturedSlider";
function Home(){


return(


<>


<Navbar/>





{/* HERO SECTION */}


<section

style={{

minHeight:"90vh",

background:

"linear-gradient(135deg,#020617,#0f172a,#1e293b)",

color:"white",

display:"flex",

alignItems:"center",

justifyContent:"center",

padding:"50px 30px",

overflow:"hidden"

}}

>



<div

style={{

maxWidth:"1200px",

width:"100%",

display:"flex",

alignItems:"center",

justifyContent:"space-between",

gap:"50px",

flexWrap:"wrap"

}}

>







{/* TEXT */}



<div

style={{

flex:"1",

minWidth:"300px"

}}

>


<p

style={{

letterSpacing:"4px",

color:"#94a3b8"

}}

>

PREMIUM STREETWEAR

</p>




<h1

style={{

fontSize:"70px",

lineHeight:"1",

margin:"20px 0"

}}

>

HustleWear

</h1>





<h2

style={{

fontSize:"35px",

fontWeight:"400"

}}

>

Move Different.
<br/>

Wear Confidence.

</h2>






<p

style={{

fontSize:"18px",

color:"#cbd5e1",

maxWidth:"450px",

lineHeight:"1.7"

}}

>

Premium fashion collection designed for modern lifestyle.
Discover shirts, t-shirts, jerseys and pants.

</p>








<div

style={{

display:"flex",

gap:"20px",

marginTop:"35px"

}}

>


<Link to="/shop">


<button

style={{

padding:"16px 40px",

borderRadius:"30px",

border:"none",

background:"white",

color:"#0f172a",

fontSize:"16px",

fontWeight:"bold",

cursor:"pointer"

}}

>

Shop Now

</button>


</Link>






<Link to="/shirts">


<button

style={{

padding:"16px 40px",

borderRadius:"30px",

border:"2px solid white",

background:"transparent",

color:"white",

fontSize:"16px",

cursor:"pointer"

}}

>

Explore

</button>


</Link>



</div>






</div>









{/* HERO IMAGE */}



<div

style={{

flex:"1",

display:"flex",

justifyContent:"center",

minWidth:"300px"

}}

>



<div

style={{

width:"420px",

height:"520px",

borderRadius:"40px",

background:

"linear-gradient(145deg,#334155,#020617)",

display:"flex",

alignItems:"center",

justifyContent:"center",

boxShadow:"0 30px 80px rgba(0,0,0,.5)",

transform:"rotate(-5deg)"

}}

>



<img

src="/images/hero.png"

alt="HustleWear"

style={{

width:"90%",

height:"90%",

objectFit:"contain",

filter:"drop-shadow(0 30px 30px rgba(0,0,0,.5))"

}}

/>



</div>



</div>






</div>


</section>




{/* FASHION BANNER */}

<section
style={{
padding:"100px 30px",
background:"#ffffff"
}}
>

<h2
style={{
textAlign:"center",
fontSize:"50px",
marginBottom:"15px",
color:"#0f172a"
}}
>
Latest Fashion Collection
</h2>

<p
style={{
textAlign:"center",
fontSize:"18px",
color:"#64748b",
marginBottom:"60px"
}}
>
Discover premium streetwear designed for modern lifestyle.
</p>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"25px",
maxWidth:"1400px",
margin:"auto"
}}
>

<div style={{
overflow:"hidden",
borderRadius:"25px",
boxShadow:"0 15px 40px rgba(0,0,0,.12)"
}}>
<img
src="/images/tshirt1.jpg"
alt=""
style={{
width:"100%",
height:"450px",
objectFit:"cover"
}}
/>
</div>

<div style={{
overflow:"hidden",
borderRadius:"25px",
boxShadow:"0 15px 40px rgba(0,0,0,.12)"
}}>
<img
src="/images/shirt1.jpg"
alt=""
style={{
width:"100%",
height:"450px",
objectFit:"cover"
}}
/>
</div>

<div style={{
overflow:"hidden",
borderRadius:"25px",
boxShadow:"0 15px 40px rgba(0,0,0,.12)"
}}>
<img
src="/images/jersey1.jpg"
alt=""
style={{
width:"100%",
height:"450px",
objectFit:"cover"
}}
/>
</div>

<div style={{
overflow:"hidden",
borderRadius:"25px",
boxShadow:"0 15px 40px rgba(0,0,0,.12)"
}}>
<img
src="/images/pant1.jpg"
alt=""
style={{
width:"100%",
height:"450px",
objectFit:"cover"
}}
/>
</div>

</div>

</section>


{/* FEATURED PRODUCTS */}

<Showcase />

<FeaturedSlider />

{/* CATEGORY SECTION */}

<Categories />

{/* PRODUCTS */}

<Products />

{/* FOOTER */}



<Footer/>





</>


)

}


export default Home;