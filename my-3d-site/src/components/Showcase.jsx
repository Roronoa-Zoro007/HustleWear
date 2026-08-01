import { Link } from "react-router-dom";


function Showcase(){


return(

<section

style={{

padding:"100px 30px",

background:"#020617",

color:"white",

overflow:"hidden"

}}

>


<div

style={{

maxWidth:"1200px",

margin:"auto",

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

flex:1,

minWidth:"300px"

}}

>


<p

style={{

color:"#94a3b8",

letterSpacing:"3px"

}}

>

NEW COLLECTION

</p>



<h1

style={{

fontSize:"55px"

}}

>

Urban
<br/>
Performance
</h1>



<p

style={{

fontSize:"18px",

color:"#cbd5e1",

lineHeight:"1.8"

}}

>

Designed for athletes and street fashion lovers.
Premium materials with modern style.

</p>





<Link to="/shop">


<button

style={{

marginTop:"25px",

padding:"15px 40px",

borderRadius:"30px",

border:"none",

background:"white",

color:"#020617",

fontWeight:"bold",

cursor:"pointer"

}}

>

Explore Collection

</button>


</Link>



</div>









{/* 3D PRODUCT */}



<div

style={{

flex:1,

display:"flex",

justifyContent:"center"

}}

>



<div

style={{

width:"420px",

height:"420px",

background:

"linear-gradient(145deg,#1e293b,#020617)",

borderRadius:"50%",

display:"flex",

alignItems:"center",

justifyContent:"center",

boxShadow:"0 40px 100px rgba(0,0,0,.6)"

}}

>


<img
src="/images/showcase.png"
alt="collection"
style={{
width:"90%",
height:"90%",
objectFit:"cover",
borderRadius:"50%",
animation:"float 3s ease-in-out infinite"
}}
/>


</div>


</div>







</div>







<style>

{`

@keyframes float{

0%{

transform:translateY(0px);

}

50%{

transform:translateY(-25px);

}

100%{

transform:translateY(0px);

}

}

`}

</style>





</section>


)

}


export default Showcase;