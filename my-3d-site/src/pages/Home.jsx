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
minHeight:"100vh",
background:"#020617",
display:"flex",
alignItems:"center",
justifyContent:"center",
padding:"50px 30px",
color:"white"
}}
>

<div
style={{
maxWidth:"1400px",
width:"100%",
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",
gap:"60px",
alignItems:"center"
}}

>

{/* LEFT */}

<div>

<p
style={{
color:"#38bdf8",
letterSpacing:"4px",
fontWeight:"bold"
}}
>
NEW COLLECTION 2026
</p>

<h1
style={{
fontSize:"clamp(40px,8vw,80px)",
lineHeight:"1",
margin:"20px 0"
}}
>
HustleWear
</h1>

<h2
style={{
fontSize:"35px",
fontWeight:"400",
color:"#cbd5e1"
}}
>
Premium Streetwear
For The Next Generation
</h2>

<p
style={{
marginTop:"25px",
fontSize:"18px",
color:"#94a3b8",
maxWidth:"500px",
lineHeight:"1.8"
}}
>
Explore premium shirts, oversized t-shirts,
sports jerseys and modern pants designed
for confidence and style.
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
background:"white",
color:"#020617",
border:"none",
borderRadius:"50px",
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
background:"transparent",
border:"2px solid white",
color:"white",
borderRadius:"50px",
cursor:"pointer"
}}
>
Explore
</button>
</Link>

</div>

</div>

{/* RIGHT */}

<div
style={{
display:"flex",
justifyContent:"center"
}}
>

<div
style={{
width:"100%",
maxWidth:"500px",
height:"650px",
overflow:"hidden",
borderRadius:"30px",
boxShadow:"0 30px 80px rgba(0,0,0,.5)"
}}
>

<img
src="/images/tshirt9.jpg"
alt="HustleWear"
style={{
width:"100%",
height:"100%",
objectFit:"cover"
}}
/>

</div>

</div>

</div>

</section>

<section
style={{
padding:"80px 30px",
background:"white"
}}
>

<div
style={{
maxWidth:"1200px",
margin:"auto",
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
gap:"30px",
textAlign:"center"
}}
>

<div>
<h1>500+</h1>
<p>Happy Customers</p>
</div>

<div>
<h1>100+</h1>
<p>Premium Products</p>
</div>

<div>
<h1>24/7</h1>
<p>Customer Support</p>
</div>

<div>
<h1>99%</h1>
<p>Positive Reviews</p>
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
gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
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
src="/images/tshirt3.jpg"
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