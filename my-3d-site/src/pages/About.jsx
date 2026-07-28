import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function About(){


return(

<>

<Navbar/>


{/* Hero */}

<section

style={{

height:"70vh",

background:
"linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('/images/banner.jpg')",

backgroundSize:"cover",

backgroundPosition:"center",

display:"flex",

alignItems:"center",

justifyContent:"center",

color:"white",

textAlign:"center"

}}

>


<div>


<h1

style={{

fontSize:"60px",

fontWeight:"800"

}}

>

About HustleWear

</h1>


<p

style={{

fontSize:"22px"

}}

>

Built for people who never stop chasing greatness.

</p>


</div>


</section>






{/* Story */}


<section

style={{

padding:"80px 20px",

textAlign:"center"

}}

>


<h1>

Our Story

</h1>



<p

style={{

maxWidth:"800px",

margin:"30px auto",

fontSize:"18px",

lineHeight:"1.8",

color:"#475569"

}}

>

HustleWear is a modern street fashion brand created for
those who believe style represents confidence.

Our mission is to create premium quality clothing with
modern designs that match everyday lifestyle.

</p>



</section>







{/* Mission Cards */}


<section

style={{

background:"#f8fafc",

padding:"70px 20px"

}}

>



<div

style={{

display:"flex",

justifyContent:"center",

gap:"30px",

flexWrap:"wrap"

}}

>



<Card

title="Premium Quality"

text="High quality fabrics and comfortable designs."

/>


<Card

title="Modern Style"

text="Fashion inspired by street culture."

/>


<Card

title="Customer First"

text="Creating the best shopping experience."

/>



</div>


</section>







{/* Brand Quote */}



<section

style={{

padding:"80px 20px",

background:"#0f172a",

color:"white",

textAlign:"center"

}}

>


<h1>

"Style is not just what you wear, it's who you are."

</h1>


</section>





<Footer/>


</>

)

}





function Card({title,text}){


return(

<div

style={{

width:"280px",

background:"white",

padding:"30px",

borderRadius:"20px",

boxShadow:"0 10px 25px rgba(0,0,0,.1)"

}}

>


<h2>

{title}

</h2>


<p>

{text}

</p>


</div>


)

}



export default About;